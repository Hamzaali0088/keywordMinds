import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { BarChart3, FileText, Shield, Zap, Clock, Heart, Share2 } from 'lucide-react'

// Data for the report type cards
const reportTypesData = [
  {
    id: 1,
    icon: BarChart3,
    title: "Interactive Dashboards",
    description: "Real-time dashboards with your branding, interactive charts, and live data updates.",
    features: [
      "Custom branding & colors",
      "Interactive charts & graphs",
      "Real-time data updates"
    ]
  },
  {
    id: 2,
    icon: FileText,
    title: "PDF Reports",
    description: "Professional PDF reports with your logo, custom styling, and comprehensive data analysis.",
    features: [
      "Automated PDF generation",
      "Custom templates & layouts",
      "Scheduled email delivery"
    ]
  },
  {
    id: 3,
    icon: Shield,
    title: "Client Portal",
    description: "Secure client portal with branded access, role-based permissions, and self-service features.",
    features: [
      "Secure client access",
      "Role-based permissions",
      "Self-service features"
    ]
  }
]

export default function WhiteLabelReports() {
  return (
    <FullContainer className="py-16 bg-gradient-to-br from-background-light to-gray-100">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            White-Label Reports
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Branded Dashboards & PDFs
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Create professional, branded reports and dashboards for your clients. Share insights with customizable white-label solutions.
          </p>
        </div>

        {/* Modern Horizontal Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reportTypesData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.id} className="group relative bg-white p-6 rounded-2xl shadow-lg border border-text-secondary/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-white transition-colors duration-300">{card.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary group-hover:text-white/90 mb-4 transition-colors duration-300 line-clamp-2">{card.description}</p>
                  <div className="text-xs text-text-secondary/70 group-hover:text-white/70 transition-colors duration-300">
                    {card.features.length} features included
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Report Dashboard */}
        <div className="bg-gradient-to-br from-white to-background-light p-6 rounded-3xl shadow-xl border border-text-secondary/10 mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Live Report Preview</h3>
                <p className="text-sm text-text-secondary">Real-time client dashboard</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-text-secondary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Horizontal Stats Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl border border-primary/20 text-center">
              <div className="text-2xl font-bold text-primary mb-1">+15%</div>
              <div className="text-xs text-text-secondary">Traffic Growth</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-secondary/20 text-center">
              <div className="text-2xl font-bold text-secondary mb-1">#3</div>
              <div className="text-xs text-text-secondary">Avg Position</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-primary/20 text-center">
              <div className="text-2xl font-bold text-primary mb-1">247</div>
              <div className="text-xs text-text-secondary">Keywords</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-secondary/20 text-center">
              <div className="text-2xl font-bold text-secondary mb-1">89%</div>
              <div className="text-xs text-text-secondary">Visibility</div>
            </div>
          </div>

          {/* Quick Insights Row */}
          <div className="bg-white p-4 rounded-xl border border-text-secondary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Agency Dashboard</h4>
                  <p className="text-xs text-text-secondary">Customizable branding & metrics</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-lg font-medium">"SEO tools" #1</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-lg font-medium">89% visibility</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Features Row */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-text-secondary/20 mb-12">
          <h3 className="text-xl font-bold text-text-primary mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Templates</h4>
              <p className="text-xs text-text-secondary">Custom layouts</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Automation</h4>
              <p className="text-xs text-text-secondary">Scheduled delivery</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Branding</h4>
              <p className="text-xs text-text-secondary">Full customization</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-text-primary mb-1">Sharing</h4>
              <p className="text-xs text-text-secondary">One-click export</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Create Report
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Templates
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 