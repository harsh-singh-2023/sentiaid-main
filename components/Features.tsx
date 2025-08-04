'use client'

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Precise Translation',
      description: 'Advanced AI algorithms ensure accurate interpretation of context, tone, and meaning in Indian Sign Language.',
      details: ['99%+ accuracy rate', 'Context-aware processing', 'Continuous learning'],
    },
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Real-time processing with minimal latency, perfect for live conversations and presentations.',
      details: ['Sub-second response', 'Cloud-powered scaling', 'Optimized performance'],
    },
    {
      icon: '📱',
      title: 'Multi-Platform',
      description: 'Access SentiAid across web browsers, mobile devices, and integrate with existing systems.',
      details: ['Web application', 'Mobile responsive', 'API integration'],
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with privacy regulations.',
      details: ['AES-256 encryption', 'GDPR compliant', 'Zero data retention'],
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into usage patterns, accuracy metrics, and engagement statistics.',
      details: ['Usage analytics', 'Performance metrics', 'Custom reporting'],
    },
    {
      icon: '🌍',
      title: 'Scalable Solution',
      description: 'From individual users to enterprise deployments, SentiAid scales to meet your needs.',
      details: ['Enterprise ready', 'Custom deployments', 'White-label options'],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how SentiAid transforms communication with cutting-edge AI technology
            and user-centric design principles.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glassmorphism p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="glassmorphism rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">&lt;1s</div>
                <div className="text-gray-400">Response Time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">63M+</div>
                <div className="text-gray-400">People Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-400">Availability</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already using SentiAid to create more inclusive environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features