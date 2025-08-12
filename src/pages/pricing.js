import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Pricing from '../../components/container/pricing/Princing'
import Popular from '../../components/container/pricing/Popular'
import Plans from '../../components/container/pricing/Plans'
import FAQs from '../../components/Ui/FAQs'

export default function pricing() {
    const faqs = [
        {
            question: "What is the pricing for the free trial?",
            answer: "The free trial is free for 7 days. After that, you will need to purchase a plan."
        },
        {
            question: "What is the pricing for the free trial?",
            answer: "The free trial is free for 7 days. After that, you will need to purchase a plan."
        },
        {
            question: "What is the pricing for the free trial?",
            answer: "The free trial is free for 7 days. After that, you will need to purchase a plan."
        },
    ]   

  return (
    <div>
        <Navbar/>
        <Pricing/>
        <Popular/>
        <Plans/>
        <FAQs title="Frequently Asked Questions" description="Here are some of the most frequently asked questions about our pricing." faqs={faqs}/>
        <Footer/>
    </div>
  )
}