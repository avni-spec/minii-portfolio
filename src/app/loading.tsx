export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#08060a]">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <div className="w-16 h-16 border-2 border-[#d4a574]/20 border-t-[#d4a574] rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#d4a574] animate-pulse" />
          </div>
        </div>
        <p className="text-[#d4a574] text-xs font-mono tracking-[0.4em]">LOADING</p>
      </div>
    </div>
  )
}