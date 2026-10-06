'use client'
import { useEffect, useRef } from 'react'

export default function MouseParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let mouseX = 0, mouseY = 0
    let currentX = 0, currentY = 0

    const handleMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05
      el.style.transform = `translate(${currentX * 8}px, ${currentY * 8}px)`
      requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div ref={ref} style={{ transition: 'transform 0.1s ease-out' }}>
      {children}
    </div>
  )
}