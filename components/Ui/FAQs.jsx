import React, { useState } from 'react'

export default function FAQs({title, description, faqs}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-background-light min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary">
            {description}
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-white rounded-lg shadow-sm border border-text-secondary/20">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-text-secondary/10 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background-light transition-all duration-300 ease-in-out"
              >
                <span className="font-semibold text-text-primary text-lg">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-text-primary transition-transform duration-300 ease-in-out ${
                      openIndex === index ? 'rotate-45' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-text-secondary leading-relaxed transform transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}