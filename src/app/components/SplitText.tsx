'use client'
import { useEffect, useRef, useState } from 'react'

export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  animation = 'fadeInUp',
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight'
}) {
  const ref = useRef<HTMLSpanElement>(null)
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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = text.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            const totalIndex = wordIndex * 5 + charIndex
            return (
              <span
                key={charIndex}
                className="inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0) translateX(0)' :
                    animation === 'slideInLeft' ? 'translateX(-40px)' :
                    animation === 'slideInRight' ? 'translateX(40px)' :
                    'translateY(40px)',
                  transition: `all 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${delay + totalIndex * stagger}s`,
                  filter: visible ? 'blur(0)' : 'blur(8px)',
                }}
              >
                {char}
              </span>
            )
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}