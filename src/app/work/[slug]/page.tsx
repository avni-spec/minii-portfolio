import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import FloatingText from '../../components/FloatingText'
import { projects } from '../../data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <div className="relative max-w-5xl mx-auto px-6 py-20 overflow-hidden">
      <Link href="/work" className="text-white/50 hover:text-[#d4a574] text-sm mb-8 inline-block transition group">
        <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to Work
      </Link>

      <span className="text-[#d4a574] text-xs font-mono animate-float-fast inline-block">{project.category}</span>

      <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
        <FloatingText text={project.title} />
      </h1>

      <p className="text-white/60 text-lg mb-10 animate-float-slow">{project.description}</p>

      <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#d4a574]/20 mb-10 animate-float-slow">
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 border-2 border-transparent hover:border-[#d4a574]/30 rounded-2xl transition-all duration-700" />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-gradient-rose">About this project</h2>
          <p className="text-white/70 leading-relaxed">{project.longDescription}</p>
        </div>

        <div>
          <h3 className="text-xs text-white/40 uppercase tracking-widest mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 bg-[#d4a574]/5 border border-[#d4a574]/20 rounded-full text-xs text-[#e8c9a0] animate-float-fast">
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-xs text-white/40 uppercase tracking-widest mb-3">Year</h3>
          <p className="text-white mb-8">{project.year}</p>

          <a href="https://instagram.com/entertainment.minii" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#d4a574] to-[#b8935f] text-[#08060a] rounded-full text-sm font-semibold hover:opacity-90 transition animate-glow-pulse">
            View on Instagram →
          </a>
        </div>
      </div>
    </div>
  )
}