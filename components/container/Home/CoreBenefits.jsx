import React from 'react'
import Container from '../../common/Container'

export default function CoreBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Accurate Rank Tracking",
      description: "Get precise keyword rankings with 3rd party verification down to city and ZIP code level. Trust data that's verified and unbiased.",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-Time Updates",
      description: "Refresh your rankings daily with on-demand updates. Stay ahead with the latest data and never miss important changes.",
      color: "green"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "White-Label Reporting",
      description: "Create professional, branded reports for your clients. Save time with automated dashboards and scheduled email reports.",
      color: "purple"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Local SEO Insights",
      description: "Track keywords for any device in any ZIP code worldwide. Get location-specific insights that drive local business growth.",
      color: "red"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-500',
        text: 'text-green-600',
        border: 'border-green-200'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200'
      },
      red: {
        bg: 'bg-red-50',
        icon: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-200'
      }
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to track keywords and win rankings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed for SEO agencies, in-house teams, and enterprise solutions. 
            Get the insights you need to dominate search results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color)
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border-2 ${colors.border} ${colors.bg} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold ${colors.text} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg transform hover:scale-105">
              Start Free Trial
            </button>
            <span className="text-gray-500">or</span>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-gray-50">
              Book Demo
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">No credit card required • 14-day free trial</p>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
} 