import React from 'react'
import Navbar from '../../components/common/Navbar'
import Hero from '../../components/Ui/Hero'
import Footer from '../../components/common/Footer'
import FAQs from '../../components/Ui/FAQs'
import Mockups from '../../components/Ui/Mockups'
import SeoAgency from '../../components/container/SeoAgency'

export default function seoAgency() {
    const faqs = [
        {
          question: "What Is Position Tracking in SEO?",
          answer: "Position tracking in SEO means monitoring and analyzing the rankings of your clients' websites or specific web pages in search engine results pages (SERPs). You can do this with a keyword rank tracker."
        },
        {
          question: "What Are the Features of a Good Agency Rank Tracker?",
          answer: "A good agency rank tracker should include comprehensive keyword monitoring, competitor analysis, automated reporting, white-label options, client management tools, and integration capabilities with other SEO platforms."
        },
        {
          question: "Can I Generate Reports with Keyword.com?",
          answer: "Yes, Keyword.com provides robust reporting features that allow you to generate detailed SEO reports for your clients, including keyword rankings, traffic analysis, and competitor insights."
        },
        {
          question: "Do You Support Google Local Listing Tracking/GMB listings?",
          answer: "Yes, our platform supports Google My Business (GMB) listing tracking, allowing you to monitor local search rankings and manage your clients' local SEO performance effectively."
        }
      ];
  return (
    <>  
    <Navbar/>
    <Hero 
    description="Wow your agency clients with ranking reports that showcase your success on their SEO campaigns."
    title="Agency rank tracking made easy"
    tagline="SEO AGENCIES "
    buttonText="Get Started"
    image="/st-images/seo-agency.png"
    />
    <SeoAgency />
    <FAQs
    title="Agency Rank Tracking FAQs"
    description="Find answers to common agency rank tracker questions"
    faqs={faqs}
    />
    <Footer />
    </>
  )
}
