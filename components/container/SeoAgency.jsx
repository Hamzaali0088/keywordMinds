import React from 'react'
import Mockups from '../Ui/Mockups'
import Container from '../common/Container'

export default function SeoAgency() {
    const sections = [
        {
          title: "3RD PARTY VERIFICATION",
          headline: "Spyglass makes your results official",
          description: "No more screenshots or CSV files. Clients trust rankings when they see them with Spyglass because they come from a 3rd party source that can't be manipulated.",
          cta: "Learn more about Spyglass >",
          visual: "spyglass-verification"
        },
        {
          title: "SERPS HISTORY",
          headline: "Learn about your competitors and what made them rank",
          description: "Other SEO ranking check tools force you to add your competitors first in order to monitor their performance. Keyword.com finds your true competitors based on SERPs data. Go back in time and see how they are ranking—at no extra charge.",
          cta: "Explore SERPs History >",
          visual: "serps-history"
        },
        {
          title: "WHITE LABEL REPORTS",
          headline: "Create a consistent, branded experience for clients",
          description: "Remove any mention of Keyword.com. Bring reports to a custom domain with your own logo so clients never question who they are doing business with.",
          cta: "Set up White Label Reports >",
          visual: "white-label-reports"
        }
    ]
  return (
    <Container className='flex flex-col gap-10 py-20 '>
        {sections.map((section, index) => (
            <Mockups key={index} {...section} visual={
            (() => {
              switch (section.visual) {
                case "spyglass-verification":
                  return <SpyglassVerificationMockup />
                case "serps-history":
                  return <SERPsHistoryMockup />
                case "white-label-reports":
                  return <WhiteLabelReportsMockup />
                default:
                  return null
            }
        })()
        } />
        ))}
    </Container>
  )
}

