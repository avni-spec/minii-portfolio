'use client'
import { useEffect, useRef, ReactNode } from 'react'

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = '',
}: {
  children: ReactNode
  speed?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId: number

    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height)
        const offset = (scrollProgress - 0.5) * speed * 100
        el.style.transform = `translateY(${offset}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}