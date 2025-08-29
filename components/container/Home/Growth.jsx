import React, { useEffect, useRef, useState } from 'react'
import Container from '../../common/Container';

export default function Growth() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-light py-16 px-4" ref={sectionRef}>
      <Container className="">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left Block - Problem Statement */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-text-primary mb-6 leading-tight">
              Ranking your sites is becoming increasingly difficult...
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Competitors get smarter and the big G keeps changing the rules. But you know there's a money keyword hidden on each project. The one that keeps you up at night. It is your job to find and monetize it — are you up for the challenge?
            </p>
            
            {/* Declining Graph */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Ranking History</h3>
              <div className="h-48 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Grid lines */}
                  <defs>
                    <linearGradient id="declineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#E53E3E" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#E53E3E" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path 
                    d="M0 50 L50 60 L100 80 L150 100 L200 120 L250 140 L300 160 L350 180 L400 200 L400 200 L0 200 Z" 
                    fill="url(#declineGradient)"
                  />
                  
                  {/* Line */}
                  <path 
                    d="M0 50 L50 60 L100 80 L150 100 L200 120 L250 140 L300 160 L350 180 L400 200" 
                    stroke="#E53E3E" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="0" cy="50" r="4" fill="#E53E3E"/>
                  <circle cx="50" cy="60" r="4" fill="#E53E3E"/>
                  <circle cx="100" cy="80" r="4" fill="#E53E3E"/>
                  <circle cx="150" cy="100" r="4" fill="#E53E3E"/>
                  <circle cx="200" cy="120" r="4" fill="#E53E3E"/>
                  <circle cx="250" cy="140" r="4" fill="#E53E3E"/>
                  <circle cx="300" cy="160" r="4" fill="#E53E3E"/>
                  <circle cx="350" cy="180" r="4" fill="#E53E3E"/>
                  <circle cx="400" cy="200" r="4" fill="#E53E3E"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Block - Solution (Animated Growth Section) */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-lg transform transition-all duration-500  hover:shadow-2xl">
            <h2 className={`text-3xl font-bold text-white mb-6 leading-tight ${isVisible ? 'animate-fade-in' : ''}`}>
              Keyword.com removes the noise to single out your winning ideas
            </h2>
            <p className={`text-white text-lg mb-8 leading-relaxed ${isVisible ? 'animate-fade-in-delay' : ''}`}>
              See how your keywords rank over time with our{' '}
              <span className="text-blue-200 font-medium hover:text-white transition-colors duration-300">SERP keyword tracker</span> and{' '}
              <span className="text-blue-200 font-medium hover:text-white transition-colors duration-300">search engine positioning tool</span>. 
              Discover who your true competitors really are and how to beat them. Keyword.com's keyword monitoring software crunches the number so you can focus on your insights.
            </p>
            
            {/* Improving Graph with Animation */}
            <div className="bg-white rounded-xl p-6 transform transition-all duration-300  hover:shadow-lg">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Ranking History</h3>
              <div className="h-48 relative">
                <svg className={`w-full h-full ${isVisible ? 'animate-grow' : ''}`} viewBox="0 0 400 200">
                  {/* Grid lines */}
                  <defs>
                    <linearGradient id="improveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2B6CB0" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#2B6CB0" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill with animation - stair pattern */}
                  <path 
                    d="M0 200 L0 180 L50 180 L50 160 L100 160 L100 140 L150 140 L150 120 L200 120 L200 100 L250 100 L250 80 L300 80 L300 60 L350 60 L350 40 L400 40 L400 200 L0 200 Z" 
                    fill="url(#improveGradient)"
                    className={isVisible ? 'animate-fill' : ''}
                  />
                  
                  {/* Line with animation - stair pattern */}
                  <path 
                    d="M0 180 L50 180 L50 160 L100 160 L100 140 L150 140 L150 120 L200 120 L200 100 L250 100 L250 80 L300 80 L300 60 L350 60 L350 40 L400 40" 
                    stroke="#2B6CB0" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={isVisible ? 'animate-draw' : ''}
                  />
                  
                  {/* Data points with animation */}
                  <circle cx="0" cy="180" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''}/>
                  <circle cx="50" cy="160" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.1s' : '0s'}}/>
                  <circle cx="100" cy="140" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.2s' : '0s'}}/>
                  <circle cx="150" cy="120" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.3s' : '0s'}}/>
                  <circle cx="200" cy="100" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.4s' : '0s'}}/>
                  <circle cx="250" cy="80" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.5s' : '0s'}}/>
                  <circle cx="300" cy="60" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.6s' : '0s'}}/>
                  <circle cx="350" cy="40" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.7s' : '0s'}}/>
                  <circle cx="400" cy="40" r="4" fill="#2B6CB0" className={isVisible ? 'animate-bounce' : ''} style={{animationDelay: isVisible ? '0.8s' : '0s'}}/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-6xl text-primary mb-6">"</div>
          <blockquote className="text-2xl text-text-secondary font-medium mb-8 leading-relaxed">
            With Keyword.com, I just open a new tag, dump in my keywords, and it's done. It's so much faster and more nimble than any other tool.
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold">ST</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-text-primary">Steve Toth</div>
              <div className="text-text-secondary">SEO Consultant, SeoNotebook.com</div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes draw {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes fill {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes grow {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
        
        @keyframes stairs-up {
          from { 
            transform: translateY(50px) scale(0.8); 
            opacity: 0;
          }
          to { 
            transform: translateY(0) scale(1); 
            opacity: 1;
          }
        }
        
        @keyframes circle-bounce-up {
          0% { 
            transform: translateY(30px) scale(0.3); 
            opacity: 0;
          }
          50% { 
            transform: translateY(-5px) scale(1.2); 
            opacity: 1;
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
        
        .animate-draw {
          animation: draw 2s ease-out 0.5s both;
        }
        
        .animate-fill {
          animation: fill 1.5s ease-out 0.8s both;
        }
        
        .animate-grow {
          animation: stairs-up 1.5s ease-out 0.2s both;
        }
        
        .animate-bounce {
          animation: circle-bounce-up 1s ease-out both;
        }
      `}</style>
    </div>
  )
}
