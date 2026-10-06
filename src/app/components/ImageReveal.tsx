'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ImageReveal({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Image */}
      <div
        className="w-full h-full"
        style={{
          clipPath: visible
            ? 'inset(0% 0% 0% 0%)'
            : 'inset(0% 100% 0% 0%)',
          transition: 'clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>

      {/* Dark overlay that fades */}
      <div
        className="absolute inset-0 bg-[#08060a]"
        style={{
          opacity: visible ? 0 : 1,
          transition: 'opacity 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}