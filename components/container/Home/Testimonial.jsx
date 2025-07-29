import React, { useState } from 'react'

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      quote: "With Keyword.com, I just open a tag, dump in my keywords, and it's done. It's so much faster and more nimble than any other tool.",
      name: "Steve Toth",
      company: "SEO Notebook",
      image: "/images/testimonials/steve-toth.jpg"
    },
    {
      quote: "After using Keyword.com, we saw a big revenue jump over 12 months. We went in terms of SEO revenue from $1 million to $3 million.",
      name: "Mark McDowell",
      company: "Primal Digital Agency",
      image: "/images/testimonials/mark-mcdowell.jpg"
    },
    {
      quote: "Accurate tracking, custom reporting, great customer support. What else do you need?! Love the platform, and am now using it daily.",
      name: "David Rymarz",
      company: "Studio 21",
      image: "/images/testimonials/david-rymarz.jpg"
    },
    {
      quote: "The keyword tracking accuracy is incredible. We've tried other tools but nothing compares to the precision and reliability of Keyword.com.",
      name: "Sarah Johnson",
      company: "Digital Growth Partners",
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      quote: "Our SEO team's productivity increased by 40% since switching to Keyword.com. The dashboard is intuitive and the API integration is seamless.",
      name: "Michael Chen",
      company: "TechSEO Solutions",
      image: "/images/testimonials/michael-chen.jpg"
    },
    {
      quote: "The share of voice tracking feature has been a game-changer for our enterprise clients. It gives us insights no other tool provides.",
      name: "Emily Rodriguez",
      company: "Enterprise SEO Corp",
      image: "/images/testimonials/emily-rodriguez.jpg"
    },
    {
      quote: "Keyword.com's reporting capabilities are unmatched. We can create custom reports that our clients actually understand and value.",
      name: "Alex Thompson",
      company: "Agency Analytics Pro",
      image: "/images/testimonials/alex-thompson.jpg"
    },
    {
      quote: "The speed and accuracy of rank tracking is phenomenal. We track thousands of keywords and the data is always up-to-date.",
      name: "Lisa Wang",
      company: "Global SEO Agency",
      image: "/images/testimonials/lisa-wang.jpg"
    },
    {
      quote: "Customer support is exceptional. Any time we have questions, the team responds quickly with detailed, helpful solutions.",
      name: "James Wilson",
      company: "SEO Masters",
      image: "/images/testimonials/james-wilson.jpg"
    },
    {
      quote: "The keyword research tools are incredibly powerful. We've discovered opportunities that our competitors are missing.",
      name: "Rachel Green",
      company: "Content Strategy Plus",
      image: "/images/testimonials/rachel-green.jpg"
    },
    {
      quote: "Integration with our existing workflow was smooth. The API is well-documented and the team helped us set everything up perfectly.",
      name: "Daniel Kim",
      company: "Tech Marketing Hub",
      image: "/images/testimonials/daniel-kim.jpg"
    },
    {
      quote: "We've seen a 60% improvement in our clients' search rankings since implementing Keyword.com's insights into our strategy.",
      name: "Amanda Foster",
      company: "Search Success Agency",
      image: "/images/testimonials/amanda-foster.jpg"
    },
    {
      quote: "The competitive analysis features are brilliant. We can now track our competitors' keyword movements and adjust our strategy accordingly.",
      name: "Robert Martinez",
      company: "Competitive SEO",
      image: "/images/testimonials/robert-martinez.jpg"
    }
  ]

  const cardsToShow = 3
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our keyword tracker is trusted by top SEOs fighting to rank #1
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Keyword.com is ideal for{' '}
            <span className="text-blue-600 font-semibold">SEO Agencies</span>,{' '}
            <span className="text-blue-600 font-semibold">in-house SEO teams</span> and{' '}
            <span className="text-blue-600 font-semibold">enterprise solutions</span>. 
            Our customers love our{' '}
            <span className="text-blue-600 font-semibold">rank tracker dashboards</span>,{' '}
            <span className="text-blue-600 font-semibold">keyword API</span> and{' '}
            <span className="text-blue-600 font-semibold">share of voice tracking</span>.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out ${
              currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
            }`}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out ${
              currentSlide === maxSlide ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
            }`}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={currentSlide + index}
                className="bg-gray-50 rounded-lg p-6 h-full flex flex-col justify-between transition-all duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-1"
                style={{
                  animation: 'fadeInUp 0.5s ease-out'
                }}
              >
                <div className="flex-1">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex-shrink-0">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: maxSlide + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  index === currentSlide
                    ? 'bg-gray-800 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Custom CSS for smooth animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
