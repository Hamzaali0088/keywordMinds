import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { Clock, RefreshCw, Bell } from 'lucide-react'

export default function RealTimeUpdates() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Real-Time Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Live Data, Instant Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get fresh data with hourly updates or refresh rankings on-demand. Never miss important changes in your search performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Live Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Live Dashboard</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-sm text-red-600 font-semibold">Live</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Update Status */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">Last Update</h4>
                  <span className="text-sm text-red-600 font-bold">2 minutes ago</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">85% Complete</span>
                </div>
              </div>

              {/* Real-time Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">1,247</div>
                  <div className="text-sm text-gray-600">Keywords Tracked</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">23</div>
                  <div className="text-sm text-gray-600">Changes Today</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gray-600">4.2s</div>
                  <div className="text-sm text-gray-600">Avg Response</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>

              {/* Recent Changes */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900">Recent Changes</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">"SEO tools" moved from #5 to #3</span>
                    <span className="text-xs text-purple-600 font-bold">+2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">"Keyword tracker" dropped from #2 to #4</span>
                    <span className="text-xs text-gray-600 font-bold">-2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-700">"Rank monitoring" new at #8</span>
                    <span className="text-xs text-red-600 font-bold">New</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Update Controls */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Update Options</h3>
              
              {/* Hourly Updates */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-lg ">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 " />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold ">Hourly Updates</h4>
                    <p className="text-gray-600">Automatic refresh every hour</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Next update in: 23:45</span>
                  <div className="w-16 h-8 bg-gray-200 bg-opacity-20 rounded-full relative">
                    <div className="w-6 h-6 bg-gray-200 rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* On-Demand Refresh */}
              <div className="bg-gradient-to-br from-black to-secondary p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <RefreshCw className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">On-Demand Refresh</h4>
                    <p className="text-gray-300">Instant updates when you need them</p>
                  </div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Refresh Now
                </button>
              </div>

              {/* Notifications */}
              <div className="bg-gray-100 text-black p-6 rounded-xl shadow-lg ">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Bell className="w-7 h-7 " />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold e">Smart Notifications</h4>
                    <p className="text-purple-100">Get alerted for important changes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Email Alerts</span>
                    <div className="w-12 h-6 bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4  rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Push Notifications</span>
                    <div className="w-12 h-6  bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4  rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Slack Integration</span>
                    <div className="w-12 h-6 bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4  rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border-2 border-red-300 hover:border-red-400 text-red-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                View API Docs
              </button>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 