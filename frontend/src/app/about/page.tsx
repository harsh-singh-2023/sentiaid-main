export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">SentiAid</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Empowering inclusive communication through AI-powered Indian Sign Language translation
          </p>
        </div>

        <div className="space-y-12">
          {/* Mission Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SentiAid is a deep-tech SaaS platform enabling seamless Indian Sign Language (ISL) translation using AI and NLP. 
              We serve media houses, government agencies, educational institutions, and public infrastructure - helping them meet 
              accessibility mandates and reach underserved deaf and mute communities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our MVP enables both live and recorded content translation into ISL, making media and information inclusive. 
              Backed by the VIT TBI, NSRCEL IIM Bangalore, Microsoft, AWS, Wadhwani Foundation & Startlabs Innovations, 
              SentiAid brings together state-of-the-art AI, scalable cloud infrastructure, and domain-specific training to 
              build India&apos;s most reliable sign language accessibility solution.
            </p>
          </section>

          {/* Target Audience Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">News & Entertainment</h3>
                    <p className="text-gray-400 text-sm">TV channels and OTT platforms for inclusive content</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Educational Institutions</h3>
                    <p className="text-gray-400 text-sm">Schools and colleges for inclusive learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Government Agencies</h3>
                    <p className="text-gray-400 text-sm">Public communication and emergency updates</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Public Infrastructure</h3>
                    <p className="text-gray-400 text-sm">Airports, metros, and transportation hubs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Corporate Training</h3>
                    <p className="text-gray-400 text-sm">Inclusive brand messaging and employee training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Live Events</h3>
                    <p className="text-gray-400 text-sm">Sports, rallies, and public gatherings</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">AI & Machine Learning</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Advanced NLP processing with NLTK and spaCy</li>
                  <li>• Real-time speech-to-text conversion</li>
                  <li>• Intelligent grammar and tense analysis</li>
                  <li>• Continuous learning from user feedback</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">Infrastructure</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scalable cloud architecture (AWS/GCP/Azure)</li>
                  <li>• High-performance video processing</li>
                  <li>• Multi-tenant SaaS platform</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="bg-gradient-to-r from-emerald-600/20 to-purple-600/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">63M+</div>
                <p className="text-gray-300">People with hearing impairment in India</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">&lt;5%</div>
                <p className="text-gray-300">Current accessibility coverage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <p className="text-gray-300">Our goal for inclusive communication</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}