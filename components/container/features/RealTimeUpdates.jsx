import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { Clock, RefreshCw, Bell } from 'lucide-react'

export default function RealTimeUpdates() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-background-light to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Real-Time Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Live Data, Instant Insights
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get fresh data with hourly updates or refresh rankings on-demand. Never miss important changes in your search performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Live Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-text-secondary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text-primary">Live Dashboard</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-primary font-semibold">Live</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Update Status */}
              <div className="bg-gradient-to-r from-background-light to-gray-100 p-6 rounded-xl border border-text-secondary/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-text-primary">Last Update</h4>
                  <span className="text-sm text-primary font-bold">2 minutes ago</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="w-full bg-text-secondary/20 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm text-text-secondary">85% Complete</span>
                </div>
              </div>

              {/* Real-time Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-text-secondary">Keywords Tracked</div>
                </div>
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">23</div>
                  <div className="text-sm text-text-secondary">Changes Today</div>
                </div>
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-text-secondary">4.2s</div>
                  <div className="text-sm text-text-secondary">Avg Response</div>
                </div>
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-text-secondary">Uptime</div>
                </div>
              </div>

              {/* Recent Changes */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-text-primary">Recent Changes</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="text-sm text-text-primary">"SEO tools" moved from #5 to #3</span>
                    <span className="text-xs text-primary font-bold">+2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-light rounded-lg">
                    <span className="text-sm text-text-primary">"Keyword tracker" dropped from #2 to #4</span>
                    <span className="text-xs text-text-secondary font-bold">-2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm text-text-primary">"Rank monitoring" new at #8</span>
                    <span className="text-xs text-secondary font-bold">New</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Update Controls */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-text-primary">Update Options</h3>
              
              {/* Hourly Updates */}
              <div className="bg-background-light p-6 rounded-xl shadow-lg border border-text-secondary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary">Hourly Updates</h4>
                    <p className="text-text-secondary">Automatic refresh every hour</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Next update in: 23:45</span>
                  <div className="w-16 h-8 bg-text-secondary/20 rounded-full relative">
                    <div className="w-6 h-6 bg-text-secondary rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* On-Demand Refresh */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">On-Demand Refresh</h4>
                    <p className="text-white/80">Instant updates when you need them</p>
                  </div>
                </div>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 border border-white/30">
                  Refresh Now
                </button>
              </div>

              {/* Notifications */}
              <div className="bg-background-light p-6 rounded-xl shadow-lg border border-text-secondary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                    <Bell className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-primary">Smart Notifications</h4>
                    <p className="text-text-secondary">Get alerted for important changes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Email Alerts</span>
                    <div className="w-12 h-6 bg-text-secondary/20 rounded-full relative">
                      <div className="w-4 h-4 bg-text-secondary rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Push Notifications</span>
                    <div className="w-12 h-6 bg-text-secondary/20 rounded-full relative">
                      <div className="w-4 h-4 bg-text-secondary rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Slack Integration</span>
                    <div className="w-12 h-6 bg-text-secondary/20 rounded-full relative">
                      <div className="w-4 h-4 bg-text-secondary rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
                View API Docs
              </button>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 