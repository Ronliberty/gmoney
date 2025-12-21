'use client'

import { useState, useEffect } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
      // Reset form
      e.currentTarget.reset()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl shadow-3xl w-full max-w-lg mx-auto overflow-hidden animate-slideIn">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 md:p-8 text-center relative">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Book Your Free Call</h3>
          <p className="mt-2 text-lg opacity-90">15 minutes • No obligation • We'll match your timezone</p>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-accent text-2xl transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-4xl text-green-600"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmed!</h4>
              <p className="text-gray-600">We'll send you a confirmation email with the call details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none transition text-lg"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none transition text-lg"
                  placeholder="john@example.com"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsapp" className="block text-lg font-semibold text-gray-800 mb-2">
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none transition text-lg"
                  placeholder="+1 (555) 123-4567"
                />
                <p className="text-sm text-gray-600 mt-2">We'll send you a confirmation via WhatsApp</p>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                  Preferred Day & Time *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <select
                    name="day"
                    required
                    className="px-4 py-4 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none"
                  >
                    <option value="">Select Day</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                  <select
                    name="time-slot"
                    required
                    className="px-4 py-4 rounded-xl border-2 border-gray-300 focus:border-primary focus:outline-none"
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (1PM-4PM)</option>
                    <option value="evening">Evening (5PM-8PM)</option>
                  </select>
                </div>
                <p className="text-sm text-gray-600 mt-2">We'll confirm the exact time via email</p>
              </div>

              {/* Timezone Auto-Detect */}
              <div className="bg-primary/5 rounded-xl p-4 text-center">
                <p className="text-gray-700 font-medium">
                  <i className="fas fa-globe mr-2"></i>
                  We automatically detect your timezone for convenience
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-secondary shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Booking...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-calendar-check mr-2"></i>
                      Book My Call
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-gray-800 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}