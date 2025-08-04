'use client'

import { useState, useRef, useEffect } from 'react'
import Navbar from '@/components/Navbar'

interface ConversionResult {
  words: string[]
  text: string
  tense: string
  processingTime: number
}

const ConverterPage = () => {
  const [inputText, setInputText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<ConversionResult | null>(null)
  const [isListening, setIsListening] = useState(false)
  const [error, setError] = useState('')
  const recognitionRef = useRef<any>(null)

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputText(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
        setError('Speech recognition error. Please try again.')
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [])

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true)
      setError('')
      recognitionRef.current.start()
    } else {
      setError('Speech recognition not supported in your browser.')
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const processText = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to convert.')
      return
    }

    setIsProcessing(true)
    setError('')
    
    try {
      const startTime = Date.now()
      
      // Simulate the Django processing logic
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      })

      if (!response.ok) {
        throw new Error('Conversion failed')
      }

      const data = await response.json()
      const processingTime = Date.now() - startTime

      setResult({
        ...data,
        processingTime,
      })
    } catch (err) {
      setError('Failed to process text. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const clearAll = () => {
    setInputText('')
    setResult(null)
    setError('')
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">AI Sign Language Converter</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform speech and text into Indian Sign Language with our advanced AI technology.
              Experience real-time, accurate translations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-primary">Input Text</h2>
              
              {/* Text Input */}
              <div className="mb-6">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter text to convert to sign language..."
                  className="w-full h-40 p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Controls */}
              <div className="space-y-4">
                {/* Voice Input */}
                <div className="flex items-center space-x-4">
                  <button
                    onClick={isListening ? stopListening : startListening}
                    disabled={isProcessing}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isListening
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-gray-300'
                    }`}
                  >
                    {isListening ? (
                      <>
                        <div className="w-4 h-4 bg-red-300 rounded-full animate-pulse"></div>
                        <span>Stop Recording</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                        </svg>
                        <span>Voice Input</span>
                      </>
                    )}
                  </button>
                  <span className="text-sm text-gray-400">
                    {isListening ? 'Listening...' : 'Click to start voice input'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={processText}
                    disabled={isProcessing || !inputText.trim()}
                    className="flex-1 bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Converting...</span>
                      </div>
                    ) : (
                      'Convert to Sign Language'
                    )}
                  </button>
                  <button
                    onClick={clearAll}
                    className="px-6 py-3 border-2 border-gray-500 text-gray-300 rounded-lg font-semibold hover:bg-gray-500 hover:text-white transition-colors duration-200"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-200">{error}</p>
                </div>
              )}
            </div>

            {/* Output Section */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-primary">Sign Language Output</h2>
              
              {!result ? (
                <div className="flex items-center justify-center h-64 text-gray-400">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v11a1 1 0 01-1 1H8a1 1 0 01-1-1V4h10z" />
                    </svg>
                    <p>Your sign language translation will appear here</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Processing Info */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-400">Processing Time</p>
                      <p className="text-lg font-semibold text-primary">{result.processingTime}ms</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Detected Tense</p>
                      <p className="text-lg font-semibold text-primary capitalize">{result.tense}</p>
                    </div>
                  </div>

                  {/* Sign Language Words */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Sign Sequence:</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {result.words.map((word, index) => (
                        <div
                          key={index}
                          className="bg-white/10 p-3 rounded-lg text-center hover:bg-white/20 transition-colors duration-200"
                        >
                          <div className="text-2xl mb-2">👋</div>
                          <p className="text-sm font-medium">{word}</p>
                          <p className="text-xs text-gray-400">#{index + 1}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Original Text */}
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">Original Text:</h3>
                    <p className="text-white">{result.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glassmorphism p-6 rounded-xl">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-primary mb-2">AI-Powered</h3>
                <p className="text-sm text-gray-400">Advanced NLP processing for accurate translations</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-primary mb-2">Real-Time</h3>
                <p className="text-sm text-gray-400">Instant processing with sub-second response times</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-primary mb-2">Accurate</h3>
                <p className="text-sm text-gray-400">99%+ accuracy with contextual understanding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConverterPage