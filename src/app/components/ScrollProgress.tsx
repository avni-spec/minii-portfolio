'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress((scrollTop / docHeight) * 100)
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999]">
      <div className="h-full bg-gradient-to-r from-[#d4a574] via-[#b8935f] to-[#d4a574] transition-all duration-100"
        style={{ width: `${progress}%` }} />
    </div>
  )
}