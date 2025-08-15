import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { BarChart3, Search, Code, Users } from 'lucide-react'

export default function Integrations() {
  return (
    <FullContainer className="py-20 bg-gradient-to-br from-background-light to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Seamless Integrations
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Connect with your existing tools including Google Analytics, Search Console, Looker Studio, and access our comprehensive API.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Integration Platform */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-text-primary">Connect Everything</h3>
            
            <div className="space-y-6">
              {/* Google Analytics */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">Google Analytics</h4>
                    <p className="text-white/80">Connect your GA4 data for comprehensive insights</p>
                  </div>
                  <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* Search Console */}
              <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-xl shadow-lg border border-secondary/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Search className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">Search Console</h4>
                    <p className="text-white/80">Import GSC data for enhanced reporting</p>
                  </div>
                  <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* Looker Studio */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">Looker Studio</h4>
                    <p className="text-white/80">Create custom dashboards with our data</p>
                  </div>
                  <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>

              {/* API Access */}
              <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-xl shadow-lg border border-secondary/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Code className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">Full API Access</h4>
                    <p className="text-white/80">RESTful API with comprehensive endpoints</p>
                  </div>
                  <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Connect Account
              </button>
              <button className="border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
                View API Docs
              </button>
            </div>
          </div>

          {/* API Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-text-secondary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text-primary">API Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="w-3 h-3 bg-text-secondary rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* API Status */}
              <div className="bg-gradient-to-r from-background-light to-text-secondary/20 p-6 rounded-xl border border-text-secondary/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-text-primary">API Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-primary font-semibold">Operational</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-text-secondary">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">45ms</div>
                    <div className="text-sm text-text-secondary">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-secondary">1.2M</div>
                    <div className="text-sm text-text-secondary">Requests/Day</div>
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-text-primary p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">API Example</h4>
                  <button className="text-secondary text-sm hover:text-primary">Copy</button>
                </div>
                <pre className="text-sm text-white/80 overflow-x-auto">
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
              <div className="bg-background-light p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Response</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-text-primary">Position</span>
                    <span className="text-sm font-bold text-primary">#3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-text-primary">Previous Position</span>
                    <span className="text-sm font-bold text-text-secondary">#5</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-text-primary">Change</span>
                    <span className="text-sm font-bold text-secondary">+2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-text-secondary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">GA</span>
              </div>
              <h4 className="font-semibold text-text-primary">Google Analytics</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-text-secondary/20">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-xl">GSC</span>
              </div>
              <h4 className="font-semibold text-text-primary">Search Console</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-text-secondary/20">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">LS</span>
              </div>
              <h4 className="font-semibold text-text-primary">Looker Studio</h4>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-text-secondary/20">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary font-bold text-xl">API</span>
              </div>
              <h4 className="font-semibold text-text-primary">REST API</h4>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 