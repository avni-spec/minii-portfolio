'use client'
import { useEffect, useRef, useState } from 'react'

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay)
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`}>
      {children}
    </div>
  )
}