'use client'

import { useState, useEffect } from 'react'

export default function Security() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('security')
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
    <section id="security" className={`py-16 px-4 sm:py-20 md:py-28 lg:py-32 bg-gray-50 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Security & Privacy
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Your security is our top priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl card-hover">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-shield-alt text-3xl text-primary"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Bank-Level Security</h3>
            <p className="text-gray-600">256-bit SSL encryption and secure proxy access for all platform connections.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl card-hover">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-eye-slash text-3xl text-primary"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Zero Data Storage</h3>
            <p className="text-gray-600">We never store your personal information or login credentials on our servers.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl card-hover">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-handshake text-3xl text-primary"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Transparent Access</h3>
            <p className="text-gray-600">You have full control and can revoke access anytime with a single click.</p>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-6 justify-center items-center">
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <i className="fab fa-cc-visa text-3xl text-blue-600"></i>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <i className="fab fa-cc-mastercard text-3xl text-red-600"></i>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <i className="fab fa-paypal text-3xl text-blue-500"></i>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <i className="fas fa-lock text-3xl text-green-600"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}