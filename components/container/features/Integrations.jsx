import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { BarChart3, Search, Code, Users } from 'lucide-react'

export default function Integrations() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your existing tools including Google Analytics, Search Console, Looker Studio, and access our comprehensive API.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Integration Platform */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Connect Everything</h3>
            
            <div className="space-y-6">
              {/* Google Analytics */}
              <div className="bg-gradient-to-br from-black to-secondary p-6 rounded-xl shadow-lg border border-purple-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">Google Analytics</h4>
                    <p className="text-purple-100">Connect your GA4 data for comprehensive insights</p>
                  </div>
                  <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* Search Console */}
              <div className=" p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <Search className="w-7 h-7 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black">Search Console</h4>
                    <p className="text-gray-800">Import GSC data for enhanced reporting</p>
                  </div>
                  <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* Looker Studio */}
              <div className="bg-gradient-to-br from-black to-purple-700 p-6 rounded-xl shadow-lg border border-purple-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">Looker Studio</h4>
                    <p className="text-purple-100">Create custom dashboards with our data</p>
                  </div>
                  <div className="w-12 h-6 bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4  rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* API Access */}
              <div className=" p-6 rounded-xl shadow-lg ">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                    <Code className="w-7 h-7 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black">Full API Access</h4>
                    <p className="text-gray-800">RESTful API with comprehensive endpoints</p>
                  </div>
                  <div className="w-12 h-6 bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4  rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary hover:bg-secondary/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Connect Account
              </button>
              <button className="border-2 border-secondary hover:border-secondary/80 text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                View API Docs
              </button>
            </div>
          </div>

          {/* API Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">API Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* API Status */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">API Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-600 font-semibold">Operational</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">45ms</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-600">1.2M</div>
                    <div className="text-sm text-gray-600">Requests/Day</div>
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-gray-900 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">API Example</h4>
                  <button className="text-red-400 text-sm hover:text-red-300">Copy</button>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`curl -X GET "https://api.keywordminds.com/v1/rankings" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "keyword": "SEO tools",
    "domain": "example.com",
    "location": "US"
  }'`}</code>
                </pre>
              </div>

              {/* Response Preview */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Response</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-700">Position</span>
                    <span className="text-sm font-bold text-red-600">#3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-700">Previous Position</span>
                    <span className="text-sm font-bold text-gray-600">#5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-gray-700">Change</span>
                    <span className="text-sm font-bold text-purple-600">+2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">GA</span>
              </div>
              <h4 className="font-semibold text-gray-900">Google Analytics</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">GSC</span>
              </div>
              <h4 className="font-semibold text-gray-900">Search Console</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">LS</span>
              </div>
              <h4 className="font-semibold text-gray-900">Looker Studio</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">API</span>
              </div>
              <h4 className="font-semibold text-gray-900">REST API</h4>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 