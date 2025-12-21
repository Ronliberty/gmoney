'use client'

import { useState, useEffect } from 'react'

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('how-it-works')
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

  return (
    <section id="how-it-works" className={`py-16 px-4 sm:py-20 md:py-28 lg:py-32 bg-gray-50 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            How It Works
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Simple 3-step process to start earning
          </p>
        </div>

        {/* Progress Steps */}
        <div className="relative mb-16">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl card-hover relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">You Sign Up</h3>
                <p className="text-gray-600 mb-6">Create accounts on AI platforms (guided setup)</p>
                <div className="space-y-3">
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <i className="fas fa-check text-primary mr-3"></i>
                    <span className="text-sm">5-minute registration</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <i className="fas fa-check text-primary mr-3"></i>
                    <span className="text-sm">No technical skills needed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl card-hover relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">We Do The Work</h3>
                <p className="text-gray-600 mb-6">Our team handles everything</p>
                <div className="space-y-3">
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <i className="fas fa-users text-primary mr-3"></i>
                    <span className="text-sm">Professional annotators</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <i className="fas fa-chart-line text-primary mr-3"></i>
                    <span className="text-sm">Performance optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl card-hover relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-white">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">You Get Paid</h3>
                <p className="text-gray-600 mb-6">Weekly direct deposits</p>
                <div className="space-y-3">
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <i className="fas fa-calendar text-primary mr-3"></i>
                    <span className="text-sm">Every Wednesday</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <i className="fas fa-wallet text-primary mr-3"></i>
                    <span className="text-sm">Direct to your account</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platforms Grid */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Partner Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">🤖</div>
              <p className="font-semibold">Outlier AI</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">📊</div>
              <p className="font-semibold">Telus AI</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">🔬</div>
              <p className="font-semibold">Prolific</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">☁️</div>
              <p className="font-semibold">CloudResearch</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">📝</div>
              <p className="font-semibold">DataAnnotation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}