'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setHidden(true), 700)
          return 100
        }
        return p + Math.random() * 12
      })
    }, 90)
    return () => clearInterval(interval)
  }, [])

  if (hidden) return null

  const letters = 'MINII'.split('')

  return (
    <div className={`fixed inset-0 z-[10000] bg-[#08060a] flex flex-col items-center justify-center transition-all duration-700 ${
      progress >= 100 ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
    }`}>
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4a574]/5 rounded-full blur-[120px]" />

      <div className="relative text-center">
        {/* Letters appear one by one */}
        <div className="flex justify-center gap-1 mb-8">
          {letters.map((char, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-bold text-gradient-rose"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${i * 0.12}s both`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <p
          className="text-white/30 text-[10px] font-mono tracking-[0.5em] mb-8"
          style={{ animation: 'fadeInUp 1s 0.8s both' }}
        >
          LOADING PORTFOLIO
        </p>

        {/* Percentage */}
        <div
          className="text-4xl md:text-6xl font-bold text-white/90 mb-6 tabular-nums"
          style={{ animation: 'fadeInUp 1s 1s both' }}
        >
          {Math.min(Math.floor(progress), 100)}
          <span className="text-[#d4a574]">%</span>
        </div>

        {/* Progress bar */}
        <div
          className="w-64 md:w-80 h-[2px] bg-white/5 relative overflow-hidden mx-auto"
          style={{ animation: 'fadeInUp 1s 1.2s both' }}
        >
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#d4a574] via-[#e8c9a0] to-[#b8935f] transition-all duration-200"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  )
}