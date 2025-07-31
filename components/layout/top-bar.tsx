export default function TopBar() {
  return (
    <div className="bg-primary-black text-white py-2 text-xs font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div className="flex items-center flex-wrap">
          <span className="bg-accent-red text-white px-2 py-1 rounded text-[10px] sm:text-[11px] font-semibold tracking-wide mr-2 sm:mr-4 whitespace-nowrap">
            ÚLTIMO MOMENTO
          </span>
          <span className="text-[10px] sm:text-xs leading-tight">
            Mercados internacionales registran máximos históricos
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] flex-wrap">
          <span className="whitespace-nowrap">🌤️ Buenos Aires 24°C</span>
          <span className="hidden sm:inline">|</span>
          <span className="whitespace-nowrap">USD $945.50 ↗</span>
          <span className="hidden sm:inline">|</span>
          <span className="whitespace-nowrap">Jueves, 31 Jul 2025</span>
        </div>
      </div>
    </div>
  )
}
