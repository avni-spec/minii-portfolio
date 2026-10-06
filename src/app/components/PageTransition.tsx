'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    setTransitioning(true)
    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      setTransitioning(false)
    }, 400)
    return () => clearTimeout(timeout)
  }, [pathname, children])

  return (
    <>
      <div
        className={`fixed inset-0 z-[9998] pointer-events-none transition-all duration-500 ${
          transitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, #08060a 0%, #d4a574 50%, #08060a 100%)',
          transform: transitioning ? 'translateY(0)' : 'translateY(-100%)',
        }}
      />
      <div className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
        {displayChildren}
      </div>
    </>
  )
}