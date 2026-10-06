'use client'
import { useEffect, useState } from 'react'

export default function Loader3D() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setHidden(true), 800)
          return 100
        }
        return p + Math.random() * 10
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#08060a] flex items-center justify-center transition-all duration-700 ${
        progress >= 100 ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-6">
        {/* Animated logo */}
        <div className="mb-8 relative inline-block">
          <span
            className="text-7xl md:text-9xl font-bold text-gradient-gold inline-block"
            style={{ animation: 'fadeInScale 1s ease-out both' }}
          >
            M
          </span>
          <span
            className="absolute inset-0 text-7xl md:text-9xl font-bold text-gradient-gold blur-2xl opacity-50"
            style={{ animation: 'fadeInScale 1s ease-out both' }}
          >
            M
          </span>
        </div>

        {/* Counter */}
        <div className="text-6xl md:text-8xl font-bold text-[#f0e6d2] mb-8 tabular-nums">
          {Math.min(Math.floor(progress), 100)}
          <span className="text-[#d4a574]">%</span>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-96 h-[2px] bg-white/5 relative overflow-hidden mx-auto">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#d4a574] via-[#e8c9a0] to-[#b8935f] transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <p className="text-[#d4a574] text-[10px] font-mono tracking-[0.5em] mt-8">
          LOADING EXPERIENCE
        </p>
      </div>
    </div>
  )
}