import React from 'react'
import { ArrowRight, Info, Check } from 'lucide-react'

export default function Plans() {
  const features = [
    // Core Features
    {
      name: 'Automatic ranking updates',
      freeTrial: 'Daily',
      business: 'Weekly or daily',
      enterprise: 'Weekly or daily'
    },
    {
      name: 'On-demand ranking updates',
      freeTrial: true,
      business: true,
      enterprise: true
    },
    {
      name: 'Unlimited domains tracked',
      freeTrial: true,
      business: true,
      enterprise: true
    },
    {
      name: 'Customer support',
      freeTrial: true,
      business: true,
      enterprise: true
    },
    {
      name: 'API',
      freeTrial: true,
      business: true,
      enterprise: true
    },
    {
      name: 'Add-on users',
      freeTrial: 'Unlimited',
      business: 'Unlimited',
      enterprise: 'Unlimited'
    },
    {
      name: 'User permissions',
      freeTrial: true,
      business: true,
      enterprise: true
    },
    {
      name: 'Data imports',
      freeTrial: true,
      business: true,
      enterprise: true
    },
    {
      name: 'AI visibility add-on',
      freeTrial: 'Now available',
      business: 'Now available',
      enterprise: 'Now available'
    },
    {
      name: 'Performance tracking',
      freeTrial: false,
      business: 'Perplexity Sonar, ChatGPT, AI Overviews, Gemini, Mistral AI, DeepSeek, Claude',
      enterprise: 'Perplexity Sonar, ChatGPT, AI Overviews, Gemini, Mistral AI, DeepSeek, Claude'
    },
    {
      name: 'Competitor benchmarking',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Citation analysis',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Brand sentiment analysis',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'AI search overview',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Topics',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Find search terms',
      freeTrial: false,
      business: 'Available as add-on purchase or separate purchase',
      enterprise: 'Available as add-on purchase or separate purchase'
    },
    // Rank tracking
    {
      name: 'Top 100 Google SERPs',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Google AI Overviews',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Share of voice',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'SERP history',
      freeTrial: '-',
      business: '2 years',
      enterprise: 'Unlimited'
    },
    {
      name: 'Mobile tracking',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Spyglass',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Keyword Intelligence',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Search intent',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'SERP features',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Keyword competition',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Custom alerts',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Keyword organization',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Search volume',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'CPC',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'CTR',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    // Local rank tracking
    {
      name: 'Local keyword tracking',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Google Business Profile tracking',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Google Maps tracking',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    // Reporting
    {
      name: 'ViewKey real-time reports',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'White-Label ViewKey domain',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Custom ViewKey domain',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Scheduled email reports',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'PDF/CSV exports',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Branded reports',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    // Integrations
    {
      name: 'Google Analytics',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Google Search Console',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'Google Looker Studio',
      freeTrial: false,
      business: true,
      enterprise: true
    },
    {
      name: 'DashThis',
      freeTrial: false,
      business: true,
      enterprise: true
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Plan Cards Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 sticky top-20 z-10">
        <div></div>
        {/* FREE TRIAL Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-text-secondary/20">
          <h3 className="text-xl font-medium text-text-primary mb-4">FREE TRIAL</h3>
          <button className="w-full py-3 px-6 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">
            Start Free Trial
          </button>
        </div>

        {/* BUSINESS Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-text-secondary/20">
          <h3 className="text-xl font-medium text-text-primary mb-4">BUSINESS</h3>
          <button className="w-full py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors duration-200 flex items-center justify-center gap-2">
            Get Started 🚀
            <ArrowRight className="w-4 h-4"/>
          </button>
        </div>

        {/* ENTERPRISE Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-text-secondary/20">
          <h3 className="text-xl font-medium text-text-primary mb-4">ENTERPRISE</h3>
          <button className="w-full py-3 px-6 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200">
            Get Quote
          </button>
        </div>
      </div>

      {/* Desktop Table (lg and up) */}
      <div className="hidden lg:block bg-background-light rounded-lg overflow-hidden border border-text-secondary/20">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-text-secondary/10">
          <div className="p-4 font-semibold text-text-primary">Features</div>
          <div className="p-4 font-semibold text-text-primary text-center">FREE TRIAL</div>
          <div className="p-4 font-semibold text-text-primary text-center">BUSINESS</div>
          <div className="p-4 font-semibold text-text-primary text-center">ENTERPRISE</div>
        </div>

        {/* Feature Rows */}
        {features.map((feature, index) => (
          <div 
            key={feature.name} 
            className={`grid grid-cols-4 ${
              index % 2 === 0 ? 'bg-white' : 'bg-background-light'
            }`}
          >
            {/* Feature Name */}
            <div className="p-4 flex items-center gap-2">
              <span className="text-text-primary">{feature.name}</span>
              <Info className="w-4 h-4 text-text-secondary" />
            </div>

            {/* FREE TRIAL */}
            <div className="p-4 text-center">
              {typeof feature.freeTrial === 'boolean' ? (
                feature.freeTrial ? (
                  <Check className="w-5 h-5 text-primary mx-auto" />
                ) : (
                  <span className="text-text-secondary/40">—</span>
                )
              ) : (
                <span className="text-text-primary font-medium">{feature.freeTrial}</span>
              )}
            </div>

            {/* BUSINESS */}
            <div className="p-4 text-center">
              {typeof feature.business === 'boolean' ? (
                feature.business ? (
                  <Check className="w-5 h-5 text-primary mx-auto" />
                ) : (
                  <span className="text-text-secondary/40">—</span>
                )
              ) : (
                <span className="text-text-primary font-medium">{feature.business}</span>
              )}
            </div>

            {/* ENTERPRISE */}
            <div className="p-4 text-center">
              {typeof feature.enterprise === 'boolean' ? (
                feature.enterprise ? (
                  <Check className="w-5 h-5 text-primary mx-auto" />
                ) : (
                  <span className="text-text-secondary/40">—</span>
                )
              ) : (
                <span className="text-text-primary font-medium">{feature.enterprise}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Small Screen Tables (sm to lg) */}
      <div className="lg:hidden space-y-6">
        {/* FREE TRIAL Table */}
        <div className="bg-background-light rounded-lg overflow-hidden border border-text-secondary/20">
          <div className="bg-primary p-4">
            <h3 className="text-white font-semibold text-center text-lg">FREE TRIAL</h3>
          </div>
          <div className="bg-white">
            {features.map((feature, index) => (
              <div key={feature.name} className={`p-4 flex items-center justify-between ${index !== features.length - 1 ? 'border-b border-text-secondary/10' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="text-text-primary text-sm">{feature.name}</span>
                  <Info className="w-4 h-4 text-text-secondary flex-shrink-0" />
                </div>
                <div className="text-center">
                  {typeof feature.freeTrial === 'boolean' ? (
                    feature.freeTrial ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-text-secondary/40">—</span>
                    )
                  ) : (
                    <span className="text-text-primary font-medium text-sm">{feature.freeTrial}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BUSINESS Table */}
        <div className="bg-background-light rounded-lg overflow-hidden border border-text-secondary/20">
          <div className="bg-primary p-4">
            <h3 className="text-white font-semibold text-center text-lg">BUSINESS</h3>
          </div>
          <div className="bg-white">
            {features.map((feature, index) => (
              <div key={feature.name} className={`p-4 flex items-center justify-between ${index !== features.length - 1 ? 'border-b border-text-secondary/10' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="text-text-primary text-sm">{feature.name}</span>
                  <Info className="w-4 h-4 text-text-secondary flex-shrink-0" />
                </div>
                <div className="text-center">
                  {typeof feature.business === 'boolean' ? (
                    feature.business ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-text-secondary/40">—</span>
                    )
                  ) : (
                    <span className="text-text-primary font-medium text-sm">{feature.business}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ENTERPRISE Table */}
        <div className="bg-background-light rounded-lg overflow-hidden border border-text-secondary/20">
          <div className="bg-primary p-4">
            <h3 className="text-white font-semibold text-center text-lg">ENTERPRISE</h3>
          </div>
          <div className="bg-white">
            {features.map((feature, index) => (
              <div key={feature.name} className={`p-4 flex items-center justify-between ${index !== features.length - 1 ? 'border-b border-text-secondary/10' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="text-text-primary text-sm">{feature.name}</span>
                  <Info className="w-4 h-4 text-text-secondary flex-shrink-0" />
                </div>
                <div className="text-center">
                  {typeof feature.enterprise === 'boolean' ? (
                    feature.enterprise ? (
                      <Check className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-text-secondary/40">—</span>
                    )
                  ) : (
                    <span className="text-text-primary font-medium text-sm">{feature.enterprise}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tax Notice */}
      <div className="mt-8 text-center">
        <p className="text-text-secondary text-sm">
          All prices are exclusive of applicable taxes.
        </p>
      </div>
    </div>
  )
}
