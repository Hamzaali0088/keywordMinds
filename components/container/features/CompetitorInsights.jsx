import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function CompetitorInsights() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-background-light to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Competitor Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Beat Your Competition
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Compare your rankings with competitors over time. Identify opportunities and track competitive movements in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Competitor Cards */}
          <div className="bg-gradient-to-br from-white via-background-light to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-text-secondary/20 hover:border-primary/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">#2</div>
                <div className="text-sm text-text-secondary">Your Position</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Your Brand</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Previous</span>
                <span className="font-semibold text-text-primary">#4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Change</span>
                <span className="text-primary font-bold flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +2
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-background-light to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-text-secondary/20 hover:border-primary/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-text-secondary to-text-primary rounded-xl flex items-center justify-center shadow-md">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">#1</div>
                <div className="text-sm text-text-secondary">Competitor A</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Competitor A</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Previous</span>
                <span className="font-semibold text-text-primary">#1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Change</span>
                <span className="text-text-secondary font-bold">0</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-background-light to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-text-secondary/20 hover:border-primary/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-md">
                <TrendingDown className="w-7 h-7 text-white" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">#5</div>
                <div className="text-sm text-text-secondary">Competitor B</div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Competitor B</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Previous</span>
                <span className="font-semibold text-text-primary">#3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Change</span>
                <span className="text-secondary font-bold flex items-center">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  -2
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Chart */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-text-secondary/20">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Ranking Comparison Over Time</h3>
          
          <div className="space-y-6">
            {/* Chart Bars */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-text-secondary">Your Brand</div>
                <div className="flex-1 bg-text-secondary/20 rounded-full h-4">
                  <div className="bg-primary h-4 rounded-full" style={{width: '80%'}}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-primary">#2</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-text-secondary">Competitor A</div>
                <div className="flex-1 bg-text-secondary/20 rounded-full h-4">
                  <div className="bg-secondary h-4 rounded-full" style={{width: '95%'}}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-secondary">#1</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-text-secondary">Competitor B</div>
                <div className="flex-1 bg-text-secondary/20 rounded-full h-4">
                  <div className="bg-text-secondary h-4 rounded-full" style={{width: '50%'}}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold text-text-secondary">#5</div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 pt-8 border-t border-text-secondary/20">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Recent Changes</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-text-secondary">Your brand moved from #4 to #2 (+2 positions)</span>
                  <span className="text-xs text-text-secondary/60">2 days ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-text-secondary">Competitor B dropped from #3 to #5 (-2 positions)</span>
                  <span className="text-xs text-text-secondary/60">1 week ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-text-secondary rounded-full"></div>
                  <span className="text-sm text-text-secondary">Competitor A maintained #1 position</span>
                  <span className="text-xs text-text-secondary/60">2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Analyze Competitors
            </button>
            <button className="border-2 border-secondary text-secondary font-semibold py-3 px-8 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
              View Full Report
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 