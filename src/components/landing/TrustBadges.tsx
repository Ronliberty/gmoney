export default function TrustBadges() {
  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm md:text-base">Trusted by partners worldwide</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center">
          <div className="text-center p-4 opacity-70 hover:opacity-100 transition-opacity">
            <i className="fab fa-paypal text-4xl md:text-5xl text-blue-500"></i>
          </div>
          <div className="text-center p-4 opacity-70 hover:opacity-100 transition-opacity">
            <i className="fab fa-google text-4xl md:text-5xl text-red-500"></i>
          </div>
          <div className="text-center p-4 opacity-70 hover:opacity-100 transition-opacity">
            <i className="fab fa-amazon text-4xl md:text-5xl text-yellow-600"></i>
          </div>
          <div className="text-center p-4 opacity-70 hover:opacity-100 transition-opacity">
            <i className="fab fa-microsoft text-4xl md:text-5xl text-blue-600"></i>
          </div>
          <div className="text-center p-4 opacity-70 hover:opacity-100 transition-opacity">
            <i className="fab fa-whatsapp text-4xl md:text-5xl text-green-500"></i>
          </div>
          <div className="text-center p-4 opacity-70 hover:opacity-100 transition-opacity">
            <i className="fab fa-slack text-4xl md:text-5xl text-purple-500"></i>
          </div>
        </div>
      </div>
    </div>
  )
}