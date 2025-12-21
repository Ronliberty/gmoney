'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    initial: 'S',
    name: 'Sarah M.',
    location: 'United Kingdom • 4 months',
    rating: 5,
    content: '"Consistent $200-300 every week like clockwork. Perfect for covering groceries and utilities."',
    tag: { text: '32 weeks active', icon: 'fas fa-chart-line', color: 'bg-primary/10 text-primary' }
  },
  {
    id: 2,
    initial: 'J',
    name: 'John D.',
    location: 'United States • 6 months',
    rating: 4.5,
    content: '"The team is professional and communication is excellent. Earned over $4,000 so far."',
    tag: { text: 'Top performer', icon: 'fas fa-trophy', color: 'bg-green-100 text-green-800' }
  },
  {
    id: 3,
    initial: 'M',
    name: 'Maria L.',
    location: 'Canada • 2 months',
    rating: 5,
    content: '"As a student, this extra income has been life-changing. Setup was quick and payments are reliable."',
    tag: { text: 'Fast starter', icon: 'fas fa-bolt', color: 'bg-blue-100 text-blue-800' }
  }
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials')
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

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>)
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>)
    }

    return stars
  }

  return (
    <section id="testimonials" className={`py-16 px-4 sm:py-20 md:py-28 lg:py-32 bg-white ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-xl card-hover">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center text-xl font-bold text-primary">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">
                {testimonial.content}
              </p>
              <div className="text-right">
                <span className={`inline-flex items-center ${testimonial.tag.color} px-4 py-1 rounded-full text-sm font-medium`}>
                  <i className={`${testimonial.tag.icon} mr-1`}></i>
                  {testimonial.tag.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">98%</div>
              <p className="text-sm opacity-90">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">24h</div>
              <p className="text-sm opacity-90">Avg. Setup Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">248+</div>
              <p className="text-sm opacity-90">Active Partners</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">99.2%</div>
              <p className="text-sm opacity-90">On-Time Payouts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}