'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'backdrop-blur-xl bg-[#08060a]/80 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white group flex items-center gap-1">
          Minii
          <span className="text-[#d4a574] group-hover:scale-125 transition-transform inline-block">.</span>
        </Link>

        <div className="hidden md:flex gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`px-4 py-2 text-sm font-medium transition-all rounded-full relative ${
                pathname === l.href ? 'text-white' : 'text-white/50 hover:text-white'
              }`}>
              {l.label}
              {pathname === l.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d4a574] rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <a href="https://instagram.com/entertainment.minii" target="_blank" rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 bg-gradient-to-r from-[#d4a574] to-[#b8935f] hover:opacity-90 text-[#08060a] rounded-full text-sm font-semibold transition-all shadow-lg shadow-[#d4a574]/20">
          Collaborate
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl" aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-2 bg-[#08060a]/95 backdrop-blur-xl border-t border-white/10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`py-3 border-b border-white/5 text-sm ${
              pathname === l.href ? 'text-[#d4a574]' : 'text-white/70'
            }`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}