import React from 'react'
import Container from '../../common/Container'

export default function TeamCollaboration() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Team Collaboration
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unlimited Users & Roles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborate effectively with unlimited team members and customizable user roles. Manage access and permissions seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Team Management */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Team Management</h3>
            
            <div className="space-y-6">
              {/* User Roles */}
              <div className="bg-gradient-to-br from-black to-primary p-6 rounded-xl shadow-lg ">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Custom User Roles</h4>
                    <p className="text-purple-100">Define permissions and access levels</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-sm font-semibold ">Admin</div>
                    <div className="text-xs text-gray-800">Full access</div>
                  </div>
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    <div className="text-sm font-semibold ">Manager</div>
                    <div className="text-xs text-gray-800">Team management</div>
                  </div>
                  <div className="p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-sm font-semibold ">Analyst</div>
                    <div className="text-xs text-gray-800">Data access</div>
                  </div>
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    <div className="text-sm font-semibold ">Viewer</div>
                    <div className="text-xs text-gray-800">Read-only</div>
                  </div>
                </div>
              </div>

              {/* Team Activity */}
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Activity Tracking</h4>
                    <p className="text-gray-300">Monitor team performance and actions</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">S</div>
                      <span className="text-sm text-gray-300">Sarah updated rankings</span>
                    </div>
                    <span className="text-xs text-gray-400">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                      <span className="text-sm text-gray-300">Mike created report</span>
                    </div>
                    <span className="text-xs text-gray-400">15 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">J</div>
                      <span className="text-sm text-gray-300">John added keywords</span>
                    </div>
                    <span className="text-xs text-gray-400">1 hour ago</span>
                  </div>
                </div>
              </div>

              {/* Collaboration Tools */}
              <div className="bg-gradient-to-br from-black to-primary p-6 rounded-xl shadow-lg ">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Team Communication</h4>
                    <p className="text-purple-100">Built-in messaging and notifications</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-100">Slack Integration</span>
                    <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-100">Email Notifications</span>
                    <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-100">Team Chat</span>
                    <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Invite Team Members
              </button>
              <button className="border-2 border-red-300 hover:border-red-400 text-red-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Manage Roles
              </button>
            </div>
          </div>

          {/* Team Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Team Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 text-center">
                  <div className="text-2xl font-bold text-red-600">4</div>
                  <div className="text-sm text-gray-600">Active Roles</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
                  <div className="text-2xl font-bold text-purple-600">247</div>
                  <div className="text-sm text-gray-600">Keywords Tracked</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200 text-center">
                  <div className="text-2xl font-bold text-red-600">89%</div>
                  <div className="text-sm text-gray-600">Team Activity</div>
                </div>
              </div>

              {/* Team Members */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Active Team Members</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
                      <div>
                        <div className="font-semibold text-gray-900">Sarah Johnson</div>
                        <div className="text-sm text-gray-600">Admin • Online</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
                      <div>
                        <div className="font-semibold text-gray-900">Mike Chen</div>
                        <div className="text-sm text-gray-600">Manager • Online</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">J</div>
                      <div>
                        <div className="font-semibold text-gray-900">John Smith</div>
                        <div className="text-sm text-gray-600">Analyst • Away</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">New team member invited</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Role permissions updated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Team report generated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Unlimited Users</h4>
            <p className="text-sm text-gray-600">Add as many team members as needed</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Role-Based Access</h4>
            <p className="text-sm text-gray-600">Customize permissions per user</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Activity Tracking</h4>
            <p className="text-sm text-gray-600">Monitor team performance</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Team Communication</h4>
            <p className="text-sm text-gray-600">Built-in messaging system</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-red-300 hover:border-red-400 text-red-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
} 