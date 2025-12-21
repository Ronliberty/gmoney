'use client'

import { useState, useEffect } from 'react'

const faqs = [
  {
    question: "How quickly can I start earning?",
    answer: "Most partners start earning within <strong>24-48 hours</strong> after completing the simple setup process. We guide you through platform registrations and our team begins work immediately."
  },
  {
    question: "Is there any upfront cost?",
    answer: "<strong>Absolutely zero upfront costs.</strong> We only earn when you earn through our transparent 30% revenue share model. No hidden fees, no monthly charges."
  },
  {
    question: "Can I use this alongside my full-time job?",
    answer: "Yes! That's one of the main benefits. <strong>No time commitment required from you.</strong> Our team works independently, so you can focus on your job while earning extra income."
  },
  {
    question: "What if I want to stop?",
    answer: "You can pause or stop anytime with <strong>no penalties or obligations.</strong> Simply let us know, and we'll immediately stop all activity on your accounts."
  }
]

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq')
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={`py-16 px-4 sm:py-20 md:py-28 lg:py-32 bg-gray-50 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button 
                onClick={() => toggleFAQ(index)}
                className="faq-question w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-800">{faq.question}</span>
                <i className={`fas fa-chevron-down text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`faq-answer px-6 md:px-8 pb-6 ${openIndex === index ? 'block' : 'hidden'}`}>
                <p 
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}