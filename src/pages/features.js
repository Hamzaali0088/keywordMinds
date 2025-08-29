import React from 'react'
import Navbar from '../../components/common/Navbar'
import Container from '../../components/common/Container'
import FullContainer from '../../components/common/FullContainer'
import Footer from '../../components/common/Footer'
import RankTracking from '../../components/container/features/RankTracking'
import CompetitorInsights from '../../components/container/features/CompetitorInsights'
import SERPHistory from '../../components/container/features/SERPHistory'
import RealTimeUpdates from '../../components/container/features/RealTimeUpdates'
import WhiteLabelReports from '../../components/container/features/WhiteLabelReports'
import Integrations from '../../components/container/features/Integrations'
import TeamCollaboration from '../../components/container/features/TeamCollaboration'
import AIVisibilityTracking from '../../components/container/features/AIVisibilityTracking'

export default function Features() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <FullContainer className="bg-background-light">
        <Container>
          <div className="text-center py-20 md:py-32 pt-30 md:pt-45">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Powerful Features for SEO Success
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Everything you need to track keywords, analyze competitors, and dominate search results. 
              Built for SEO agencies, in-house teams, and enterprise solutions.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Feature Components */}
      <RankTracking />
      <CompetitorInsights />
      <SERPHistory />
      <RealTimeUpdates />
      <WhiteLabelReports />
      <Integrations />
      <TeamCollaboration />
      <AIVisibilityTracking />

      {/* Final CTA Section */}
      <FullContainer className="bg-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Ready to Transform Your SEO?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of SEO professionals who trust our platform to track keywords and win rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-secondary text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-secondary text-secondary font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-primary hover:text-white transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-text-secondary mt-4">No credit card required • 14-day free trial</p>
          </div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  )
}
