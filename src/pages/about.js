import React from 'react'
import Navbar from '../../components/common/Navbar'
import Container from '../../components/common/Container'
import FullContainer from '../../components/common/FullContainer'
import Footer from '../../components/common/Footer'
import { Users, Target, Shield, Heart, Award, Globe, Clock, TrendingUp } from 'lucide-react'

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/st-images/team/sarah.jpg",
      bio: "Former Google SEO specialist with 15+ years in search marketing. Built KeywordMinds to solve the transparency problem in rank tracking."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "/st-images/team/michael.jpg",
      bio: "Ex-Google engineer with deep expertise in search algorithms. Leads our technical innovation and AI integration efforts."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "/st-images/team/emily.jpg",
      bio: "Product leader with 10+ years building SaaS tools. Focuses on creating intuitive experiences that agencies love."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "/st-images/team/david.jpg",
      bio: "Scales our infrastructure to handle millions of keyword checks daily. Ensures 99.9% uptime for our customers."
    }
  ]

  const timeline = [
    {
      year: "2011",
      title: "The Beginning",
      description: "Founded with a simple mission: make rank tracking transparent and reliable for SEO agencies.",
      icon: Target
    },
    {
      year: "2013",
      title: "First 100 Customers",
      description: "Reached our first milestone with 100 agencies trusting us with their keyword tracking needs.",
      icon: Users
    },
    {
      year: "2016",
      title: "API Launch",
      description: "Launched our powerful API, enabling agencies to integrate rank tracking into their workflows.",
      icon: Globe
    },
    {
      year: "2019",
      title: "AI Integration",
      description: "Began tracking AI search results from ChatGPT, Gemini, and other AI platforms.",
      icon: TrendingUp
    },
    {
      year: "2022",
      title: "Enterprise Launch",
      description: "Expanded to serve enterprise clients with unlimited tracking and advanced features.",
      icon: Award
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Now serving 10,000+ agencies worldwide with offices in 3 countries.",
      icon: Globe
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in complete transparency. Every ranking change, every data point, every algorithm update - we show you exactly what's happening.",
      color: "blue"
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Our 3rd party verification ensures you get the most accurate rank tracking data available. No guesswork, just reliable insights.",
      color: "green"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping agencies grow their clients' rankings and their own businesses.",
      color: "red"
    },
    {
      icon: Clock,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of search engine changes and provide cutting-edge tools for modern SEO.",
      color: "purple"
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
      red: {
        bg: 'bg-red-50',
        icon: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-200'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200'
      }
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <FullContainer className="bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="pt-20 md:pt-32 pb-16 text-center">
            <div className="inline-block bg-red-200 text-red-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              About KeywordMinds
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We built KeywordMinds to make rank tracking transparent and reliable
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Since 2011, we've been helping SEO agencies track keywords with unprecedented accuracy. 
              Our mission is simple: give you the data you need to win rankings and grow your business.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Mission Statement */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every SEO agency deserves access to accurate, reliable rank tracking data. 
                Too many tools provide inconsistent results, leaving agencies guessing about their performance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                That's why we built KeywordMinds with 3rd party verification, real-time updates, and 
                transparent reporting. We're not just another rank tracker - we're your partner in SEO success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Start Free Trial
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-gray-50">
                  Book Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-4">10,000+</div>
                <div className="text-xl mb-2">Agencies Trust Us</div>
                <div className="text-red-100">With their keyword tracking needs</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-500 p-6 rounded-xl text-white">
                <div className="text-2xl font-bold mb-2">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Team Section */}
      <FullContainer className="bg-gray-50 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind KeywordMinds who are dedicated to making your SEO campaigns successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Timeline Section */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to serving thousands of agencies worldwide.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex-col lg:gap-8 gap-4`}
                    style={{
                      animation: 'fadeInUp 0.6s ease-out',
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                    
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                      <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-center lg:justify-start mb-4">
                          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-red-600">{item.year}</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Values Section */}
      <FullContainer className="bg-gray-50 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const colors = getColorClasses(value.color)
              const IconComponent = value.icon
              
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
                  <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.text} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </FullContainer>

      {/* CTA Section */}
      <FullContainer className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your SEO?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of agencies who trust KeywordMinds for accurate, reliable rank tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-gray-100 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-white hover:text-red-600 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">No credit card required • 14-day free trial</p>
          </div>
        </Container>
      </FullContainer>

      <Footer />

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
    </>
  )
}
