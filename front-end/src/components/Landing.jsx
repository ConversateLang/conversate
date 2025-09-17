import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthCon'
import logo from '../assets/logo.png'

const Landing = () => {
  const navigate = useNavigate()
  const { session } = UserAuth()

  useEffect(() => {
    // Only run this check if session is not undefined (it's been loaded)
    if (session !== undefined) {
      if (session?.user?.id) {
        // User is authenticated, redirect to dashboard
        navigate('/dashboard')
      }
      // If session is null (not authenticated), stay on landing page
    }
  }, [session, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      {/* Navigation */}
      <nav className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="navbar-start">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Conversate Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-primary">Conversate</span>
          </div>
        </div>
        <div className="navbar-end space-x-2">
          <Link to="/login" className="btn btn-ghost">Sign In</Link>
          <Link to="/register" className="btn btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero py-20 px-4">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-base-content mb-6 leading-tight">
              Connect. Chat. 
              <span className="text-primary"> Learn Together.</span>
            </h1>
            <p className="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              The world's most natural way to learn languages. Connect with native speakers, 
              exchange knowledge, and master new languages through real conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn btn-primary btn-lg">
                Start Learning Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button className="btn btn-outline btn-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Language Exchange Illustration */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-base-content mb-6">
                How Language Exchange Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Find Your Language Partner</h3>
                    <p className="text-base-content/70">Match with someone who speaks your target language and wants to learn yours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Start Conversations</h3>
                    <p className="text-base-content/70">Chat naturally about topics you love while practicing both languages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Learn & Teach</h3>
                    <p className="text-base-content/70">Help each other improve through mutual teaching and real-time corrections.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                  {/* User 1 */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-2xl">🇺🇸</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-md">
                      <p className="text-sm font-medium">Sarah</p>
                      <p className="text-xs text-gray-600">Speaks: English</p>
                      <p className="text-xs text-gray-600">Learning: French</p>
                    </div>
                  </div>
                  {/* Connection */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white text-2xl">🇫🇷</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-md">
                      <p className="text-sm font-medium">Pierre</p>
                      <p className="text-xs text-gray-600">Speaks: French</p>
                      <p className="text-xs text-gray-600">Learning: English</p>
                    </div>
                  </div>
                </div>
                {/* Chat Bubbles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-base-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Why Choose Conversate?
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              We've designed the perfect environment for language learners to connect, practice, and grow together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="card-title justify-center mb-3">Smart Matching</h3>
                <p className="text-base-content/70">
                  Our intelligent algorithm connects you with the perfect language partner based on your goals and interests.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="card-title justify-center mb-3">Real Conversations</h3>
                <p className="text-base-content/70">
                  Practice through natural, flowing conversations about topics that matter to you and your partner.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="card-title justify-center mb-3">Mutual Learning</h3>
                <p className="text-base-content/70">
                  Both users benefit equally - teach your native language while learning theirs in a supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Examples */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Popular Language Exchanges
          </h2>
          <p className="text-xl text-base-content/70 mb-12">
            Join thousands of learners already practicing these language pairs
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { from: '🇺🇸', to: '🇪🇸', pair: 'English ↔ Spanish' },
              { from: '🇫🇷', to: '🇬🇧', pair: 'French ↔ English' },
              { from: '🇩🇪', to: '🇺🇸', pair: 'German ↔ English' },
              { from: '🇯🇵', to: '🇺🇸', pair: 'Japanese ↔ English' },
              { from: '🇰🇷', to: '🇺🇸', pair: 'Korean ↔ English' },
              { from: '🇮🇹', to: '🇺🇸', pair: 'Italian ↔ English' },
              { from: '🇧🇷', to: '🇺🇸', pair: 'Portuguese ↔ English' },
              { from: '🇨🇳', to: '🇺🇸', pair: 'Chinese ↔ English' }
            ].map((lang, index) => (
              <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="card-body p-4">
                  <div className="flex items-center justify-center space-x-2 text-2xl mb-2">
                    <span>{lang.from}</span>
                    <svg className="w-4 h-4 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span>{lang.to}</span>
                  </div>
                  <p className="text-sm text-base-content/70">{lang.pair}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Language Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of language learners and start having meaningful conversations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Create Free Account
            </Link>
            <Link to="/login" className="btn btn-ghost btn-lg text-white hover:bg-white/20">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Conversate Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-primary">Conversate</span>
          </div>
          <p className="max-w-md">
            Connecting language learners worldwide through meaningful conversations and cultural exchange.
          </p>
          <p className="text-base-content/60">
            © 2025 Conversate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
