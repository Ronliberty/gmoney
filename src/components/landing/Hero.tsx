'use client'

export default function Hero() {
  const scrollToCTA = () => {
    const element = document.getElementById('cta')
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="bg-primary text-white pt-32 pb-20 px-4 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center px-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 md:mb-8">
            <span className="text-sm md:text-base font-medium">🚀 Start earning in 24 hours</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 md:mb-8">
            Earn Weekly Income
            <br className="hidden md:block" />
            <span className="gradient-text block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 md:mt-4">
              Through AI Platforms
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-relaxed opacity-95">
              Let our experienced team handle the work while you receive <span className="font-bold text-accent">30% revenue share</span> — paid directly to you every week.
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-sm px-4 py-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold stat-number">248+</div>
              <div className="text-sm md:text-base opacity-90 mt-2">Active Partners</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-4 py-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold stat-number">$182k+</div>
              <div className="text-sm md:text-base opacity-90 mt-2">Total Paid Out</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-4 py-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold stat-number">98%</div>
              <div className="text-sm md:text-base opacity-90 mt-2">Satisfaction Rate</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm px-4 py-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold stat-number">24h</div>
              <div className="text-sm md:text-base opacity-90 mt-2">Avg. Setup Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4">
            <button onClick={scrollToCTA} className="group relative inline-flex items-center bg-white text-primary font-bold text-lg md:text-xl py-4 px-8 md:py-5 md:px-12 rounded-2xl 
                                      hover:bg-accent hover:text-secondary shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <i className="fas fa-rocket mr-3 group-hover:animate-pulse"></i>
              Start Earning Now
            </button>
            <button onClick={scrollToCTA} className="inline-flex items-center border-2 border-white/50 text-white font-bold text-lg md:text-xl py-4 px-8 md:py-5 md:px-12 rounded-2xl 
                                                  hover:bg-white/10 backdrop-blur-sm hover:border-white transition-all duration-300 group">
              <i className="fas fa-play-circle mr-3 group-hover:animate-pulse"></i>
              Watch 2-Min Demo
            </button>
          </div>
          
          <div className="mt-8 text-sm text-white/70">
            <i className="fas fa-lock mr-2"></i> No credit card required • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  )
}