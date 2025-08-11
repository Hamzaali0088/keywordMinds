import React from 'react'
import Navbar from '../../components/common/Navbar'
import Hero from '../../components/Ui/Hero'
import Footer from '../../components/common/Footer'
import FAQs from '../../components/Ui/FAQs'
import Mockups from '../../components/Ui/Mockups'
import SeoTeams from '../../components/container/SeoTeams'

export default function seoTeams() {
    const faqs = [
        {
          question: "How does team collaboration work in SEO tracking?",
          answer: "Team collaboration in SEO tracking allows multiple team members to work on the same client campaigns, share keyword rankings, assign tasks, and track progress in real-time. Everyone stays updated on changes and can contribute to improving rankings."
        },
        {
          question: "Can I manage multiple client projects in one dashboard?",
          answer: "Yes, our platform allows you to manage multiple client campaigns in one organized dashboard. You can set goals, track progress, generate reports, and keep your team focused on results for each client simultaneously."
        },
        {
          question: "What analytics are available for team performance?",
          answer: "Our analytics provide insights into keyword performance, organic traffic growth, click-through rates, and ranking improvements. These data-driven insights help your team understand what's working and make informed decisions."
        },
        {
          question: "How do I assign tasks to team members?",
          answer: "You can assign specific keywords, projects, or tasks to different team members. The system tracks who is working on what, their progress, and provides real-time updates to keep everyone coordinated."
        }
      ];
  return (
    <>  
    <Navbar/>
    <Hero 
    description="Collaborate with your SEO team to track rankings, manage projects, and deliver results that impress your clients."
    title="Team-based SEO tracking made simple"
    tagline="SEO TEAMS"
    buttonText="Get Started"
    image="/st-images/seo-teams.png"i
    />
    <SeoTeams />
    <FAQs
    title="SEO Team Collaboration FAQs"
    description="Find answers to common questions about team-based SEO tracking"
    faqs={faqs}
    />
    <Footer />
    </>
  )
}