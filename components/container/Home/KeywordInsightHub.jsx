import React from 'react'

export default function KeywordInsightHub() {
  // Add custom styles for hiding scrollbar
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
      }
      .scrollbar-hide::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const sections = [
    {
      title: "SPYGLASS VERIFICATION",
      headline: "Accuracy you and your clients can trust",
      description: "3rd party verification for every keyword you are tracking, down to city and ZIP code level. Bring an unbiased source to your reporting.",
      cta: "Learn more about Spyglass - SERP simulator >",
      visual: "serp-verification"
    },
    {
      title: "SHARE OF VOICE MEASUREMENT",
      headline: "Go beyond daily fluctuations",
      description: "See what percentage of searches are landing on your website vs competitors for every important search term. Avoid falling victim to regular fluctuations that frustrate clients with a normal keyword rank tracker.",
      cta: "Learn more about Share of Voice >",
      visual: "share-of-voice"
    },
    {
      title: "REPORTING",
      headline: "Save time spent on manual reports",
      description: "Create 1-click shareable dashboards and send automated reports to clients and decision makers via email.",
      cta: "Learn more about Reporting >",
      visual: "reporting"
    },
    {
      title: "LOOKER STUDIO INTEGRATION",
      headline: "The power is in your dashboard",
      description: "Connect your Keyword.com account to Looker Studio (formerly Google Data Studio). This dynamic business intelligence tool allows you to visualize and organize any keyword and SERP data in a centralized dashboard.",
      cta: "Learn more about Looker Studio Integration >",
      visual: "looker-studio"
    },
    {
      title: "KEYWORD TAGGING",
      headline: "Make meaning out of chaos",
      description: "With our keyword position tracker you can segment your keywords by topic or intent. Group your data to see past vanity metrics and understand the gaps in your competitors' rankings.",
      cta: "Learn more about Keyword Tagging >",
      visual: "keyword-tagging"
    },
    {
      title: "REAL-TIME KEYWORD DATA",
      headline: "Daily updates to give you an edge",
      description: "Refresh your rankings every day and additionally push on-demand updates whenever you need them. Use our rank tracker API to scale and pull data for your projects.",
      cta: "Learn more about daily rank tracking >",
      visual: "real-time-data"
    },
    {
      title: "LOCAL & MOBILE KEYWORD MONITORING",
      headline: "Track any device in any ZIP code, around the world",
      description: "See how your keywords perform for mobile or desktop devices, with 100% verifiable reports that look like the real SERPs.",
      cta: "Learn more about Local & Mobile >",
      visual: "local-mobile"
    },
    {
      title: "KEYWORD RESEARCH",
      headline: "Find new keywords to track",
      description: "Uncover your competitors' keywords and easily find new relevant keywords to track with our Keyword Intelligence tool. Never miss an opportunity to discover high-potential keywords to bring more visitors to your website.",
      cta: "Learn more about keyword research >",
      visual: "keyword-research"
    },
    {
      title: "AI BRAND MENTIONS MONITORING PLATFORM",
      headline: "Monitor your brand mentions across AI platforms",
      description: "Track your website's performance across ChatGPT, Perplexity, Gemini, Claude, and others. Track your rankings, analyze competitors, and optimize your content specifically for AI visibility.",
      cta: "Learn more about AI Visibility >",
      visual: "ai-monitoring"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  )
}

const Section = ({ title, headline, description, cta, visual }) => {
  return (
    <div className="mb-24 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            {title}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {headline}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors"
          >
            {cta}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Visual Mockup */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-xl p-6 shadow-lg h-80 overflow-y-auto scrollbar-hide">
              {visual === "serp-verification" && <SERPVerificationMockup />}
              {visual === "share-of-voice" && <ShareOfVoiceMockup />}
              {visual === "reporting" && <ReportingMockup />}
              {visual === "looker-studio" && <LookerStudioMockup />}
              {visual === "keyword-tagging" && <KeywordTaggingMockup />}
              {visual === "real-time-data" && <RealTimeDataMockup />}
              {visual === "local-mobile" && <LocalMobileMockup />}
              {visual === "keyword-research" && <KeywordResearchMockup />}
              {visual === "ai-monitoring" && <AIMonitoringMockup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SERPVerificationMockup = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2 mb-4">
      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
      <div className="flex-1 bg-gray-200 rounded-full h-8"></div>
    </div>
    
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="space-y-1">
          <div className="h-4 bg-blue-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
        </div>
      ))}
    </div>
    
    <div className="mt-6 relative">
      <div className="bg-gray-100 rounded-lg p-3 h-32">
        <div className="grid grid-cols-2 gap-2 h-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
)

const ShareOfVoiceMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Keyword Trend</h3>
    </div>
    
    <div className="relative h-48 bg-gray-50 rounded-lg p-4">
      {/* Y-axis labels */}
      <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
        <span>30%</span>
        <span>20%</span>
        <span>10%</span>
        <span>0%</span>
      </div>
      
      {/* Chart area */}
      <div className="ml-8 h-full relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="border-t border-gray-200"></div>
          ))}
        </div>
        
        {/* Main line (your website) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0 80 L20 60 L40 30 L60 20 L80 25 L100 35" 
            stroke="#3B82F6" 
            strokeWidth="2" 
            fill="none"
          />
          <circle cx="60" cy="20" r="3" fill="#3B82F6" />
        </svg>
        
        {/* Competitor lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 85 L100 85" stroke="#10B981" strokeWidth="1" fill="none" />
          <path d="M0 87 L100 87" stroke="#8B5CF6" strokeWidth="1" fill="none" />
          <path d="M0 89 L100 89" stroke="#F59E0B" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      {/* X-axis labels */}
      <div className="ml-8 mt-2 flex justify-between text-xs text-gray-500">
        <span>3 Mar</span>
        <span>17 Mar</span>
        <span>31 Mar</span>
        <span>14 Apr</span>
        <span>28 Apr</span>
        <span>12 May</span>
      </div>
    </div>
    
    {/* Tooltip */}
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
      <div className="text-sm font-medium text-gray-800 mb-2">Wednesday May 12, 2021</div>
      <div className="space-y-1 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>yourwebsite.com - 30%</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <span>competitor.com - 4%</span>
        </div>
      </div>
    </div>
  </div>
)

const ReportingMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Dashboard</h3>
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      </button>
    </div>
    
    <div className="text-center py-6">
      <div className="text-4xl font-bold text-green-600">33</div>
      <div className="text-sm text-gray-600">Keywords up</div>
    </div>
    
    <div className="space-y-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="flex-1 h-3 bg-gray-200 rounded"></div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span className="text-sm font-medium">1</span>
          </div>
        </div>
      ))}
    </div>
    
    {/* Share Report Modal */}
    <div className="absolute top-4 right-4 bg-white border border-gray-200 rounded-lg p-4 shadow-xl w-64">
      <h4 className="font-medium text-gray-800 mb-3">Share report</h4>
      <div className="flex space-x-2 mb-3">
        <input 
          type="text" 
          value="https://app.keyword.com/proje" 
          className="flex-1 text-xs border border-gray-300 rounded px-2 py-1"
          readOnly
        />
        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
          Copy
        </button>
      </div>
      <div>
        <div className="text-sm text-gray-600 mb-2">Add scheduled report</div>
        <button className="w-full px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
          Add Recipient Email
        </button>
      </div>
    </div>
  </div>
)

const LookerStudioMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Looker</h3>
    </div>
    
    <div className="space-y-4">
      <div className="text-sm font-medium text-gray-700">Custom Dashboard</div>
      
      {/* Charts */}
      <div className="grid grid-cols-3 gap-3">
        <div className="h-16 bg-blue-100 rounded flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-300 rounded"></div>
        </div>
        <div className="h-16 bg-green-100 rounded flex items-center justify-center">
          <div className="w-8 h-8 bg-green-300 rounded-full"></div>
        </div>
        <div className="h-16 bg-purple-100 rounded flex items-center justify-center">
          <div className="w-8 h-6 bg-purple-300 rounded"></div>
        </div>
      </div>
      
      {/* Data bars */}
      <div className="space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-3 bg-gray-200 rounded"></div>
        ))}
      </div>
      
      {/* Data table */}
      <div className="space-y-2">
        {[
          { arrow: "up", number: "5", color: "green" },
          { arrow: "up", number: "2", color: "green" },
          { arrow: "down", number: "1", color: "red" },
          { arrow: "down", number: "4", color: "red" },
          { arrow: "up", number: "1", color: "green" }
        ].map((item, i) => (
          <div key={i} className="flex items-center space-x-2">
            <svg className={`w-4 h-4 text-${item.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={item.arrow === "up" ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
            </svg>
            <span className="text-sm font-medium">{item.number}</span>
          </div>
        ))}
      </div>
      
      <button className="w-full px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
        + Add To Report
      </button>
    </div>
  </div>
)

const KeywordTaggingMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Projects & Tags</h3>
    </div>
    
    <div className="grid grid-cols-2 gap-4">
      {/* Left panel */}
      <div className="space-y-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
        
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-700">Projects</div>
          <div className="space-y-1">
            <div className="text-sm text-gray-600">Sharedcount.com</div>
            <div className="text-sm text-gray-600">Ottomatik.io</div>
            <div className="text-sm text-gray-700 font-medium">FashionShop.com</div>
            <div className="ml-4 space-y-1">
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="w-3 h-3 bg-blue-200 rounded"></div>
                <span>women clothes</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="w-3 h-3 bg-blue-200 rounded"></div>
                <span>men clothes</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="w-3 h-3 bg-blue-200 rounded"></div>
                <span>kids clothes</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="w-3 h-3 bg-blue-200 rounded"></div>
                <span>fashion ideas</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="w-3 h-3 bg-blue-200 rounded"></div>
                <span>local keywords</span>
              </div>
            </div>
            <button className="ml-4 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">+</button>
          </div>
        </div>
      </div>
      
      {/* Right panel - Modal */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
        <h4 className="font-medium text-gray-800 mb-3">Search Tag or Create New Tag</h4>
        <input 
          type="text" 
          placeholder="Start typing..." 
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm mb-3"
        />
        <div className="space-y-2">
          {["enterprise", "rank tracker", "generic", "keywords everywhere"].map((tag, i) => (
            <label key={i} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-700">{tag}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const RealTimeDataMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <button className="flex items-center space-x-2 px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Refresh Keywords</span>
      </button>
    </div>
    
    <div className="text-lg font-semibold text-gray-800">Dashboard</div>
    
    {/* Metrics */}
    <div className="grid grid-cols-2 gap-3">
      <div className="text-center p-3 bg-green-50 rounded-lg">
        <div className="text-2xl font-bold text-green-600">33</div>
        <div className="text-xs text-gray-600">Keywords up</div>
      </div>
      <div className="text-center p-3 bg-blue-50 rounded-lg">
        <div className="text-2xl font-bold text-blue-600">8</div>
        <div className="text-xs text-gray-600">In Top 1</div>
      </div>
      <div className="text-center p-3 bg-purple-50 rounded-lg">
        <div className="text-2xl font-bold text-purple-600">15</div>
        <div className="text-xs text-gray-600">In Top 10</div>
      </div>
      <div className="text-center p-3 bg-orange-50 rounded-lg">
        <div className="text-2xl font-bold text-orange-600">10</div>
        <div className="text-xs text-gray-600">In Top 100</div>
      </div>
    </div>
    
    {/* Keyword list */}
    <div className="space-y-2">
      {[
        { change: "up", number: "5" },
        { change: "up", number: "2" },
        { change: "down", number: "1" },
        { change: "down", number: "4" },
        { change: "up", number: "1" },
        { change: "up", number: "2" },
        { change: "down", number: "1" },
        { change: "up", number: "6" }
      ].map((item, i) => (
        <div key={i} className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="flex-1 h-3 bg-gray-200 rounded"></div>
          <div className="flex items-center space-x-1">
            <svg className={`w-4 h-4 text-${item.change === "up" ? "green" : "red"}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={item.change === "up" ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
            </svg>
            <span className="text-sm font-medium">{item.number}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const LocalMobileMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Device</h3>
      <h3 className="font-semibold text-gray-800">Locations</h3>
    </div>
    
    <div className="space-y-4">
      {/* Device selection */}
      <div className="space-y-2">
        <div className="text-sm text-gray-600">Device</div>
        <div className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">Desktop</span>
        </div>
      </div>
      
      {/* Location input */}
      <div className="space-y-2">
        <div className="text-sm text-gray-600">Locations</div>
        <div className="relative">
          <input 
            type="text" 
            value="To" 
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm"
          />
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {[
              "Toronto ON, Canada",
              "Tokyo Canada", 
              "Toulouse France",
              "Toluca State of Mexico, Mexico",
              "Tours France"
            ].map((location, i) => (
              <div key={i} className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 cursor-pointer">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-700">
                  {i === 0 ? <span className="font-medium">To</span> : location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const KeywordResearchMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Competitors Keywords</h3>
    </div>
    
    <div className="space-y-4">
      {/* Input fields */}
      <div className="grid grid-cols-3 gap-2">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Enter URL" 
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
          <svg className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Enter Location" 
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
          <svg className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Enter Language" 
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
          <svg className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <button className="w-full px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
        Find Keywords
      </button>
      
      {/* Results table */}
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2 text-xs font-medium text-gray-600">
          <span>Keywords</span>
          <span>Search volume</span>
          <span>Competition</span>
          <span>CPC</span>
        </div>
        
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="grid grid-cols-4 gap-2 items-center">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="flex justify-end">
              <button className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const AIMonitoringMockup = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-gray-800">Add Search Term</h3>
    </div>
    
    <div className="space-y-4">
      {/* Input fields */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Brand</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Keyword.com</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-gray-600 mb-1">Topic</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Rank tracker</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-gray-600 mb-1">Search Term</label>
          <input 
            type="text" 
            value="what is the best rank tracker?" 
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
      </div>
      
      {/* AI Search Engine selection */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">AI Search Engine</label>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {[
            "Google Gemini 1.5 Flash",
            "Google Gemini 2.0 Flash", 
            "OpenAI GPT-4o",
            "Perplexity Sonar",
            "Mistral large"
          ].map((engine, i) => (
            <label key={i} className="flex items-center space-x-2 text-sm">
              <input 
                type="checkbox" 
                defaultChecked={i === 2 || i === 3}
                className="rounded"
              />
              <span className="text-gray-700">{engine}</span>
            </label>
          ))}
        </div>
      </div>
      
      <button className="w-full px-4 py-2 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 cursor-pointer">
        Save
      </button>
    </div>
  </div>
)
