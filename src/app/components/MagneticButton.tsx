'use client'
import { useRef, useState } from 'react'

export default function MagneticButton({
  children,
  href,
  className = '',
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.3, y: y * 0.3 })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  if (href) {
    return (
      <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="inline-block">
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={className}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {children}
        </a>
      </div>
    )
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="inline-block">
      <button
        className={className}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {children}
      </button>
    </div>
  )
}