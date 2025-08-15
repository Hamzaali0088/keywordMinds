import React from 'react'
import Container from '../../common/Container'

export default function TeamCollaboration() {
  return (
    <section className="py-20 bg-gradient-to-br from-background-light to-gray-100">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Team Collaboration
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Unlimited Users & Roles
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Collaborate effectively with unlimited team members and customizable user roles. Manage access and permissions seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Team Management */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-text-primary">Team Management</h3>
            
            <div className="space-y-6">
              {/* User Roles */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Custom User Roles</h4>
                    <p className="text-white/80">Define permissions and access levels</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-sm font-semibold text-text-primary">Admin</div>
                    <div className="text-xs text-text-secondary">Full access</div>
                  </div>
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    <div className="text-sm font-semibold text-text-primary">Manager</div>
                    <div className="text-xs text-text-secondary">Team management</div>
                  </div>
                  <div className="p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="text-sm font-semibold text-text-primary">Analyst</div>
                    <div className="text-xs text-text-secondary">Data access</div>
                  </div>
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    <div className="text-sm font-semibold text-text-primary">Viewer</div>
                    <div className="text-xs text-text-secondary">Read-only</div>
                  </div>
                </div>
              </div>

              {/* Team Activity */}
              <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-xl shadow-lg border border-secondary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Activity Tracking</h4>
                    <p className="text-white/80">Monitor team performance and actions</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">S</div>
                      <span className="text-sm text-text-secondary">Sarah updated rankings</span>
                    </div>
                    <span className="text-xs text-text-secondary">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                      <span className="text-sm text-text-secondary">Mike created report</span>
                    </div>
                    <span className="text-xs text-text-secondary">15 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">J</div>
                      <span className="text-sm text-text-secondary">John added keywords</span>
                    </div>
                    <span className="text-xs text-text-secondary">1 hour ago</span>
                  </div>
                </div>
              </div>

              {/* Collaboration Tools */}
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl shadow-lg border border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Team Communication</h4>
                    <p className="text-white/80">Built-in messaging and notifications</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Slack Integration</span>
                    <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Email Notifications</span>
                    <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Team Chat</span>
                    <div className="w-12 h-6 bg-white bg-opacity-20 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Invite Team Members
              </button>
              <button className="border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
                Manage Roles
              </button>
            </div>
          </div>

          {/* Team Dashboard */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-text-secondary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text-primary">Team Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <div className="w-3 h-3 bg-text-secondary rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Team Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-xl border border-primary/20 text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-text-secondary">Team Members</div>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 p-4 rounded-xl border border-secondary/20 text-center">
                  <div className="text-2xl font-bold text-secondary">4</div>
                  <div className="text-sm text-text-secondary">Active Roles</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-4 rounded-xl border border-primary/20 text-center">
                  <div className="text-2xl font-bold text-primary">247</div>
                  <div className="text-sm text-text-secondary">Keywords Tracked</div>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 p-4 rounded-xl border border-secondary/20 text-center">
                  <div className="text-2xl font-bold text-secondary">89%</div>
                  <div className="text-sm text-text-secondary">Team Activity</div>
                </div>
              </div>

              {/* Team Members */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">Active Team Members</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background-light rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">S</div>
                      <div>
                        <div className="font-semibold text-text-primary">Sarah Johnson</div>
                        <div className="text-sm text-text-secondary">Admin • Online</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-light rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">M</div>
                      <div>
                        <div className="font-semibold text-text-primary">Mike Chen</div>
                        <div className="text-sm text-text-secondary">Manager • Online</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-light rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">J</div>
                      <div>
                        <div className="font-semibold text-text-primary">John Smith</div>
                        <div className="text-sm text-text-secondary">Analyst • Away</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-background-light p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-text-primary mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">New team member invited</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-text-secondary">Role permissions updated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">Team report generated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Unlimited Users</h4>
            <p className="text-sm text-text-secondary">Add as many team members as needed</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Role-Based Access</h4>
            <p className="text-sm text-text-secondary">Customize permissions per user</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Activity Tracking</h4>
            <p className="text-sm text-text-secondary">Monitor team performance</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Team Communication</h4>
            <p className="text-sm text-text-secondary">Built-in messaging system</p>
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