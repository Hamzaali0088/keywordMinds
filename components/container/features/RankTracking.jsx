import React from 'react'
import Container from '../../common/Container'

export default function RankTracking() {
  return (
    <section className="py-20 bg-gradient-to-br from-background-light to-gray-100">
      <Container className="space-y-10">
        <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full">
          Rank Tracking
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          {/* Content */}
          <div className="flex flex-col justify-between gap-5">

            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Global & Local Tracking
            </h2>

            <p className="text-xl text-text-secondary leading-relaxed">
              Track keywords across desktop and mobile devices with city and ZIP-specific targeting.
              Get precise rankings for any location worldwide with our advanced geolocation technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-xl border-0 h-full flex flex-col relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="flex items-start space-x-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Mobile & Desktop</h3>
                    <p className="text-white/90 text-sm leading-relaxed">Track rankings across all devices and screen sizes with precision</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                  <span className="text-white/80 text-sm">Device Coverage</span>
                  <span className="text-white font-bold text-lg">100%</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary to-primary p-6 rounded-2xl shadow-xl border-0 h-full flex flex-col relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="flex items-start space-x-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">City & ZIP Targeting</h3>
                    <p className="text-white/90 text-sm leading-relaxed">Precise location-based ranking insights for local SEO</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/20">
                  <span className="text-white/80 text-sm">Locations Available</span>
                  <span className="text-white font-bold text-lg">50K+</span>
                </div>
              </div>
            </div>


          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-0 w-full max-w-md backdrop-blur-sm ">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-text-primary">Global Rankings</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-3 h-3 bg-text-secondary rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6">
                {/* World Map with Unsplash Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden border border-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="World Map for Global Rank Tracking"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  {/* Location Pins */}
                  <div className="absolute top-8 left-12 w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg border-2 border-white"></div>
                  <div className="absolute top-16 right-16 w-4 h-4 bg-secondary rounded-full animate-pulse shadow-lg border-2 border-white"></div>
                  <div className="absolute bottom-12 left-20 w-4 h-4 bg-text-secondary rounded-full animate-pulse shadow-lg border-2 border-white"></div>
                  {/* Overlay for better pin visibility */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Ranking Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl border border-primary/20">
                    <div className="text-3xl font-bold text-primary">#3</div>
                    <div className="text-sm text-text-secondary font-medium">Global</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl border border-secondary/20">
                    <div className="text-3xl font-bold text-secondary">#1</div>
                    <div className="text-sm text-text-secondary font-medium">Local</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-text-secondary/10 to-text-secondary/20 rounded-xl border border-text-secondary/20">
                    <div className="text-3xl font-bold text-text-secondary">#5</div>
                    <div className="text-sm text-text-secondary font-medium">Mobile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Try Rank Tracking
          </button>
          <button className="border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
            View Demo
          </button>
        </div>
      </Container>
    </section>
  )
} 