import Scene from './components/Scene'
import FinalMessage from './components/FinalMessage'
import FadeIn from './components/FadeIn'
import SplitText from './components/SplitText'
import CountUp from './components/CountUp'
import Magnetic from './components/Magnetic'
import ImageReveal from './components/ImageReveal'
import ParallaxSection from './components/ParallaxSection'
import ImageMarquee from './components/ImageMarquee'
import Link from 'next/link'
import { projects } from './data/projects'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0"><Scene /></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#08060a] pointer-events-none" />

        <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 pointer-events-none">
          <div className="max-w-4xl">
            <p className="text-[#d4a574] text-xs md:text-sm font-mono mb-6 tracking-[0.3em] flex items-center gap-3 animate-float-slow">
              <span className="w-8 h-px bg-gradient-to-r from-[#d4a574] to-[#b8935f]" />
              CONTENT CREATOR · MODEL · INFLUENCER
            </p>

            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] mb-8 tracking-tighter">
              <span className="block text-[#f0e6d2]">
                <SplitText text="Minii" delay={0.2} stagger={0.08} />
              </span>
              <span className="block shimmer">
                <SplitText text="Jamshedpur" delay={0.8} stagger={0.05} />
              </span>
            </h1>

            <p className="text-[#f0e6d2]/60 text-base md:text-xl max-w-xl mb-12 leading-relaxed" style={{ animation: 'fadeInUp 1.2s 1.6s both' }}>
              Creating engaging short-form content for brands, businesses, and events across Jamshedpur.
            </p>

            <div className="flex flex-wrap gap-4 pointer-events-auto" style={{ animation: 'fadeInUp 1.2s 2s both' }}>
              <Magnetic strength={0.3}>
                <a href="https://instagram.com/entertainment.minii" target="_blank" rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-[#d4a574] via-[#e8c9a0] to-[#b8935f] text-[#08060a] rounded-full font-semibold text-sm shadow-lg shadow-[#d4a574]/30 flex items-center gap-3">
                  Follow on Instagram
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link href="/work" className="px-8 py-4 border border-[#d4a574]/40 hover:border-[#d4a574] hover:bg-[#d4a574]/10 rounded-full font-medium transition-all duration-300 text-sm backdrop-blur-sm inline-block">
                  View My Work
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
          <span className="text-[#f0e6d2]/30 text-[10px] tracking-[0.3em] font-mono">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#d4a574]/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-8 border-y border-[#d4a574]/10 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {['LIFESTYLE', '·', 'FASHION', '·', 'TRAVEL', '·', 'BRAND PROMOTIONS', '·', 'REELS', '·', 'MODELING', '·', 'JAMSHEDPUR', '·', 'LIFESTYLE', '·', 'FASHION', '·', 'TRAVEL', '·', 'BRAND PROMOTIONS', '·', 'REELS', '·', 'MODELING', '·', 'JAMSHEDPUR'].map((item, i) => (
            <span key={i} className={`text-sm font-mono tracking-widest ${item === '·' ? 'text-[#d4a574]/50' : 'text-[#f0e6d2]/20'}`}>{item}</span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: 500, s: 'K+', l: 'Content Views' },
              { n: 1, s: '.5K+', l: 'Instagram Followers' },
              { n: 13, s: '+', l: 'Brand Promotions' },
              { n: 77, s: '', l: 'Posts' },
            ].map((item, i) => (
              <div key={i} className="group text-center p-6 premium-card rounded-2xl transition-all duration-500 animate-float-slow" style={{ animationDelay: `${i * 0.4}s` }}>
                <div className="text-3xl md:text-5xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp end={item.n} suffix={item.s} />
                </div>
                <div className="text-[#f0e6d2]/40 text-xs md:text-sm">{item.l}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* IMAGE MARQUEE */}
      <ImageMarquee />

      {/* ABOUT PREVIEW with ImageReveal */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <ParallaxSection speed={0.4}>
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#d4a574]/20 animate-float">
            <ImageReveal
              src="/images/minii/portrait.jpg"
              alt="Minii portrait"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08060a] via-transparent to-transparent pointer-events-none" />
          </div>
        </ParallaxSection>

        <FadeIn delay={200}>
          <div>
            <p className="text-[#d4a574] text-xs font-mono mb-4 tracking-widest animate-float-fast">— ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient-gold"><SplitText text="Minii" /></span>.
            </h2>
            <p className="text-[#f0e6d2]/60 leading-relaxed mb-6">
              A Jamshedpur-based content creator and model creating engaging short-form content for brands, businesses, and events.
            </p>
            <p className="text-[#f0e6d2]/60 leading-relaxed mb-8">
              My content blends natural on-camera presence, lifestyle storytelling, and promotional communication to make a place, product, or experience feel relatable.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#e8c9a0] transition text-sm group">
              Read Full Story
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#d4a574] text-xs font-mono mb-3 tracking-widest">— WHAT I CREATE</p>
            <h2 className="text-4xl md:text-6xl font-bold">
              My <span className="text-gradient-gold"><SplitText text="Services" /></span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: 'Brand Promotions', d: 'Reels · Stories · Product features · Paid campaigns' },
            { t: 'Restaurant & Café', d: 'Food experience · Ambience · Menu highlights · Visit reels' },
            { t: 'Event Promotions', d: 'Event coverage · Openings · Trade fairs · Crowd reels' },
            { t: 'Real Estate', d: 'Property walkthroughs · Lifestyle-led reels · Presenter content' },
            { t: 'Fashion & Lifestyle', d: 'Outfit reels · Lifestyle shoots · Brand integrations · UGC' },
            { t: 'Travel & Experiences', d: 'Stays · Local experiences · Destination storytelling' },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Magnetic strength={0.15}>
                <div className="group p-8 premium-card rounded-2xl transition-all duration-500 h-full relative overflow-hidden animate-float-slow" style={{ animationDelay: `${i * 0.3}s` }}>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4a574]/10 rounded-full blur-3xl group-hover:bg-[#d4a574]/20 transition" />
                  <div className="relative">
                    <div className="text-[#d4a574] text-xs font-mono mb-4">0{i + 1}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#e8c9a0] transition">{s.t}</h3>
                    <p className="text-[#f0e6d2]/50 text-sm leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </Magnetic>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FEATURED WORK with ImageReveal + CursorImage */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[#d4a574] text-xs font-mono mb-3 tracking-widest">— SELECTED WORK</p>
              <h2 className="text-4xl md:text-6xl font-bold">
                Recent <span className="text-gradient-gold"><SplitText text="Projects" /></span>
              </h2>
            </div>
            <Link href="/work" className="text-[#f0e6d2]/50 hover:text-[#d4a574] text-sm transition flex items-center gap-2 group">
              View All
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((p, i) => (
            <FadeIn key={p.slug} delay={i * 100}>
              <Link href={`/work/${p.slug}`}
                data-cursor-image={p.image}
                className="group block premium-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 animate-float-slow"
                style={{ animationDelay: `${i * 0.5}s` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageReveal src={p.image} alt={p.title} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08060a] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-[#d4a574] font-mono">{p.year}</div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-[#d4a574] text-xs font-mono">{p.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#e8c9a0] transition">{p.title}</h3>
                  <p className="text-[#f0e6d2]/50 text-sm">{p.description}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <FinalMessage />
    </div>
  )
}