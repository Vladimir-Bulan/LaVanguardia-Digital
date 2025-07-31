"use client"

import { useState, useEffect } from "react"
import { Cloud, Sun, CloudRain, Wind } from "lucide-react"

interface WeatherData {
  city: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
  icon: "sun" | "cloud" | "rain"
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    city: "Buenos Aires",
    temperature: 24,
    condition: "Parcialmente nublado",
    humidity: 65,
    windSpeed: 12,
    icon: "cloud",
  })

  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Simular actualización del clima cada 5 minutos
    const interval = setInterval(() => {
      setWeather((prev) => ({
        ...prev,
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 10)),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 5),
      }))
    }, 300000) // 5 minutos

    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = () => {
    switch (weather.icon) {
      case "sun":
        return <Sun className="w-5 h-5 text-yellow-500" />
      case "rain":
        return <CloudRain className="w-5 h-5 text-blue-500" />
      default:
        return <Cloud className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200 text-white text-sm"
      >
        {getWeatherIcon()}
        <span>{weather.city}</span>
        <span className="font-semibold">{Math.round(weather.temperature)}°C</span>
      </button>

      {isExpanded && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-border-gray rounded-lg shadow-hover p-4 z-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-primary-black">{weather.city}</h3>
            {getWeatherIcon()}
          </div>

          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-primary-black mb-1">{Math.round(weather.temperature)}°C</div>
            <div className="text-sm text-text-gray">{weather.condition}</div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-text-gray">Humedad</span>
              <span className="font-medium">{Math.round(weather.humidity)}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-3 h-3 text-text-gray" />
              <span className="text-text-gray">Viento</span>
              <span className="font-medium">{Math.round(weather.windSpeed)} km/h</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-border-gray text-xs text-text-gray text-center">
            Actualizado hace 5 min
          </div>
        </div>
      )}
    </div>
  )
}