const SpyglassVerificationMockup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const mockupRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-4" ref={mockupRef}>
      {/* Spyglass Header */}
      <div className={`flex items-center space-x-3 ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
          🔍
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Spyglass Verification</h3>
          <p className="text-xs text-gray-500">3rd Party Verified Results</p>
        </div>
        <div className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
          VERIFIED
        </div>
      </div>

      {/* Search Results */}
      <div className={`space-y-3 ${isVisible ? 'animate-slide-in' : ''}`}>
        {[
          { position: 1, domain: "yourwebsite.com", title: "Best SEO Agency - Professional Services", verified: true },
          { position: 2, domain: "competitor1.com", title: "SEO Services - Digital Marketing Agency", verified: true },
          { position: 3, domain: "competitor2.com", title: "Professional SEO Company", verified: true },
          { position: 4, domain: "competitor3.com", title: "SEO Agency Near Me", verified: true },
          { position: 5, domain: "competitor4.com", title: "Digital Marketing SEO Services", verified: true }
        ].map((result, i) => (
          <div key={i} className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg ${isVisible ? 'animate-fade-in-up' : ''}`}
               style={{ animationDelay: isVisible ? `${i * 0.1}s` : '0s' }}>
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-sm font-bold text-gray-600">
              {result.position}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-blue-600">{result.domain}</div>
              <div className="text-xs text-gray-600">{result.title}</div>
            </div>
            {result.verified && (
              <div className="flex items-center space-x-1 text-green-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium">Verified</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Verification Badge */}
      <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${isVisible ? 'animate-bounce-in' : ''}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-blue-800">Spyglass Verified</h4>
            <p className="text-sm text-blue-600">Results verified by independent 3rd party</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

const SERPsHistoryMockup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const mockupRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-4" ref={mockupRef}>
      {/* Date Range Selector */}
      <div className={`flex items-center space-x-3 ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">📅</div>
        <div className="flex-1">
          <label className="text-xs text-gray-500">Date Range</label>
          <div className="flex items-center space-x-2">
            <input 
              type="text" 
              value="May 18th, 2021 — Jun 17th, 2021"
              className="flex-1 bg-gray-100 rounded px-3 py-2 text-sm"
              readOnly
            />
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* SERPs History Columns */}
      <div className={`grid grid-cols-3 gap-4 ${isVisible ? 'animate-scale-in' : ''}`}>
        {[
          {
            date: "May 18, 2021",
            results: [
              { rank: 1, domain: "newyorker.com" },
              { rank: 2, domain: "forbes.com", starred: true },
              { rank: 3, domain: "gizmodo.com" },
              { rank: 4, domain: "hbr.com" },
              { rank: 5, domain: "bloomberg.com" },
              { rank: 6, domain: "cnn.com" }
            ]
          },
          {
            date: "May 21, 2021",
            results: [
              { rank: 1, domain: "wsj.com" },
              { rank: 2, domain: "time.com" },
              { rank: 3, domain: "thestreet.com" },
              { rank: 4, domain: "theverge.com" },
              { rank: 5, domain: "wired.com" },
              { rank: 6, domain: "gizmodo.com" }
            ]
          },
          {
            date: "Jun 17, 2021",
            results: [
              { rank: 1, domain: "techcrunch.com" },
              { rank: 2, domain: "venturebeat.com" },
              { rank: 3, domain: "recode.net" },
              { rank: 4, domain: "forbes.com" },
              { rank: 5, domain: "wired.com" },
              { rank: 6, domain: "theverge.com" }
            ]
          }
        ].map((column, colIndex) => (
          <div key={colIndex} className="space-y-2">
            <h4 className="font-medium text-gray-800 text-sm">{column.date}</h4>
            <div className="space-y-1">
              {column.results.map((result, i) => (
                <div key={i} className={`flex items-center space-x-2 p-2 bg-gray-50 rounded text-sm ${isVisible ? 'animate-fade-in-up' : ''}`}
                     style={{ animationDelay: isVisible ? `${colIndex * 0.2 + i * 0.1}s` : '0s' }}>
                  <span className="font-medium text-gray-600 w-4">{result.rank}</span>
                  <span className="text-blue-600 flex-1">{result.domain}</span>
                  {result.starred && (
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Competitor Insights */}
      <div className={`bg-purple-50 rounded-lg p-4 ${isVisible ? 'animate-bounce-in' : ''}`}>
        <h4 className="font-medium text-purple-800 mb-2">🎯 Competitor Insights</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700">forbes.com consistently ranks in top 5</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700">gizmodo.com shows volatility in rankings</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-700">techcrunch.com emerging as strong competitor</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

const WhiteLabelReportsMockup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const mockupRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-4" ref={mockupRef}>
      {/* Report Brand Settings Header */}
      <div className={`${isVisible ? 'animate-fade-in' : ''}`}>
        <h3 className="font-semibold text-gray-800 mb-4">Report Brand Settings</h3>
      </div>

      {/* Company Logo Section */}
      <div className={`flex items-center space-x-4 ${isVisible ? 'animate-slide-in' : ''}`}>
        <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Upload Company Logo
        </button>
      </div>

      {/* Settings Toggles */}
      <div className={`space-y-3 ${isVisible ? 'animate-fade-in-up' : ''}`}>
        {[
          "Use Whitelabel Domain",
          "Display Company Information",
          "Display Company Information in ViewKeys",
          "Custom Subdomain"
        ].map((setting, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">{setting}</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="w-10 h-6 bg-blue-600 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full shadow"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company URL */}
      <div className={`space-y-2 ${isVisible ? 'animate-bounce-in' : ''}`}>
        <label className="text-sm font-medium text-gray-700">Company URL</label>
        <input 
          type="text" 
          value="https://keyword.com/"
          className="w-full bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-600"
          readOnly
        />
      </div>

      {/* Preview */}
      <div className={`bg-white border border-gray-200 rounded-lg p-4 ${isVisible ? 'animate-scale-in' : ''}`}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Your Agency Name</h4>
            <p className="text-xs text-gray-500">SEO Performance Report</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Organic Traffic:</span>
            <span className="font-medium">12,450 (+15%)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Keywords in Top 10:</span>
            <span className="font-medium">45 (+8)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Average Position:</span>
            <span className="font-medium">12.3 (-2.1)</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out both;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};