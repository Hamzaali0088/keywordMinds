import React from 'react'
import Container from '../../common/Container'
import { MessageCircle, Lightbulb, BarChart3, TrendingUp } from 'lucide-react'

export default function AIVisibilityTracking() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            AI Visibility Tracking
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Search Monitoring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your visibility in AI-powered search results including ChatGPT and Gemini. Monitor AI search performance and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* AI Platforms */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">AI Search Platforms</h3>
            
            <div className="space-y-6">
              {/* ChatGPT Search */}
              <div className="bg-gradient-to-br from-black to-secondary p-6 rounded-xl shadow-lg border border-purple-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">ChatGPT Search</h4>
                    <p className="text-purple-100">Monitor your presence in ChatGPT search results</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-100">Current Visibility</span>
                  <span className="text-lg font-bold text-white">87%</span>
                </div>
              </div>

              {/* Gemini AI */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Gemini AI</h4>
                    <p className="text-gray-300">Track performance in Google's Gemini AI</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">Current Visibility</span>
                  <span className="text-lg font-bold text-white">92%</span>
                </div>
              </div>

              {/* AI Search Insights */}
              <div className="bg-gradient-to-br from-black to-secondary p-6 rounded-xl shadow-lg border border-purple-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">AI Search Insights</h4>
                    <p className="text-purple-100">Comprehensive AI search analytics</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-100">AI Keywords</span>
                  <span className="text-lg font-bold text-white">156</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary hover:bg-secondary/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Start AI Tracking
              </button>
              <button className="border-2 border-secondary hover:border-secondary/80 text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                View AI Report
              </button>
            </div>
          </div>

          {/* AI Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">AI Search Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* AI Performance Overview */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">AI Performance Overview</h4>
                <div className="grid grid-cols-2 gap-4"> 
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">89%</div>
                    <div className="text-sm text-gray-600">Avg AI Visibility</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">+12%</div>
                    <div className="text-sm text-gray-600">This Month</div>
                  </div>
                </div>
              </div>

              {/* AI Search Results */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">AI Search Results</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>
                      <span className="text-sm text-gray-700">"Best SEO tools" in ChatGPT</span>
                    </div>
                    <span className="text-sm font-bold text-purple-600">#2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">G</div>
                      <span className="text-sm text-gray-700">"Keyword tracking" in Gemini</span>
                    </div>
                    <span className="text-sm font-bold text-red-600">#1</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>
                      <span className="text-sm text-gray-700">"Rank monitoring" in ChatGPT</span>
                    </div>
                    <span className="text-sm font-bold text-purple-600">#3</span>
                  </div>
                </div>
              </div>

              {/* AI Search Trends */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Search Trends</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">ChatGPT visibility increased 15%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Gemini AI queries up 23%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">New AI keywords discovered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">ChatGPT Tracking</h4>
            <p className="text-sm text-gray-600">Monitor ChatGPT search presence</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Gemini Monitoring</h4>
            <p className="text-sm text-gray-600">Track Gemini AI performance</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">AI Insights</h4>
            <p className="text-sm text-gray-600">Comprehensive AI analytics</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">AI Analytics</h4>
            <p className="text-sm text-gray-600">Advanced AI performance data</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary hover:bg-secondary/80 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-secondary hover:border-secondary/80 text-secondary font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
} 