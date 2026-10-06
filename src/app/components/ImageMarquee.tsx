'use client'
import Image from 'next/image'

const images = [
  '/images/minii/portrait.jpg',
  '/images/minii/hero.jpg',
  '/images/minii/staircase.jpg',
  '/images/minii/dress.jpg',
]

export default function ImageMarquee() {
  return (
    <section className="py-16 overflow-hidden border-y border-[#d4a574]/10">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...images, ...images, ...images].map((img, i) => (
          <div
            key={i}
            className="relative w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0 border border-[#d4a574]/20 group"
          >
            <Image
              src={img}
              alt={`Gallery ${i}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="256px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-[#d4a574] text-xs font-mono tracking-widest">
              {String(i + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}