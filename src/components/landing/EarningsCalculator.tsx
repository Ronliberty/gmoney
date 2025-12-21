'use client'

import { useState, useEffect } from 'react'

export default function EarningsCalculator() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedVolume, setSelectedVolume] = useState<'low' | 'medium' | 'high'>('medium')
  const [platformMultiplier, setPlatformMultiplier] = useState(3)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('earnings')
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

  const volumeData = {
    low: { weekly: 150, total: 500 },
    medium: { weekly: 225, total: 750 },
    high: { weekly: 300, total: 1000 }
  }

  const calculateEarnings = () => {
    const volume = volumeData[selectedVolume]
    const multiplier = platformMultiplier / 3
    
    const totalEarnings = Math.round(volume.total * multiplier)
    const weeklyAmount = Math.round(volume.weekly * multiplier)
    const teamShare = Math.round(totalEarnings * 0.4)
    const operationsShare = Math.round(totalEarnings * 0.3)
    const yourPayout = Math.round(totalEarnings * 0.3)

    return {
      weeklyAmount,
      totalEarnings,
      teamShare,
      operationsShare,
      yourPayout
    }
  }

  const earnings = calculateEarnings()

  return (
    <section id="earnings" className={`py-16 px-4 sm:py-20 md:py-28 lg:py-32 bg-white ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Calculate Your Earnings
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Estimate your potential weekly income
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Earnings Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Task Volume</label>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setSelectedVolume('low')}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 transition text-center active:scale-95 ${
                        selectedVolume === 'low' 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-gray-300 hover:border-primary'
                      }`}
                    >
                      Low
                    </button>
                    <button 
                      onClick={() => setSelectedVolume('medium')}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 transition text-center active:scale-95 ${
                        selectedVolume === 'medium' 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-gray-300 hover:border-primary'
                      }`}
                    >
                      Medium
                    </button>
                    <button 
                      onClick={() => setSelectedVolume('high')}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 transition text-center active:scale-95 ${
                        selectedVolume === 'high' 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-gray-300 hover:border-primary'
                      }`}
                    >
                      High
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Platform Activity</label>
                  <div className="relative pt-1">
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={platformMultiplier}
                      onChange={(e) => setPlatformMultiplier(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>1 Platform</span>
                      <span>3 Platforms</span>
                      <span>5 Platforms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Estimated Weekly Earnings</h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">${earnings.weeklyAmount}</div>
                  <p className="text-gray-600">Your 30% share</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Platform earnings:</span>
                    <span className="font-semibold">${earnings.totalEarnings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Team share (40%):</span>
                    <span className="font-semibold">${earnings.teamShare}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Operations (30%):</span>
                    <span className="font-semibold">${earnings.operationsShare}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Your payout:</span>
                      <span className="text-primary">${earnings.yourPayout}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              *Estimates based on average performance. Actual earnings may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}