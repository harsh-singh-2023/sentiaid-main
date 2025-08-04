'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Harsh Singh',
      role: 'Founder & CEO',
      description: 'AI researcher and accessibility advocate with a vision to break communication barriers.',
      avatar: '👨‍💻',
    },
    {
      name: 'Development Team',
      role: 'Engineering Excellence',
      description: 'Expert developers creating cutting-edge AI solutions for sign language translation.',
      avatar: '👥',
    },
    {
      name: 'Research Team',
      role: 'AI & Linguistics',
      description: 'Specialists in NLP, computer vision, and sign language research.',
      avatar: '🔬',
    },
  ]

  const milestones = [
    {
      year: '2023',
      title: 'SentiAid Founded',
      description: 'Established with a mission to make communication inclusive through AI technology.',
    },
    {
      year: '2023',
      title: 'NSRCEL Partnership',
      description: 'Selected by NSRCEL IIM Bangalore Campus Founder Program for acceleration.',
    },
    {
      year: '2024',
      title: 'AI Model Development',
      description: 'Launched advanced ISL translation models with 99%+ accuracy rates.',
    },
    {
      year: '2024',
      title: 'Platform Launch',
      description: 'Released Next.js-powered platform with real-time processing capabilities.',
    },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      
      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About SentiAid</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're building the future of inclusive communication through AI-powered 
              sign language translation technology.
            </p>
            <div className="glassmorphism p-8 rounded-2xl">
              <p className="text-lg text-gray-400 leading-relaxed">
                SentiAid is more than just a translation platform—it's a bridge connecting 
                hearing and deaf communities. Our mission is to ensure that no one is left 
                behind in conversations, education, media, or any aspect of digital life.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glassmorphism p-8 rounded-2xl">
                <div className="text-4xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To democratize access to information and communication by providing 
                  real-time, accurate Indian Sign Language translation. We believe that 
                  technology should serve everyone, and communication barriers should 
                  never limit anyone's potential.
                </p>
              </div>
              <div className="glassmorphism p-8 rounded-2xl">
                <div className="text-4xl mb-6">🔮</div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  A world where sign language is universally understood and accessible 
                  through AI technology. Where every media broadcast, educational content, 
                  and public announcement is automatically inclusive for the deaf and 
                  hard-of-hearing community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Why Choose SentiAid?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🇮🇳</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">India-Focused</h3>
                <p className="text-gray-400">Specialized in Indian Sign Language (ISL), not generic ASL translations</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Real-Time Processing</h3>
                <p className="text-gray-400">Sub-second response times for live conversations and broadcasts</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">99%+ Accuracy</h3>
                <p className="text-gray-400">State-of-the-art AI models trained specifically for ISL</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Easy Integration</h3>
                <p className="text-gray-400">APIs and SDKs for seamless integration with existing platforms</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Enterprise Security</h3>
                <p className="text-gray-400">AES-256 encryption and GDPR compliance for data protection</p>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Analytics & Insights</h3>
                <p className="text-gray-400">Comprehensive dashboards for usage tracking and compliance reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Our Journey</span>
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {milestone.year}
                  </div>
                  <div className="glassmorphism p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="glassmorphism p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl mb-6">{member.avatar}</div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{member.name}</h3>
                  <p className="text-lg text-gray-300 mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="glassmorphism p-12 rounded-2xl">
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="gradient-text">Our Impact</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">63M+</div>
                  <div className="text-gray-400">People with hearing impairment in India</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99%</div>
                  <div className="text-gray-400">Translation accuracy achieved</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">&lt;1s</div>
                  <div className="text-gray-400">Average processing time</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-400">Service availability</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Join the Movement</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the inclusive communication revolution. Start using SentiAid today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-black transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default AboutPage