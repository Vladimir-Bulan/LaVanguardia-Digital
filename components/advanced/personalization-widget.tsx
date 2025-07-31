"use client"

import { useState } from "react"
import { Settings, Heart, TrendingUp } from "lucide-react"

const interests = [
  { id: "politica", name: "Política", icon: "🏛️", selected: true },
  { id: "economia", name: "Economía", icon: "💰", selected: true },
  { id: "tecnologia", name: "Tecnología", icon: "💻", selected: false },
  { id: "deportes", name: "Deportes", icon: "⚽", selected: true },
  { id: "cultura", name: "Cultura", icon: "🎭", selected: false },
  { id: "ciencia", name: "Ciencia", icon: "🔬", selected: false },
]

export default function PersonalizationWidget() {
  const [userInterests, setUserInterests] = useState(interests)
  const [isOpen, setIsOpen] = useState(false)

  const toggleInterest = (id: string) => {
    setUserInterests((prev) =>
      prev.map((interest) => (interest.id === id ? { ...interest, selected: !interest.selected } : interest)),
    )
  }

  const selectedCount = userInterests.filter((i) => i.selected).length

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-accent-gold text-primary-black rounded-full hover:bg-yellow-500 transition-colors duration-300 text-sm font-medium"
      >
        <Settings className="w-4 h-4" />
        <span>Personalizar ({selectedCount})</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-border-gray rounded-lg shadow-hover p-6 z-50">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-accent-red" />
            <h3 className="font-semibold text-primary-black">Personaliza tu experiencia</h3>
          </div>

          <p className="text-sm text-text-gray mb-4">
            Selecciona tus temas de interés para recibir contenido personalizado
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {userInterests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200 ${
                  interest.selected
                    ? "border-accent-gold bg-yellow-50 text-primary-black"
                    : "border-border-gray hover:border-accent-gold text-text-gray hover:text-primary-black"
                }`}
              >
                <span className="text-lg">{interest.icon}</span>
                <span className="text-sm font-medium">{interest.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border-gray">
            <div className="flex items-center gap-2 text-sm text-text-gray">
              <TrendingUp className="w-4 h-4" />
              <span>Mejora con el tiempo</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-primary-black text-white rounded-lg hover:bg-secondary-black transition-colors duration-200 text-sm"
            >
              Guardar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
