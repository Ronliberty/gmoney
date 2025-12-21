'use client'

import { Dispatch, SetStateAction } from 'react'

interface NavbarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="navbar-bg shadow-lg fixed top-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl md:text-3xl font-bold text-white flex items-center">
              <span className="mr-2">💰</span> Grocery Money
            </a>
            <span className="ml-3 hidden sm:inline-block text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Weekly Income System
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/90 hover:text-white font-medium transition hover:scale-105">
              How It Works
            </button>
            <button onClick={() => scrollToSection('earnings')} className="text-white/90 hover:text-white font-medium transition hover:scale-105">
              Earnings
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white/90 hover:text-white font-medium transition hover:scale-105">
              Success Stories
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-white/90 hover:text-white font-medium transition hover:scale-105">
              FAQ
            </button>
            <button onClick={() => scrollToSection('cta')} className="bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent focus:outline-none transition-transform active:scale-95"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden mobile-menu navbar-bg border-t border-white/20 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <button onClick={() => scrollToSection('how-it-works')} className="block text-white/90 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition w-full text-left">
            How It Works
          </button>
          <button onClick={() => scrollToSection('earnings')} className="block text-white/90 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition w-full text-left">
            Earnings
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="block text-white/90 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition w-full text-left">
            Success Stories
          </button>
          <button onClick={() => scrollToSection('faq')} className="block text-white/90 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition w-full text-left">
            FAQ
          </button>
          <button onClick={() => scrollToSection('cta')} className="block bg-white text-primary font-bold text-center py-3 px-6 rounded-full hover:bg-accent transition active:scale-95 mt-4 w-full">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}