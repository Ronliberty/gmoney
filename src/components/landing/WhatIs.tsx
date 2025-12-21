'use client'

import { useState } from 'react'

export default function WhatIs() {
  const [isVisible, setIsVisible] = useState(false)

  // This would typically use Intersection Observer
  // For simplicity, we'll use a simple scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const element = document.getElementById('what-is')
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    })
  }

  return (
    <section id="what-is" className={`py-16 px-4 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-light to-white ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            What Is Grocery Money?
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl card-hover">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-4 rounded-2xl mr-4">
                  <i className="fas fa-shopping-cart text-3xl text-primary"></i>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Cover Your Essentials</h3>
                  <p className="text-lg text-gray-600">
                    Designed to reliably cover <span className="font-bold text-primary">everyday expenses</span> — groceries, bills, subscriptions — week after week.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <i className="fas fa-clock text-3xl text-primary mb-4"></i>
                <h4 className="text-xl font-bold text-gray-800 mb-2">100% Passive</h4>
                <p className="text-gray-600">No work required from you after setup</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <i className="fas fa-calendar-check text-3xl text-primary mb-4"></i>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Weekly Payouts</h4>
                <p className="text-gray-600">Consistent income every Wednesday</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sat=-100&brightness=105" 
                alt="Weekly payout"
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-5xl font-bold text-primary">$150-400</div>
                  <p className="text-gray-700 font-semibold mt-2">Average weekly earnings</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}