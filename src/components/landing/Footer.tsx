export default function Footer() {
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
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">💰</span> Grocery Money
            </div>
            <p className="text-gray-400">
              Consistent weekly income through AI platforms. No work required.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-gray-400 hover:text-white transition text-left">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('earnings')} className="text-gray-400 hover:text-white transition text-left">
                  Earnings
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white transition text-left">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition text-left">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-3"></i>
                earngrocerymoney@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fab fa-whatsapp mr-3"></i>
                +254702322851
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Grocery Money. All rights reserved.</p>
          <p className="mt-2 text-sm">Earnings vary based on platform availability and performance. Not a guarantee of income.</p>
        </div>
      </div>
    </footer>
  )
}