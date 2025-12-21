'use client'

import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import TrustBadges from './TrustBadges'
import WhatIs from './WhatIs'
import HowItWorks from './HowItWorks'
import EarningsCalculator from './EarningsCalculator'
import Security from './Security'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import CTA from './CTA'
import Footer from './Footer'
import BookingModal from './BookingModal'
import BackToTop from './BackToTop'

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [isModalOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Hero />
      <TrustBadges />
      <WhatIs />
      <HowItWorks />
      <EarningsCalculator />
      <Security />
      <Testimonials />
      <FAQ />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <BackToTop />
    </>
  )
}