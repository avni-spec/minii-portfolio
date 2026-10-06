'use client'
import { useState, useEffect } from 'react'
import FadeIn from '../components/FadeIn'
import FloatingText from '../components/FloatingText'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [sparkles, setSparkles] = useState<{ id: number; left: number; top: number; delay: number }[]>([])

  useEffect(() => {
    const gen = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setSparkles(gen)
  }, [])

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s) => (
          <div key={s.id} className="absolute text-[#d4a574]/15 animate-float-slow"
            style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s`, fontSize: '12px' }}>
            ✦
          </div>
        ))}
      </div>

      <div className="relative">
        <FadeIn>
          <p className="text-[#d4a574] text-xs font-mono mb-4 tracking-widest animate-float-fast">— CONTACT</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Let's <span className="text-gradient-rose"><FloatingText text="Collaborate" /></span>
          </h1>
          <p className="text-white/50 text-lg mb-16 max-w-2xl">
            Open to working with brands, real estate, restaurants, cafés, events, retail stores, hotels, and lifestyle businesses.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { l: 'Email', v: 'minicollabs.26@gmail.com', href: 'mailto:minicollabs.26@gmail.com' },
            { l: 'Instagram', v: '@entertainment.minii', href: 'https://instagram.com/entertainment.minii' },
            { l: 'Location', v: 'Jamshedpur, Jharkhand', href: null },
            { l: 'Collaborations', v: 'Brand · Event · Real Estate · Lifestyle', href: null },
          ].map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="p-6 border border-white/5 rounded-2xl hover:border-[#d4a574]/40 hover:bg-[#d4a574]/5 transition-all duration-500 animate-float-slow"
                style={{ animationDelay: `${i * 0.3}s` }}>
                <p className="text-[#d4a574] text-xs uppercase tracking-widest mb-2 font-mono">{c.l}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-[#e8c9a0] transition break-all">
                    {c.v}
                  </a>
                ) : (
                  <p className="text-lg text-white break-all">{c.v}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          {sent ? (
            <div className="border border-[#d4a574]/30 bg-[#d4a574]/5 rounded-3xl p-12 text-center animate-float">
              <div className="text-6xl mb-4 heart-beat inline-block">💜</div>
              <h2 className="text-3xl font-bold mb-3 text-gradient-rose">Message Sent!</h2>
              <p className="text-white/60">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input required placeholder="Your Name"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#d4a574] focus:bg-[#d4a574]/5 outline-none transition text-white placeholder:text-white/30" />
                <input required type="email" placeholder="Your Email"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#d4a574] focus:bg-[#d4a574]/5 outline-none transition text-white placeholder:text-white/30" />
              </div>
              <input required placeholder="Subject / Brand Name"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#d4a574] focus:bg-[#d4a574]/5 outline-none transition text-white placeholder:text-white/30" />
              <textarea required rows={6} placeholder="Tell me about your project..."
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#d4a574] focus:bg-[#d4a574]/5 outline-none transition resize-none text-white placeholder:text-white/30" />
              <button type="submit"
                className="px-10 py-4 bg-gradient-to-r from-[#d4a574] via-[#b8935f] to-[#d4a574] hover:opacity-90 text-[#08060a] rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#d4a574]/20 animate-glow-pulse">
                Send Message →
              </button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-20 bg-gradient-to-br from-[#d4a574]/10 to-[#b8935f]/10 border border-[#d4a574]/20 rounded-3xl p-10 md:p-16 text-center animate-float-slow">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Thank you for considering <span className="text-gradient-rose"><FloatingText text="Minii" delay={0.3} /></span> for your next campaign.
            </h2>
            <p className="text-[#d4a574] text-lg mb-8 heart-beat inline-block">❤️</p>
            <div>
              <a href="mailto:minicollabs.26@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#d4a574] to-[#b8935f] text-[#08060a] rounded-full font-semibold transition hover:opacity-90 shadow-lg shadow-[#d4a574]/20">
                Send an Email <span>→</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}