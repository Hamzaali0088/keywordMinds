import React from 'react'
import Image from 'next/image'

export default function Demo() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See KeywordMinds in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a quick preview of our powerful dashboard that transforms how you track, analyze, and optimize your SEO performance.
          </p>
        </div>

        {/* Demo Container */}
        <div className="relative">
          {/* Main Demo Image */}
          <div className="relative mx-auto max-w-6xl">
            {/* Shadow and Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl transform scale-110"></div>
            
            {/* Demo Image Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              {/* Browser-like Header */}
              <div className="bg-gray-100 px-6 py-3 flex items-center space-x-2 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded-lg px-4 py-1 mx-4 text-sm text-gray-500">
                  keywordminds.com/dashboard
                </div>
              </div>
              
              {/* Demo Image */}
              <div className="relative">
                <Image
                  src="/st-images/demo.png"
                  alt="KeywordMinds Dashboard Demo"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Overlay Features */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Feature Highlights */}
                  <div className="absolute top-1/4 left-1/4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Real-time Rankings
                  </div>
                  <div className="absolute top-1/3 right-1/4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{animationDelay: '1s'}}>
                    Competitor Analysis
                  </div>
                  <div className="absolute bottom-1/3 left-1/3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{animationDelay: '2s'}}>
                    Keyword Insights
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-100 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
            <p className="text-gray-600">Track your keyword rankings and performance metrics in real-time with instant updates.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitor Insights</h3>
            <p className="text-gray-600">Analyze your competitors' strategies and identify opportunities to outperform them.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Recommendations</h3>
            <p className="text-gray-600">Get AI-powered suggestions to optimize your content and improve search rankings.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your SEO Strategy?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of SEO professionals who trust KeywordMinds to drive their search success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
