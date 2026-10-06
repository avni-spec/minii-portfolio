'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function CursorImage() {
  const ref = useRef<HTMLDivElement>(null)
  const [image, setImage] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let mouseX = 0, mouseY = 0
    let currentX = 0, currentY = 0

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const card = target.closest('[data-cursor-image]')
      if (card) {
        const img = card.getAttribute('data-cursor-image')
        if (img) {
          setImage(img)
          setVisible(true)
        }
      }
    }

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const card = target.closest('[data-cursor-image]')
      if (card) {
        setVisible(false)
      }
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15
      el.style.transform = `translate(${currentX - 100}px, ${currentY - 100}px)`
      requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mouseout', handleOut)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mouseout', handleOut)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-[200px] h-[200px] rounded-full overflow-hidden pointer-events-none z-[9996] hidden md:block transition-all duration-500 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
    >
      {image && (
        <Image
          src={image}
          alt="Cursor preview"
          fill
          className="object-cover"
          sizes="200px"
        />
      )}
    </div>
  )
}