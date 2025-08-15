import React from 'react'
import Container from '../../common/Container'
import { MessageCircle, Lightbulb, BarChart3, TrendingUp } from 'lucide-react'

export default function AIVisibilityTracking() {
  return (
    <section className="py-20 bg-gradient-to-br from-background-light to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            AI Visibility Tracking
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            AI Search Monitoring
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Track your visibility in AI-powered search results including ChatGPT and Gemini. Monitor AI search performance and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* AI Platforms */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-text-primary">AI Search Platforms</h3>
            
            <div className="space-y-6">
              {/* ChatGPT Search */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">ChatGPT Search</h4>
                    <p className="text-white/80">Monitor your presence in ChatGPT search results</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Current Visibility</span>
                  <span className="text-lg font-bold text-white">87%</span>
                </div>
              </div>

              {/* Gemini AI */}
              <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-xl shadow-lg border border-secondary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Gemini AI</h4>
                    <p className="text-white/80">Track performance in Google's Gemini AI</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">Current Visibility</span>
                  <span className="text-lg font-bold text-white">92%</span>
                </div>
              </div>

              {/* AI Search Insights */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">AI Search Insights</h4>
                    <p className="text-white/80">Comprehensive AI search analytics</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/80">AI Keywords</span>
                  <span className="text-lg font-bold text-white">156</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Start AI Tracking
              </button>
              <button className="border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
                View AI Report
              </button>
            </div>
          </div>

          {/* AI Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-text-secondary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text-primary">AI Search Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="w-3 h-3 bg-text-secondary rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* AI Performance Overview */}
              <div className="bg-gradient-to-r from-background-light to-text-secondary/20 p-6 rounded-xl border border-text-secondary/20">
                <h4 className="text-lg font-semibold text-text-primary mb-4">AI Performance Overview</h4>
                <div className="grid grid-cols-2 gap-4"> 
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">89%</div>
                    <div className="text-sm text-text-secondary">Avg AI Visibility</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">+12%</div>
                    <div className="text-sm text-text-secondary">This Month</div>
                  </div>
                </div>
              </div>

              {/* AI Search Results */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">AI Search Results</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>
                      <span className="text-sm text-text-primary">"Best SEO tools" in ChatGPT</span>
                    </div>
                    <span className="text-sm font-bold text-primary">#2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">G</div>
                      <span className="text-sm text-text-primary">"Keyword tracking" in Gemini</span>
                    </div>
                    <span className="text-sm font-bold text-secondary">#1</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>
                      <span className="text-sm text-text-primary">"Rank monitoring" in ChatGPT</span>
                    </div>
                    <span className="text-sm font-bold text-primary">#3</span>
                  </div>
                </div>
              </div>

              {/* AI Search Trends */}
              <div className="bg-background-light p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-text-primary mb-3">AI Search Trends</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">ChatGPT visibility increased 15%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-text-secondary">Gemini AI queries up 23%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">New AI keywords discovered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">ChatGPT Tracking</h4>
            <p className="text-sm text-text-secondary">Monitor ChatGPT search presence</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Gemini Monitoring</h4>
            <p className="text-sm text-text-secondary">Track Gemini AI performance</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">AI Insights</h4>
            <p className="text-sm text-text-secondary">Comprehensive AI analytics</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">AI Analytics</h4>
            <p className="text-sm text-text-secondary">Advanced AI performance data</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-secondary text-secondary font-semibold py-3 px-8 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
              Schedule Demo
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
} 