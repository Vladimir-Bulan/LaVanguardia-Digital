"use client"

import type React from "react"
import { useState } from "react"
import { Mail, CheckCircle, Star, Users, Shield } from "lucide-react"

export default function NewsletterSection() {
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
    <section className="relative py-12 sm:py-16 my-8 sm:my-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-secondary-black to-primary-black"></div>

      {/* Decorative gold accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent-gold"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold rounded-full mb-6">
            <Mail className="w-8 h-8 text-primary-black" />
          </div>

          {/* Main heading */}
          <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-black">
            Mantente <span className="text-accent-gold text-black">Informado</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black">
            Únete a <strong className="text-accent-gold">50,000+ lectores</strong> que reciben nuestro análisis diario
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
              <Star className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span className="text-black">Análisis Exclusivos</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
              <Users className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span className="text-black">Breaking News</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
              <Shield className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span className="text-black">Sin Spam</span>
            </div>
          </div>

          {/* Subscription form */}
          {isSubscribed ? (
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">¡Gracias por suscribirte!</h3>
              <p className="text-gray-300 text-sm">Revisa tu correo para confirmar</p>
            </div>
          ) : (
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder:text-gray-400 focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20 transition-all duration-300"
                  placeholder="tu@email.com"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent-gold text-primary-black font-semibold rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400 text-xs">
                <span className="text-black">✓ Gratis siempre</span>
                <span className="text-black">✓ Datos seguros</span>
                <span className="text-black">✓ Cancela fácil</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
