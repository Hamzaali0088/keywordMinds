import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function CompetitorInsights() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Competitor Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beat Your Competition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare your rankings with competitors over time. Identify opportunities and track competitive movements in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Competitor Cards */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">#2</div>
                <div className="text-sm text-gray-600">Your Position</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Brand</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Previous</span>
                <span className="font-semibold text-gray-900">#4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Change</span>
                <span className="text-green-600 font-bold flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +2
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shadow-md">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">#1</div>
                <div className="text-sm text-gray-600">Competitor A</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor A</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Previous</span>
                <span className="font-semibold text-gray-900">#1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Change</span>
                <span className="text-gray-600 font-bold">0</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-md">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">#5</div>
                <div className="text-sm text-gray-600">Competitor B</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor B</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Previous</span>
                <span className="font-semibold text-gray-900">#3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Change</span>
                <span className="text-red-600 font-bold flex items-center">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  -2
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ranking Comparison Over Time</h3>
          
          <div className="space-y-6">
            {/* Chart Bars */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-gray-600">Your Brand</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div className="bg-purple-600 h-4 rounded-full" style={{width: '80%'}}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-purple-600">#2</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-gray-600">Competitor A</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div className="bg-red-600 h-4 rounded-full" style={{width: '95%'}}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-red-600">#1</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-gray-600">Competitor B</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div className="bg-gray-600 h-4 rounded-full" style={{width: '50%'}}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-gray-600">#5</div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Changes</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Your brand moved from #4 to #2 (+2 positions)</span>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Competitor B dropped from #3 to #5 (-2 positions)</span>
                  <span className="text-xs text-gray-400">1 week ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Competitor A maintained #1 position</span>
                  <span className="text-xs text-gray-400">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Analyze Competitors
            </button>
            <button className="border-2 border-red-300 hover:border-red-400 text-red-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Full Report
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 