'use client'
import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = []

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const handleMove = (e: MouseEvent) => {
      // Spawn 2 particles per move
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 1,
          size: Math.random() * 2.5 + 1,
        })
      }
    }
    window.addEventListener('mousemove', handleMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.97
        p.vy *= 0.97
        p.life -= 0.02
        p.size *= 0.98

        if (p.life <= 0 || p.size < 0.2) {
          particles.splice(i, 1)
          continue
        }

        // Gold particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `rgba(232, 201, 160, ${p.life})`)
        gradient.addColorStop(0.5, `rgba(212, 165, 116, ${p.life * 0.5})`)
        gradient.addColorStop(1, 'rgba(212, 165, 116, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9997] hidden md:block"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}