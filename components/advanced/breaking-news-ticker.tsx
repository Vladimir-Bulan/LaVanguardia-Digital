"use client"

import { useState, useEffect } from "react"
import { AlertCircle, X } from "lucide-react"

const breakingNews = [
  "🚨 ÚLTIMO MOMENTO: Presidente anuncia nuevas medidas económicas",
  "⚡ BREAKING: Argentina clasifica al Mundial con récord histórico",
  "🔥 URGENTE: Descubren nueva reserva de litio en el norte del país",
]

export default function BreakingNewsTicker() {
  const [currentNews, setCurrentNews] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setCurrentNews((prev) => (prev + 1) % breakingNews.length)
        setIsAnimating(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="bg-accent-red text-white py-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <AlertCircle className="w-4 h-4 flex-shrink-0 animate-pulse" />
          <div className="flex-1 overflow-hidden">
            <div
              className={`transition-all duration-300 ${
                isAnimating ? "transform translate-x-0 opacity-100" : "transform translate-x-4 opacity-0"
              }`}
            >
              <span className="text-sm font-medium whitespace-nowrap block">{breakingNews[currentNews]}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-red-700 rounded transition-colors duration-200"
          aria-label="Cerrar ticker"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-800">
        <div className="h-full bg-white animate-pulse" style={{ width: "30%" }} />
      </div>
    </div>
  )
}
