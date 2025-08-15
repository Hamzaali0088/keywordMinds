  import React from 'react'
  import Container from '../../common/Container'

  export default function FinalCTA() {
    return (
      <section className="py-20 bg-gradient-to-br from-background-light to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/20 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-secondary/20 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </div>

        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Main Content */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                Ready to dominate your search rankings?
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Join thousands of SEO professionals who trust Keyword.com to track their keywords, 
                analyze competitors, and deliver results that drive real business growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button className="group relative bg-primary hover:bg-secondary text-white font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl">
                <span className="relative z-10">Start Your Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative border-2 border-secondary text-secondary font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 hover:bg-primary hover:text-white transform hover:scale-105">
                <span className="relative z-10">Schedule a Demo</span>
                <div className="absolute inset-0 bg-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-text-primary mb-2">14-Day</div>
                <div className="text-text-secondary">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-primary mb-2">No Credit Card</div>
                <div className="text-text-secondary">Required</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-text-primary mb-2">24/7</div>
                <div className="text-text-secondary">Support</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-text-secondary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-text-secondary font-medium">4.7/5</span>
                  </div>
                  <p className="text-text-secondary text-sm">
                    "Keyword.com has transformed our SEO workflow. The accuracy and insights are unmatched."
                  </p>
                  <p className="text-text-primary font-semibold text-sm mt-2">- Sarah Johnson, Digital Growth Partners</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">10K+</div>
                    <div className="text-text-secondary text-sm">Active Users</div>
                  </div>
                  <div className="w-px h-12 bg-text-secondary/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">50M+</div>
                    <div className="text-text-secondary text-sm">Keywords Tracked</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Note */}
            <div className="mt-8">
              <p className="text-text-secondary text-sm">
                Trusted by leading SEO agencies and Fortune 500 companies worldwide
              </p>
            </div>
          </div>
        </Container>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
    )
  } 