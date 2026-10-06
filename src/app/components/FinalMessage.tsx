'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import FloatingText from './FloatingText'

export default function FinalMessage() {
  const [love, setLove] = useState(false)
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 14 + Math.random() * 20,
    }))
    setHearts(generated)
  }, [])

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((h) => (
          <div
            key={h.id}
            className="absolute text-[#d4a574]/15 animate-float-slow"
            style={{
              left: `${h.left}%`,
              top: `${(h.id * 17) % 90}%`,
              fontSize: `${h.size}px`,
              animationDelay: `${h.delay}s`,
              animationDuration: `${6 + (h.id % 4)}s`,
            }}
          >
            {h.id % 3 === 0 ? '♥' : h.id % 3 === 1 ? '✦' : '❋'}
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a574]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <span className="inline-block text-6xl heart-beat">💜</span>
            <div className="absolute inset-0 blur-2xl text-6xl heart-beat opacity-60">💜</div>
          </div>
        </div>

        <p className="text-[#d4a574] text-xs font-mono mb-6 tracking-[0.4em] flex items-center justify-center gap-3 animate-float-slow">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#d4a574]" />
          WITH LOVE
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#d4a574]" />
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
          <span className="block text-white/90">
            <FloatingText text="Thank you for" />
          </span>
          <span className="block shimmer">
            <FloatingText text="being here." delay={0.8} />
          </span>
        </h2>

        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-float">
          Every view, every like, every message — it means the world to me.
          <br />
          Let's create something beautiful together. ✨
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button
            onClick={() => setLove(!love)}
            className={`group px-8 py-4 rounded-full font-medium transition-all duration-500 flex items-center gap-3 ${
              love
                ? 'bg-gradient-to-r from-[#d4a574] to-[#b8935f] text-[#08060a] scale-110 shadow-lg shadow-[#d4a574]/40'
                : 'border border-[#d4a574]/40 hover:border-[#d4a574] text-white/80 hover:text-white hover:bg-[#d4a574]/10'
            }`}
          >
            <span className={`text-xl transition-transform duration-300 ${love ? 'heart-beat' : 'group-hover:scale-125'}`}>
              {love ? '💖' : '🤍'}
            </span>
            {love ? 'Love Sent!' : 'Send Love'}
          </button>

          <Link
            href="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-[#d4a574] via-[#b8935f] to-[#d4a574] hover:opacity-90 text-[#08060a] rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#d4a574]/20 animate-glow-pulse"
          >
            Let's Collaborate
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#d4a574]/40" />
          <span className="text-[#d4a574]/40 text-xs">✦</span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#d4a574]/40" />
        </div>

        <p className="text-white/30 text-sm font-mono tracking-[0.3em] animate-float-slow">
          MINII · JAMSHEDPUR · 2026
        </p>
      </div>
    </section>
  )
}