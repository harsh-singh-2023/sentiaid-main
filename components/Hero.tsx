'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "AI-Powered Sign Language Translation",
      subtitle: "Breaking communication barriers with cutting-edge technology",
      description: "Real-time conversion of speech and text into Indian Sign Language, making content accessible to everyone.",
    },
    {
      title: "Real-Time Processing",
      subtitle: "Instant translation for live conversations",
      description: "Experience seamless communication with sub-second response times and high accuracy translations.",
    },
    {
      title: "Universal Accessibility",
      subtitle: "Empowering inclusion in every space",
      description: "From classrooms to boardrooms, ensure everyone can participate in meaningful conversations.",
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">
                {slides[currentSlide].title}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
              {slides[currentSlide].subtitle}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/converter"
              className="bg-primary text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 neon-glow"
            >
              Start Converting
            </Link>
            <Link
              href="/about"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">AI-Powered</h3>
              <p className="text-gray-400">Advanced NLP and machine learning algorithms for accurate translations</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Real-Time</h3>
              <p className="text-gray-400">Instant processing with sub-second response times</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Universal Access</h3>
              <p className="text-gray-400">Available across web, mobile, and integrated platforms</p>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero