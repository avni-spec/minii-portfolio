import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '../components/FadeIn'
import FloatingText from '../components/FloatingText'
import { projects } from '../data/projects'

export default function WorkPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <FadeIn>
        <p className="text-[#d4a574] text-xs font-mono mb-4 tracking-widest animate-float-fast">— PORTFOLIO</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          My <span className="text-gradient-rose"><FloatingText text="Work" /></span>
        </h1>
        <p className="text-white/50 mb-16 max-w-2xl">
          A showcase of promotional content and brand collaborations across Jamshedpur.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 100}>
            <Link href={`/work/${project.slug}`}
              className="group block border border-white/5 rounded-3xl overflow-hidden hover:border-[#d4a574]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4a574]/10 animate-float-slow"
              style={{ animationDelay: `${i * 0.4}s` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={project.image} alt={project.title} fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060a] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-[#d4a574] font-mono">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-[#d4a574] text-xs font-mono">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#e8c9a0] transition">{project.title}</h3>
                <p className="text-white/50 text-sm">{project.description}</p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={300}>
        <div className="text-center mt-24">
          <p className="text-white/50 mb-6">Want to work together?</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#d4a574] via-[#b8935f] to-[#d4a574] hover:opacity-90 text-[#08060a] rounded-full font-semibold transition-all duration-300 shadow-lg shadow-[#d4a574]/20 animate-glow-pulse">
            Get in Touch <span>→</span>
          </Link>
        </div>
      </FadeIn>
    </div>
  )
}