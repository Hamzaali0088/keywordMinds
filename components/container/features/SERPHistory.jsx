import React from 'react'
import Container from '../../common/Container'

export default function SERPHistory() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            SERP History
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Timeline & Snapshots
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View complete timeline of ranking changes with detailed SERP snapshots. Understand what drives your ranking fluctuations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Ranking Timeline</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Major Ranking Jump</h4>
                      <span className="text-sm text-purple-600 font-bold">+5 positions</span>
                    </div>
                    <p className="text-gray-600 mb-3">Moved from #8 to #3 for "best SEO tools"</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Dec 15, 2024</span>
                      <span>•</span>
                      <span>Google Core Update</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Slight Drop</h4>
                      <span className="text-sm text-red-600 font-bold">-2 positions</span>
                    </div>
                    <p className="text-gray-600 mb-3">Dropped from #3 to #5 for "keyword tracking"</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Dec 10, 2024</span>
                      <span>•</span>
                      <span>Competitor Content</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Steady Growth</h4>
                      <span className="text-sm text-purple-600 font-bold">+1 position</span>
                    </div>
                    <p className="text-gray-600 mb-3">Improved from #6 to #5 for "SEO software"</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Dec 5, 2024</span>
                      <span>•</span>
                      <span>Content Update</span>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">Stable Position</h4>
                      <span className="text-sm text-gray-600 font-bold">No change</span>
                    </div>
                    <p className="text-gray-600 mb-3">Maintained #8 position for "rank tracker"</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Dec 1, 2024</span>
                      <span>•</span>
                      <span>Regular Update</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERP Snapshots */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">SERP Snapshots</h3>
            
            <div className="space-y-6">
              {/* Current SERP */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Current SERP</h4>
                  <span className="text-sm text-purple-600 font-bold">#3 Position</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-red-600 text-sm mb-1">https://example.com</div>
                    <div className="font-medium text-gray-900 mb-1">Best SEO Tools for 2024 - Complete Guide</div>
                    <div className="text-gray-600 text-sm">Comprehensive guide to the best SEO tools available in 2024. Compare features, pricing, and performance...</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-red-600 text-sm mb-1">https://competitor1.com</div>
                    <div className="font-medium text-gray-900 mb-1">Top 10 SEO Tools You Need in 2024</div>
                    <div className="text-gray-600 text-sm">Discover the most effective SEO tools that will help you improve your search rankings...</div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <div className="text-red-600 text-sm mb-1">https://yoursite.com</div>
                    <div className="font-medium text-gray-900 mb-1">Ultimate SEO Tools Comparison 2024</div>
                    <div className="text-gray-600 text-sm">Compare the best SEO tools side by side. Find the perfect solution for your business needs...</div>
                  </div>
                </div>
              </div>

              {/* Historical Comparison */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Previous SERP (Dec 10)</h4>
                  <span className="text-sm text-red-600 font-bold">#5 Position</span>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-red-600 text-sm mb-1">https://competitor1.com</div>
                    <div className="font-medium text-gray-900 mb-1">Top 10 SEO Tools You Need in 2024</div>
                    <div className="text-gray-600 text-sm">Discover the most effective SEO tools that will help you improve your search rankings...</div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-red-600 text-sm mb-1">https://competitor2.com</div>
                    <div className="font-medium text-gray-900 mb-1">SEO Tools Comparison 2024</div>
                    <div className="text-gray-600 text-sm">Compare different SEO tools and find the best one for your website...</div>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="text-red-600 text-sm mb-1">https://yoursite.com</div>
                    <div className="font-medium text-gray-900 mb-1">Ultimate SEO Tools Comparison 2024</div>
                    <div className="text-gray-600 text-sm">Compare the best SEO tools side by side. Find the perfect solution for your business needs...</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                View Full History
              </button>
              <button className="border-2 border-red-300 hover:border-red-400 text-red-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 