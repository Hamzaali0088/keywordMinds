import React from 'react'
import Navbar from '../../components/common/Navbar'
import Container from '../../components/common/Container'
import FullContainer from '../../components/common/FullContainer'
import Footer from '../../components/common/Footer'
import { 
  ExternalLink, 
  Zap, 
  BarChart3, 
  Database, 
  Globe, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Search
} from 'lucide-react'

export default function Integrations() {
  const integrations = [
    {
      category: "Google Tools",
      integrations: [
        {
          name: "Google Analytics",
          description: "Connect your rank tracking data with Google Analytics for comprehensive performance insights.",
          benefits: ["Track organic traffic correlation", "Monitor conversion rates", "Analyze user behavior"],
          status: "Available",
          icon: BarChart3,
          color: "blue",
          screenshot: "/st-images/integrations/google-analytics.jpg"
        },
        {
          name: "Google Search Console",
          description: "Import and sync your Search Console data to get a complete picture of your SEO performance.",
          benefits: ["Import existing keywords", "Compare data sources", "Enhanced reporting"],
          status: "Available",
          icon: Search,
          color: "green",
          screenshot: "/st-images/integrations/search-console.jpg"
        },
        {
          name: "Google Looker Studio",
          description: "Create stunning, interactive dashboards with your rank tracking data in Looker Studio.",
          benefits: ["Custom dashboards", "Real-time data", "Client presentations"],
          status: "Available",
          icon: BarChart3,
          color: "purple",
          screenshot: "/st-images/integrations/looker-studio.jpg"
        }
      ]
    },
    {
      category: "BI Dashboards",
      integrations: [
        {
          name: "DashThis",
          description: "Automatically sync your rank tracking data to DashThis for comprehensive client reporting.",
          benefits: ["Automated reporting", "White-label dashboards", "Scheduled reports"],
          status: "Available",
          icon: BarChart3,
          color: "orange",
          screenshot: "/st-images/integrations/dashthis.jpg"
        },
        {
          name: "Tableau",
          description: "Connect your rank tracking data to Tableau for advanced analytics and visualization.",
          benefits: ["Advanced analytics", "Custom visualizations", "Data exploration"],
          status: "Available",
          icon: BarChart3,
          color: "blue",
          screenshot: "/st-images/integrations/tableau.jpg"
        },
        {
          name: "Power BI",
          description: "Integrate with Microsoft Power BI for enterprise-level reporting and analytics.",
          benefits: ["Enterprise reporting", "Microsoft ecosystem", "Advanced filtering"],
          status: "Available",
          icon: BarChart3,
          color: "yellow",
          screenshot: "/st-images/integrations/power-bi.jpg"
        }
      ]
    },
    {
      category: "APIs & Development",
      integrations: [
        {
          name: "REST API",
          description: "Access your rank tracking data programmatically with our comprehensive REST API.",
          benefits: ["Real-time data access", "Custom integrations", "Automated workflows"],
          status: "Available",
          icon: Database,
          color: "red",
          screenshot: "/st-images/integrations/api.jpg"
        },
        {
          name: "Webhooks",
          description: "Receive instant notifications when rankings change with configurable webhooks.",
          benefits: ["Instant alerts", "Custom triggers", "Automated actions"],
          status: "Available",
          icon: Zap,
          color: "green",
          screenshot: "/st-images/integrations/webhooks.jpg"
        },
        {
          name: "Zapier",
          description: "Connect KeywordMinds to 5000+ apps through Zapier for seamless automation.",
          benefits: ["5000+ app connections", "No-code automation", "Custom workflows"],
          status: "Available",
          icon: Zap,
          color: "orange",
          screenshot: "/st-images/integrations/zapier.jpg"
        }
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-primary/10',
        icon: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary/20'
      },
      green: {
        bg: 'bg-secondary/10',
        icon: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary/20'
      },
      purple: {
        bg: 'bg-primary/10',
        icon: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary/20'
      },
      orange: {
        bg: 'bg-secondary/10',
        icon: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary/20'
      },
      yellow: {
        bg: 'bg-primary/10',
        icon: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary/20'
      },
      red: {
        bg: 'bg-secondary/10',
        icon: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary/20'
      }
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <FullContainer className="bg-gradient-to-br from-background-light to-text-secondary/10">
        <Container>
          <div className="pt-20 md:pt-32 pb-16 text-center">
            <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Integrations
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Connect Your Workflow
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Seamlessly integrate KeywordMinds with your favorite tools and platforms. 
              From Google Analytics to custom APIs, we've got you covered.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Integration Categories */}
      <FullContainer className="bg-white py-20">
        <Container>
          {integrations.map((category, categoryIndex) => (
            <div key={category.category} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                  {category.category === "Google Tools" && "Integrate with Google's ecosystem for comprehensive analytics"}
                  {category.category === "BI Dashboards" && "Connect to leading business intelligence platforms"}
                  {category.category === "APIs & Development" && "Build custom integrations with our developer tools"}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.integrations.map((integration, index) => {
                  const colors = getColorClasses(integration.color)
                  const IconComponent = integration.icon
                  
                  return (
                    <div
                      key={integration.name}
                      className={`group relative p-6 rounded-2xl border-2 ${colors.border} ${colors.bg} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                      style={{
                        animation: 'fadeInUp 0.6s ease-out',
                        animationDelay: `${(categoryIndex * 3 + index) * 0.1}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      {/* Screenshot Placeholder */}
                      <div className="h-32 bg-gradient-to-br from-background-light to-text-secondary/20 rounded-xl mb-6 flex items-center justify-center">
                        <div className="text-text-secondary text-center">
                          <IconComponent className="w-8 h-8 mx-auto mb-2" />
                          <span className="text-xs">Integration Screenshot</span>
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {integration.status}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className={`text-xl font-bold ${colors.text} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                        {integration.name}
                      </h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {integration.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-2 mb-6">
                        {integration.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-text-primary">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="flex items-center space-x-2 bg-white text-text-secondary px-3 py-2 rounded-lg text-sm font-medium hover:bg-background-light transition-colors duration-200 border border-text-secondary/20">
                          <Play className="w-4 h-4" />
                          <span>Demo</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </Container>
      </FullContainer>

      {/* API Documentation Section */}
      <FullContainer className="bg-background-light py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                Developer-Friendly API
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Build custom integrations with our comprehensive REST API. Access real-time rank tracking data, 
                set up webhooks, and automate your SEO workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-text-primary">RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-text-primary">Comprehensive documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-text-primary">SDKs for popular languages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-text-primary">Webhook support for real-time updates</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  View API Docs
                </button>
                <button className="border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover:bg-primary hover:text-white">
                  Get API Key
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-text-secondary/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">API Example</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div>GET /api/v1/rankings</div>
                <div className="text-gray-400 mt-2">// Get keyword rankings</div>
                <div className="mt-2">
                  <div>{"{"}</div>
                  <div className="ml-4">"keyword": "seo tools",</div>
                  <div className="ml-4">"domain": "keywordminds.com",</div>
                  <div className="ml-4">"position": 3,</div>
                  <div className="ml-4">"change": +2</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* Integration Benefits */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Why Integrate?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Connect your rank tracking data with your existing tools to create powerful, automated workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Save Time</h3>
              <p className="text-text-secondary">Automate data collection and reporting across all your tools</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Better Insights</h3>
              <p className="text-text-secondary">Combine data from multiple sources for comprehensive analysis</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Team Collaboration</h3>
              <p className="text-text-secondary">Share data seamlessly across your entire team</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Data Security</h3>
              <p className="text-text-secondary">Enterprise-grade security for all your integrations</p>
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* CTA Section */}
      <FullContainer className="bg-gradient-to-r from-primary to-secondary py-20">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Integrate?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Start connecting your tools today and unlock the full potential of your rank tracking data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-background-light transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-white hover:text-primary transform hover:scale-105">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-white/60 mt-4">All integrations included in your plan</p>
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