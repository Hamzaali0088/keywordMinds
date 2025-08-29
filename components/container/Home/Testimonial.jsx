import React, { useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      quote: "With Keyword.com, I just open a tag, dump in my keywords, and it's done. It's so much faster and more nimble than any other tool.",
      name: "Steve Toth",
      company: "SEO Notebook",
      role: "SEO Director",
      image: "/images/testimonials/steve-toth.jpg",
      rating: 5,
      highlight: "Faster & More Nimble"
    },
    {
      quote: "After using Keyword.com, we saw a big revenue jump over 12 months. We went in terms of SEO revenue from $1 million to $3 million.",
      name: "Mark McDowell",
      company: "Primal Digital Agency",
      role: "Founder & CEO",
      image: "/images/testimonials/mark-mcdowell.jpg",
      rating: 5,
      highlight: "3x Revenue Growth"
    },
    {
      quote: "Accurate tracking, custom reporting, great customer support. What else do you need?! Love the platform, and am now using it daily.",
      name: "David Rymarz",
      company: "Studio 21",
      role: "Digital Marketing Manager",
      image: "/images/testimonials/david-rymarz.jpg",
      rating: 5,
      highlight: "Accurate & Reliable"
    },
    {
      quote: "The keyword tracking accuracy is incredible. We've tried other tools but nothing compares to the precision and reliability of Keyword.com.",
      name: "Sarah Johnson",
      company: "Digital Growth Partners",
      role: "SEO Strategist",
      image: "/images/testimonials/sarah-johnson.jpg",
      rating: 5,
      highlight: "Incredible Accuracy"
    },
    {
      quote: "Our SEO team's productivity increased by 40% since switching to Keyword.com. The dashboard is intuitive and the API integration is seamless.",
      name: "Michael Chen",
      company: "TechSEO Solutions",
      role: "Technical SEO Lead",
      image: "/images/testimonials/michael-chen.jpg",
      rating: 5,
      highlight: "40% Productivity Boost"
    },
    {
      quote: "The share of voice tracking feature has been a game-changer for our enterprise clients. It gives us insights no other tool provides.",
      name: "Emily Rodriguez",
      company: "Enterprise SEO Corp",
      role: "Enterprise SEO Manager",
      image: "/images/testimonials/emily-rodriguez.jpg",
      rating: 5,
      highlight: "Game-Changing Insights"
    }
  ]

  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile on component mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardsToShow = isMobile ? 1 : 3
  const maxSlide = testimonials.length - cardsToShow

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide))
  }

  const getVisibleTestimonials = () => {
    return testimonials.slice(currentSlide, currentSlide + cardsToShow)
  }

  return (
    <FullContainer className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center px-3 md:px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-xs md:text-sm font-medium text-primary mb-4 md:mb-6">
            <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Customer Success Stories
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 px-2">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Trusted by top SEOs
            </span>
            <br />
            <span className="text-text-primary">
              fighting to rank #1
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
            Keyword.com is ideal for{' '}
            <span className="text-primary font-semibold">SEO Agencies</span>,{' '}
            <span className="text-primary font-semibold">in-house SEO teams</span> and{' '}
            <span className="text-primary font-semibold">enterprise solutions</span>.
            Our customers love our{' '}
            <span className="text-primary font-semibold">rank tracker dashboards</span>,{' '}
            <span className="text-primary font-semibold">keyword API</span> and{' '}
            <span className="text-primary font-semibold">share of voice tracking</span>.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95 hover:border-primary'
              }`}
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out ${currentSlide === maxSlide ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95 hover:border-primary'
              }`}
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className={`grid gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 px-4 sm:px-8 md:px-16 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={currentSlide + index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 h-full flex flex-col transition-all duration-500 ease-in-out hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100 hover:border-primary/20"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Highlight Badge */}
                <div className="absolute -top-2 md:-top-3 left-4 md:left-6 bg-gradient-to-r from-primary to-secondary text-white px-2 md:px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {testimonial.highlight}
                </div>

                {/* Quote Icon */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-primary/20">
                  <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-1 mb-6 md:mb-8">
                  <p className="text-text-primary text-sm md:text-base lg:text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-secondary rounded-full mr-3 md:mr-4 flex-shrink-0 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm md:text-base lg:text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-text-primary text-sm md:text-base lg:text-lg truncate">{testimonial.name}</h4>
                    <p className="text-primary font-medium text-xs md:text-sm truncate">{testimonial.role}</p>
                    <p className="text-text-secondary text-xs md:text-sm truncate">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 md:space-x-3 px-4">
            {Array.from({ length: testimonials.length }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ease-in-out ${index >= currentSlide && index < currentSlide + cardsToShow
                    ? 'bg-gradient-to-r from-primary to-secondary scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-primary/50 hover:scale-110'
                  }`}
              />
            ))}
          </div>
        </div>

      </Container>
      hi
      <Container className="relative z-10">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl md:rounded-2xl p-6 md:p-8 border border-primary/20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            Ready to join thousands of successful SEO professionals?
          </h3>
          <p className="text-text-secondary text-base md:text-lg mb-6">
            Start your free trial today and see why top agencies choose Keyword.com
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-secondary text-secondary hover:text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-secondary hover:to-primary transform hover:scale-105">
              View All Reviews
            </button>
          </div>
        </div>
      </Container>

      </FullContainer>
    )
  }
  
  <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>