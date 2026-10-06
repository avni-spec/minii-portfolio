import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08060a] py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Minii<span className="text-[#d4a574]">.</span>
            </h3>
            <p className="text-white/40 text-sm">
              Content Creator · Model · Influencer<br />Based in Jamshedpur
            </p>
          </div>

          <div>
            <h4 className="text-xs text-white/40 uppercase tracking-widest mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/70 hover:text-[#d4a574] text-sm transition">Home</Link>
              <Link href="/about" className="text-white/70 hover:text-[#d4a574] text-sm transition">About</Link>
              <Link href="/work" className="text-white/70 hover:text-[#d4a574] text-sm transition">Work</Link>
              <Link href="/contact" className="text-white/70 hover:text-[#d4a574] text-sm transition">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-white/40 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://instagram.com/entertainment.minii" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#d4a574] text-sm transition">
                Instagram → @entertainment.minii
              </a>
              <a href="mailto:minicollabs.26@gmail.com" className="text-white/70 hover:text-[#d4a574] text-sm transition">
                minicollabs.26@gmail.com
              </a>
              <p className="text-white/40 text-sm">Jamshedpur, Jharkhand</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">© 2026 Minii. All rights reserved.</p>
          <p className="text-white/30 text-xs">Made with ❤️ in Jamshedpur</p>
        </div>
      </div>
    </footer>
  )
}