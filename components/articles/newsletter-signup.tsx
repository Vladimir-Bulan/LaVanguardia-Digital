"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <div className="bg-gradient-to-r from-accent-gold/10 to-yellow-100 rounded-lg p-6 sm:p-8 my-8">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-6 h-6 text-accent-gold" />
        <h3 className="font-playfair text-xl font-bold text-primary-black">¿Te gustó este artículo?</h3>
      </div>

      <p className="text-text-gray mb-6">
        Suscríbete a nuestro newsletter para recibir más análisis como este directamente en tu correo.
      </p>

      {isSubscribed ? (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">¡Gracias por suscribirte!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent-gold text-primary-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 whitespace-nowrap"
          >
            Suscribirme Gratis
          </button>
        </form>
      )}
    </div>
  )
}
