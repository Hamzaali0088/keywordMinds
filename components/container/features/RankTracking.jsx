import React from 'react'
import Container from '../../common/Container'

export default function RankTracking() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full">
              Rank Tracking
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Global & Local Tracking
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Track keywords across desktop and mobile devices with city and ZIP-specific targeting. 
              Get precise rankings for any location worldwide with our advanced geolocation technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-black to-secondary p-6 rounded-xl shadow-lg border border-purple-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Mobile & Desktop</h3>
                </div>
                <p className="text-purple-100">Track rankings across all devices and screen sizes</p>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/50 p-6 rounded-xl shadow-lg border border-gray-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">City & ZIP Targeting</h3>
                </div>
                <p className="text-gray-300">Precise location-based ranking insights</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Try Rank Tracking
              </button>
              <button className="border-2 border-red-300 hover:border-red-400 text-red-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                View Demo
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Global Rankings</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* World Map Mockup */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  {/* Location Pins */}
                  <div className="absolute top-8 left-12 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-16 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 left-20 w-3 h-3 bg-gray-600 rounded-full animate-pulse"></div>
                </div>

                {/* Ranking Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">#3</div>
                    <div className="text-sm text-gray-600">Global</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">#1</div>
                    <div className="text-sm text-gray-600">Local</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">#5</div>
                    <div className="text-sm text-gray-600">Mobile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 