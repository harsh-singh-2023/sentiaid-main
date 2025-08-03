'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

// TypeScript declarations for Web Speech API
declare global {
  interface Window {
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onstart: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: () => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

interface WordItem {
  word: string;
  index: number;
}

export default function ConverterPage() {
  const [inputText, setInputText] = useState('');
  const [processedText, setProcessedText] = useState('');
  const [words, setWords] = useState<WordItem[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Speech recognition setup
  const startSpeechRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognitionRef.current = recognition;
      
      recognition.lang = 'en-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  // Process text to extract words for sign language
  const processText = async () => {
    if (!inputText.trim()) return;

    setIsProcessing(true);
    try {
      // Try to connect to Django backend API
      const response = await fetch('http://localhost:8000/api/process-text/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (response.ok) {
        const data = await response.json();
        setProcessedText(data.processed_text);
        setWords(data.words.map((word: string, index: number) => ({ word, index })));
      } else {
        // Fallback processing for demo
        const demoWords = inputText.toLowerCase().split(' ').filter(word => word.length > 0);
        setProcessedText(inputText);
        setWords(demoWords.map((word, index) => ({ word, index })));
      }
    } catch (error: unknown) {
      // Fallback processing for demo - Django backend not available
      console.log('Django API not available, using fallback processing');
      const demoWords = inputText.toLowerCase().split(' ').filter(word => word.length > 0);
      setProcessedText(inputText);
      setWords(demoWords.map((word, index) => ({ word, index })));
    }
    setIsProcessing(false);
  };

  // Play sign language videos
  const playVideos = () => {
    if (words.length === 0) return;

    setIsPlaying(true);
    setCurrentVideoIndex(0);
    playVideo(0);
  };

  const playVideo = (index: number) => {
    if (index >= words.length) {
      setIsPlaying(false);
      setCurrentVideoIndex(0);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const word = words[index].word;
    // Try to load the video for this word
    video.src = `/${word}.mp4`;
    video.load();

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If video doesn't exist, skip to next
        setTimeout(() => playVideo(index + 1), 500);
      });
    }
  };

  const handleVideoEnded = () => {
    const nextIndex = currentVideoIndex + 1;
    setCurrentVideoIndex(nextIndex);
    playVideo(nextIndex);
  };

  const stopVideos = () => {
    setIsPlaying(false);
    setCurrentVideoIndex(0);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-7xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            AI Sign Language <span className="text-emerald-400">Converter</span>
          </h1>
          <p className="text-xl text-gray-300">
            Convert speech or text to Indian Sign Language (ISL) animations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Input Text or Speech</h2>
            
            {/* Text Input */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message here or use the microphone..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={isRecording ? stopSpeechRecognition : startSpeechRecognition}
                  className={`p-3 rounded-lg transition-colors duration-200 ${
                    isRecording
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-emerald-500 hover:bg-emerald-600'
                  }`}
                >
                  <Image
                    src="/mic3.png"
                    alt="Microphone"
                    width={24}
                    height={24}
                    className={isRecording ? 'animate-pulse' : ''}
                  />
                </button>
              </div>
              
              {isRecording && (
                <div className="text-emerald-400 text-sm mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Recording... Speak now
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={processText}
                disabled={!inputText.trim() || isProcessing}
                className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {isProcessing ? 'Processing...' : 'Convert to ISL'}
              </button>
              <button
                onClick={() => {
                  setInputText('');
                  setProcessedText('');
                  setWords([]);
                  stopVideos();
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Clear
              </button>
            </div>

            {/* Processed Text Display */}
            {processedText && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Processed Text:</h3>
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 text-gray-300">
                  {processedText}
                </div>
              </div>
            )}

            {/* Words List */}
            {words.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Words to Convert:</h3>
                <div className="flex flex-wrap gap-2">
                  {words.map((item) => (
                    <span
                      key={item.index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        currentVideoIndex === item.index && isPlaying
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {item.word}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Video Player Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Sign Language Animation</h2>
            
            <div className="aspect-video bg-black rounded-lg mb-6 flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                className="rounded-lg"
                onEnded={handleVideoEnded}
                preload="metadata"
              >
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {words.length === 0 && (
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Enter text and convert to see ISL animations</p>
                </div>
              )}
            </div>

            {/* Video Controls */}
            {words.length > 0 && (
              <div className="flex gap-4 justify-center">
                <button
                  onClick={isPlaying ? stopVideos : playVideos}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  {isPlaying ? (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Stop
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Play Animation
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Current Word Display */}
            {isPlaying && words.length > 0 && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">Currently showing:</p>
                <p className="text-xl font-semibold text-emerald-400">
                  {words[currentVideoIndex]?.word || ''}
                </p>
                <p className="text-sm text-gray-400">
                  {currentVideoIndex + 1} of {words.length}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-gray-800/30 border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How to Use:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-white">Input Text</h4>
                <p className="text-sm">Type your message or use the microphone to record speech</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-white">Convert</h4>
                <p className="text-sm">Click &ldquo;Convert to ISL&rdquo; to process your text with AI</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-white">Watch</h4>
                <p className="text-sm">Play the animation to see the ISL translation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}