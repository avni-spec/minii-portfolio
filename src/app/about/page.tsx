'use client'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import FloatingText from '../components/FloatingText'
import { useEffect, useState } from 'react'

export default function AboutPage() {
  const [sparkles, setSparkles] = useState<{ id: number; left: number; top: number; delay: number }[]>([])

  useEffect(() => {
    const gen = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setSparkles(gen)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s) => (
          <div key={s.id} className="absolute text-[#d4a574]/20 animate-float-slow"
            style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s`, fontSize: '14px' }}>
            ✦
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <FadeIn>
          <p className="text-[#d4a574] text-xs font-mono mb-4 tracking-widest animate-float-fast">— ABOUT</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">
            Hi, I'm <span className="text-gradient-rose"><FloatingText text="Minii" /></span>.
          </h1>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <FadeIn>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#d4a574]/20 group animate-float">
              <Image src="/images/minii/portrait.jpg" alt="Minii portrait" fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08060a] via-transparent to-transparent" />
              <div className="absolute inset-0 border-2 border-[#d4a574]/0 group-hover:border-[#d4a574]/40 rounded-3xl transition-all duration-700" />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed text-lg">
                A Jamshedpur-based content creator and model creating engaging short-form content for brands, businesses, and events.
              </p>
              <p className="text-white/60 leading-relaxed">
                My content blends natural on-camera presence, lifestyle storytelling, and promotional communication to make a place, product, or experience feel relatable and worth exploring.
              </p>
              <p className="text-white/60 leading-relaxed">
                I'm comfortable on camera and in promotional shoots, and I create Reels, Stories, and event/store-visit content with a strong focus on local discovery and audience-friendly storytelling.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mb-24">
            <p className="text-[#d4a574] text-xs font-mono mb-4 tracking-widest">— CREATOR PROFILE</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">
              What I <span className="text-gradient-rose"><FloatingText text="bring" delay={0.3} /></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Comfortable on camera and in promotional shoots',
                'Creates Reels, Stories and event/store-visit content',
                'Strong focus on local discovery and audience-friendly storytelling',
                'Experienced with restaurants, events, local brands, trade fairs, and campaigns',
                'Available for brand shoots, real-estate promotions, lifestyle campaigns, and event coverage',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-5 border border-white/5 rounded-2xl hover:border-[#d4a574]/40 hover:bg-[#d4a574]/5 transition-all duration-500 animate-float-slow"
                  style={{ animationDelay: `${i * 0.3}s` }}>
                  <span className="text-[#d4a574] mt-1">✦</span>
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-24">
            <p className="text-[#d4a574] text-xs font-mono mb-4 tracking-widest">— SOCIAL SNAPSHOT</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10">
              By the <span className="text-gradient-rose"><FloatingText text="numbers" delay={0.3} /></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { n: '500K+', l: 'Content Views' },
                { n: '1.5K+', l: 'Followers' },
                { n: '13+', l: 'Brand Promos' },
                { n: '77', l: 'Posts' },
              ].map((s, i) => (
                <div key={i} className="group text-center p-8 border border-white/5 rounded-2xl hover:border-[#d4a574]/40 hover:bg-[#d4a574]/5 transition-all duration-500 animate-float-slow"
                  style={{ animationDelay: `${i * 0.4}s` }}>
                  <div className="text-4xl md:text-5xl font-bold text-gradient-rose mb-2 group-hover:scale-110 transition-transform duration-300">{s.n}</div>
                  <div className="text-white/40 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#d4a574] via-[#b8935f] to-[#d4a574] hover:opacity-90 text-[#08060a] rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#d4a574]/20 animate-glow-pulse">
              Let's Collaborate <span>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}