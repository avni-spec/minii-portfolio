import Link from 'next/link'
import FloatingText from './components/FloatingText'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4a574]/5 rounded-full blur-[150px] pointer-events-none" />

      <p className="text-[#d4a574] text-xs font-mono tracking-[0.5em] mb-6 animate-float-fast relative z-10">
        — ERROR 404
      </p>

      <h1 className="text-[10rem] md:text-[18rem] font-bold leading-none text-gradient-gold mb-4 animate-float relative z-10">
        <FloatingText text="404" />
      </h1>

      <p className="text-[#f0e6d2]/50 text-lg mb-10 max-w-md relative z-10">
        This page drifted into another dimension. Let's get you back.
      </p>

      <div className="flex flex-wrap gap-4 justify-center relative z-10">
        <Link
          href="/"
          className="px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8935f] text-[#08060a] rounded-full font-semibold transition animate-glow-pulse"
        >
          Return Home →
        </Link>
        <Link
          href="/work"
          className="px-8 py-4 border border-[#d4a574]/40 hover:border-[#d4a574] hover:bg-[#d4a574]/10 rounded-full font-medium transition text-[#f0e6d2]"
        >
          View Work
        </Link>
      </div>
    </div>
  )
}