'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setHidden(false)
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      requestAnimationFrame(animate)
    }
    animate()

    const handleOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-hover]')) setHovered(true)
    }
    const handleOut = () => setHovered(false)
    const handleDown = () => setClicked(true)
    const handleUp = () => setClicked(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mouseout', handleOut)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mouseout', handleOut)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-[#e8c9a0] pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-opacity duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] transition-all duration-300 ease-out hidden md:block ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${
          clicked
            ? 'w-6 h-6 bg-[#d4a574]/30 border-[#d4a574]'
            : hovered
            ? 'w-16 h-16 bg-[#d4a574]/10 border-[#d4a574]'
            : 'w-8 h-8 border-[#d4a574]/60'
        }`}
      >
        {/* Center dot for hover state */}
        {hovered && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#d4a574]" />
        )}
      </div>
    </>
  )
}