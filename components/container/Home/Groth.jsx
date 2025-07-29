import React from 'react'

export default function Groth() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left Block - Problem Statement */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Ranking your sites is becoming increasingly difficult...
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Competitors get smarter and the big G keeps changing the rules. But you know there's a money keyword hidden on each project. The one that keeps you up at night. It is your job to find and monetize it — are you up for the challenge?
            </p>
            
            {/* Declining Graph */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ranking History</h3>
              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Grid lines */}
                  <defs>
                    <linearGradient id="declineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path 
                    d="M0 50 L50 60 L100 80 L150 100 L200 120 L250 140 L300 160 L350 180 L400 200 L400 200 L0 200 Z" 
                    fill="url(#declineGradient)"
                  />
                  
                  {/* Line */}
                  <path 
                    d="M0 50 L50 60 L100 80 L150 100 L200 120 L250 140 L300 160 L350 180 L400 200" 
                    stroke="#ef4444" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="0" cy="50" r="4" fill="#ef4444"/>
                  <circle cx="50" cy="60" r="4" fill="#ef4444"/>
                  <circle cx="100" cy="80" r="4" fill="#ef4444"/>
                  <circle cx="150" cy="100" r="4" fill="#ef4444"/>
                  <circle cx="200" cy="120" r="4" fill="#ef4444"/>
                  <circle cx="250" cy="140" r="4" fill="#ef4444"/>
                  <circle cx="300" cy="160" r="4" fill="#ef4444"/>
                  <circle cx="350" cy="180" r="4" fill="#ef4444"/>
                  <circle cx="400" cy="200" r="4" fill="#ef4444"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Block - Solution */}
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
              Keyword.com removes the noise to single out your winning ideas
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              See how your keywords rank over time with our{' '}
              <span className="text-blue-300 font-medium">SERP keyword tracker</span> and{' '}
              <span className="text-blue-300 font-medium">search engine positioning tool</span>. 
              Discover who your true competitors really are and how to beat them. Keyword.com's keyword monitoring software crunches the number so you can focus on your insights.
            </p>
            
            {/* Improving Graph */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ranking History</h3>
              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Grid lines */}
                  <defs>
                    <linearGradient id="improveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path 
                    d="M0 200 L50 180 L100 160 L150 140 L200 120 L250 100 L300 80 L350 60 L400 40 L400 200 L0 200 Z" 
                    fill="url(#improveGradient)"
                  />
                  
                  {/* Line */}
                  <path 
                    d="M0 200 L50 180 L100 160 L150 140 L200 120 L250 100 L300 80 L350 60 L400 40" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="0" cy="200" r="4" fill="#10b981"/>
                  <circle cx="50" cy="180" r="4" fill="#10b981"/>
                  <circle cx="100" cy="160" r="4" fill="#10b981"/>
                  <circle cx="150" cy="140" r="4" fill="#10b981"/>
                  <circle cx="200" cy="120" r="4" fill="#10b981"/>
                  <circle cx="250" cy="100" r="4" fill="#10b981"/>
                  <circle cx="300" cy="80" r="4" fill="#10b981"/>
                  <circle cx="350" cy="60" r="4" fill="#10b981"/>
                  <circle cx="400" cy="40" r="4" fill="#10b981"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-6xl text-blue-600 mb-6">"</div>
          <blockquote className="text-2xl text-gray-800 font-medium mb-8 leading-relaxed">
            With Keyword.com, I just open a new tag, dump in my keywords, and it's done. It's so much faster and more nimble than any other tool.
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-semibold">ST</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-800">Steve Toth</div>
              <div className="text-gray-600">SEO Consultant, SeoNotebook.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
