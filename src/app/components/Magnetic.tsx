'use client'
import { useRef, useState, ReactNode } from 'react'

export default function Magnetic({
  children,
  className = '',
  strength = 0.4,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * strength, y: y * strength })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      <div
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        {children}
      </div>
    </div>
  )
}