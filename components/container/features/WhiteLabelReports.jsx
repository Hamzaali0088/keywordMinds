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
    <FullContainer className="py-20 bg-gradient-to-br from-background-light to-gray-100">
      <Container>
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Report Types */}
          {reportTypesData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.id} className="bg-white p-8 rounded-2xl shadow-xl border border-text-secondary/20 transform transition-all duration-300 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:border-primary/20 group cursor-pointer">
                <div className="w-16 h-16 bg-background-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:bg-opacity-20 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-white mb-4 transition-colors duration-300">{card.title}</h3>
                <p className=" group-hover:text-white mb-6 transition-colors duration-300">{card.description}</p>
                <ul className="space-y-2 text-sm group-hover:text-white transition-colors duration-300">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-text-secondary/40 group-hover:bg-white group-hover:text-white rounded-full transition-colors duration-300"></div>
                      <span className="group-hover:text-white/80 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Report Preview */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-text-secondary/20 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-text-primary">Sample White-Label Report</h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <div className="w-3 h-3 bg-text-secondary rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Report Header */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Your Agency Name</h4>
                      <p className="text-white/80">SEO Performance Report</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">Dec 2024</div>
                    <div className="text-white/80 text-sm">Monthly Report</div>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">+15%</div>
                  <div className="text-sm text-text-secondary">Traffic Growth</div>
                </div>
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">#3</div>
                  <div className="text-sm text-text-secondary">Avg Position</div>
                </div>
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">247</div>
                  <div className="text-sm text-text-secondary">Keywords</div>
                </div>
                <div className="bg-background-light p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">89%</div>
                  <div className="text-sm text-text-secondary">Visibility</div>
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="space-y-6">
              <div className="bg-background-light p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Top Performing Keywords</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-text-primary">"SEO tools"</span>
                    <span className="text-sm font-bold text-primary">#1</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-text-primary">"Keyword tracker"</span>
                    <span className="text-sm font-bold text-secondary">#2</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-sm text-text-primary">"Rank monitoring"</span>
                    <span className="text-sm font-bold text-text-secondary">#5</span>
                  </div>
                </div>
              </div>

              <div className="bg-background-light p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Recent Improvements</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">"SEO software" moved from #8 to #3</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-text-secondary">"Rank tracker" improved to #2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-text-secondary rounded-full"></div>
                    <span className="text-sm text-text-secondary">15 new keywords in top 10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Custom Templates</h4>
            <p className="text-sm text-text-secondary">Design your own report layouts</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Scheduled Reports</h4>
            <p className="text-sm text-text-secondary">Automated delivery to clients</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Brand Integration</h4>
            <p className="text-sm text-text-secondary">Your logo, colors & branding</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-text-secondary/20">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Easy Sharing</h4>
            <p className="text-sm text-text-secondary">One-click sharing options</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Create Report
            </button>
            <button className="border-2 border-secondary text-secondary font-semibold py-3 px-8 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
              View Templates
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
} 