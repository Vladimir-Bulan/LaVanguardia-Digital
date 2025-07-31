"use client"

import { useState, useEffect } from "react"
import { Clock, Zap } from "lucide-react"

interface LiveUpdate {
  id: number
  time: string
  title: string
  summary: string
  isNew: boolean
}

const mockUpdates: LiveUpdate[] = [
  {
    id: 1,
    time: "14:32",
    title: "Mercados reaccionan positivamente",
    summary: "El dólar baja 2% tras anuncio del Banco Central",
    isNew: true,
  },
  {
    id: 2,
    time: "14:15",
    title: "Conferencia de prensa presidencial",
    summary: "Se confirman nuevas medidas de estímulo económico",
    isNew: false,
  },
  {
    id: 3,
    time: "13:45",
    title: "Reacciones internacionales",
    summary: "FMI expresa apoyo a las reformas estructurales",
    isNew: false,
  },
]

export default function LiveUpdates() {
  const [updates, setUpdates] = useState<LiveUpdate[]>(mockUpdates)
  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      // Simular nueva actualización
      const newUpdate: LiveUpdate = {
        id: Date.now(),
        time: new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }),
        title: "Nueva actualización en vivo",
        summary: "Información actualizada sobre los acontecimientos",
        isNew: true,
      }

      setUpdates((prev) => {
        const updated = prev.map((update) => ({ ...update, isNew: false }))
        return [newUpdate, ...updated].slice(0, 5)
      })
    }, 30000) // Nueva actualización cada 30 segundos

    return () => clearInterval(interval)
  }, [isLive])

  return (
    <div className="bg-white border border-border-gray rounded-lg p-6 shadow-custom">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-red rounded-full animate-pulse" />
            <h3 className="font-playfair text-xl font-bold text-primary-black">En Vivo</h3>
          </div>
          <Zap className="w-4 h-4 text-accent-gold" />
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
            isLive ? "bg-accent-red text-white hover:bg-red-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {isLive ? "Pausar" : "Reanudar"}
        </button>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto">
        {updates.map((update) => (
          <div
            key={update.id}
            className={`border-l-4 pl-4 py-2 transition-all duration-500 ${
              update.isNew
                ? "border-accent-gold bg-yellow-50 animate-pulse"
                : "border-border-gray hover:border-accent-gold hover:bg-light-gray"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-3 h-3 text-text-gray" />
              <span className="text-xs text-text-gray font-medium">{update.time}</span>
              {update.isNew && (
                <span className="bg-accent-red text-white px-2 py-0.5 rounded-full text-[10px] font-bold">NUEVO</span>
              )}
            </div>
            <h4 className="font-semibold text-sm text-primary-black mb-1">{update.title}</h4>
            <p className="text-xs text-text-gray leading-relaxed">{update.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
