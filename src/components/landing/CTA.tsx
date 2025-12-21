'use client'

interface CTAProps {
  onOpenModal: () => void
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section id="cta" className="py-20 px-4 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 px-4">
          Ready to Start Earning Grocery Money?
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 mb-10 md:mb-14 max-w-3xl mx-auto px-6">
          We onboard a limited number of partners at a time for personalized support.<br className="hidden sm:block" />
          <strong>Reach out now</strong> — spots fill quickly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-green-500 text-white font-bold text-lg sm:text-xl md:text-2xl py-5 px-8 sm:px-10 rounded-xl 
                     hover:bg-green-600 shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 min-h-[60px] w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <i className="fab fa-whatsapp text-2xl sm:text-3xl mr-3 sm:mr-4"></i>
            <span className="text-center">WhatsApp (Fast)</span>
          </a>

          {/* Book Meeting Button */}
          <button 
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center bg-primary text-white font-bold text-lg sm:text-xl md:text-2xl py-5 px-8 sm:px-10 rounded-xl 
                     hover:bg-secondary shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 min-h-[60px] w-full sm:w-auto"
          >
            <i className="fas fa-calendar-check text-2xl sm:text-3xl mr-3 sm:mr-4 group-hover:animate-pulse"></i>
            <span className="text-center">Book Free Call</span>
          </button>

          {/* Email Button */}
          <a 
            href="mailto:earngrocerymoney@gmail.com" 
            className="group inline-flex items-center justify-center bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-bold text-lg sm:text-xl md:text-2xl py-5 px-8 sm:px-10 rounded-xl 
                     hover:bg-white hover:text-primary hover:border-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 min-h-[60px] w-full sm:w-auto"
          >
            <i className="fas fa-envelope text-2xl sm:text-3xl mr-3 sm:mr-4 group-hover:animate-bounce"></i>
            <span className="text-center">Email Us</span>
          </a>
        </div>

        {/* Reassurance */}
        <div className="mt-12 md:mt-16 bg-white/15 backdrop-blur-sm px-8 py-6 rounded-3xl inline-block">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            <i className="fas fa-shield-alt mr-4"></i>
            No fees • No pressure • Just clear answers
          </p>
        </div>
      </div>
    </section>
  )
}