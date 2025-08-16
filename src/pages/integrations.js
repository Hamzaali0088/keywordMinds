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
  Search,
  ChevronRight,
  Star,
  TrendingUp,
  List,
  Image
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
              Supported Integrations
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Connect KeywordMinds with your favorite tools and platforms. 
              From Google tools to BI dashboards, we've got you covered.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* SECTION 1: List Supported Integrations */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <List className="w-4 h-4" />
              <span className="text-sm font-semibold">Available Integrations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Connect with Your Favorite Tools
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Seamlessly integrate KeywordMinds with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="bg-background-light p-8 rounded-2xl border border-text-secondary/20 hover:shadow-lg transition-all duration-300"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${categoryIndex * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {category.category === "Google Tools" && <Search className="w-8 h-8 text-primary" />}
                    {category.category === "BI Dashboards" && <BarChart3 className="w-8 h-8 text-primary" />}
                    {category.category === "APIs & Development" && <Database className="w-8 h-8 text-primary" />}
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{category.category}</h3>
                  <p className="text-text-secondary">
                    {category.integrations.length} integrations available
                  </p>
                </div>

                <div className="space-y-3">
                  {category.integrations.map((integration, index) => (
                    <div key={integration.name} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                      <div className={`w-8 h-8 ${getColorClasses(integration.color).icon} rounded-lg flex items-center justify-center`}>
                        <integration.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary">{integration.name}</h4>
                        <p className="text-xs text-text-secondary">{integration.status}</p>
                      </div>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* SECTION 2: Screenshots & Benefits for Each */}
      <FullContainer className="bg-background-light py-20">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              <Image className="w-4 h-4" />
              <span className="text-sm font-semibold">See How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Explore Each Integration
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Discover how each integration works and what benefits it brings to your workflow
            </p>
          </div>

          {integrations.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  {category.category}
                </h3>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                {/* Table Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <h4 className="font-semibold text-gray-900">Integration</h4>
                    </div>
                    <div className="col-span-4">
                      <h4 className="font-semibold text-gray-900">Description</h4>
                    </div>
                    <div className="col-span-3">
                      <h4 className="font-semibold text-gray-900">Key Benefits</h4>
                    </div>
                    <div className="col-span-2">
                      <h4 className="font-semibold text-gray-900">Actions</h4>
                    </div>
                  </div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  {category.integrations.map((integration, index) => {
                    const colors = getColorClasses(integration.color)
                    const IconComponent = integration.icon
                    
                    return (
                      <div
                        key={integration.name}
                        className={`px-6 py-6 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}
                        style={{
                          animation: 'fadeInUp 0.6s ease-out',
                          animationDelay: `${(categoryIndex * 3 + index) * 0.1}s`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="grid grid-cols-12 gap-4 items-center">
                          {/* Integration Column */}
                          <div className="col-span-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 ${colors.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h5 className={`font-semibold ${colors.text} text-sm`}>
                                  {integration.name}
                                </h5>
                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium">
                                  {integration.status}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Description Column */}
                          <div className="col-span-4">
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {integration.description}
                            </p>
                          </div>

                          {/* Benefits Column */}
                          <div className="col-span-3">
                            <div className="space-y-1">
                              {integration.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center space-x-2 text-xs">
                                  <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                                  <span className="text-gray-700">{benefit}</span>
                                </div>
                              ))}
                              {integration.benefits.length > 2 && (
                                <div className="text-xs text-gray-500">
                                  +{integration.benefits.length - 2} more benefits
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Actions Column */}
                          <div className="col-span-2">
                            <div className="flex flex-col space-y-2">
                              <button className="bg-primary text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-secondary transition-colors duration-200">
                                Learn More
                              </button>
                              <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-50 transition-colors duration-200">
                                Demo
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Expanded Details (Hidden by default, can be toggled) */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Screenshot Preview */}
                            <div>
                              <h6 className="font-medium text-gray-900 text-sm mb-2">Preview</h6>
                              <div className="bg-gray-50 rounded border border-gray-200 p-4">
                                <div className="flex items-center justify-center h-20">
                                  <div className="text-center text-gray-500">
                                    <IconComponent className="w-8 h-8 mx-auto mb-1" />
                                    <span className="text-xs">{integration.name}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* All Benefits */}
                            <div>
                              <h6 className="font-medium text-gray-900 text-sm mb-2">All Benefits</h6>
                              <div className="space-y-1">
                                {integration.benefits.map((benefit, benefitIndex) => (
                                  <div key={benefitIndex} className="flex items-center space-x-2 text-xs">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    <span className="text-gray-700">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
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
        @keyframes slideInFromSide {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
} 