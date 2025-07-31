"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Newspaper } from "lucide-react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      alert(
        `🎯 ACCESO AL PANEL ADMINISTRATIVO\n\n✅ Credenciales verificadas:\nEmail: ${email}\n\n🚀 En producción esto incluiría:\n\n📊 DASHBOARD COMPLETO:\n• Analytics en tiempo real\n• Gestión de artículos\n• Moderación de comentarios\n• Configuración del sitio\n\n🔐 AUTENTICACIÓN:\n• NextAuth.js\n• JWT tokens\n• Roles y permisos\n• 2FA opcional\n\n📝 EDITOR AVANZADO:\n• WYSIWYG editor\n• Subida de imágenes\n• Programación de posts\n• SEO automático\n\n📈 MÉTRICAS:\n• Google Analytics\n• Lecturas por artículo\n• Engagement metrics\n• Revenue tracking`,
      )
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
            <div className="p-3 bg-accent-gold rounded-full group-hover:bg-yellow-500 transition-colors duration-300">
              <Newspaper className="w-6 h-6 text-primary-black" />
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-primary-black">La Vanguardia</h1>
              <p className="text-xs text-text-gray uppercase tracking-wide">Panel Administrativo</p>
            </div>
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-custom p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary-black mb-2">Iniciar Sesión</h2>
            <p className="text-text-gray text-sm">Accede al panel de administración</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-black mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold outline-none transition-colors duration-300"
                placeholder="admin@lavanguardia.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary-black mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-border-gray rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold outline-none transition-colors duration-300"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-gray hover:text-primary-black transition-colors duration-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-accent-gold bg-gray-100 border-gray-300 rounded focus:ring-accent-gold focus:ring-2"
                />
                <span className="ml-2 text-sm text-text-gray">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-accent-gold hover:text-yellow-600 transition-colors duration-300">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent-gold text-primary-black py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-black border-t-transparent rounded-full animate-spin"></div>
                  Verificando...
                </div>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border-gray">
            <p className="text-center text-sm text-text-gray">
              ¿Necesitas ayuda?{" "}
              <a href="#" className="text-accent-gold hover:text-yellow-600 transition-colors duration-300">
                Contacta soporte técnico
              </a>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-white/50 rounded-lg border border-border-gray">
          <p className="text-xs text-text-gray text-center mb-2">
            <strong>Demo:</strong> Usa cualquier email y contraseña para probar
          </p>
          <div className="text-xs text-text-gray text-center space-y-1">
            <p>📧 admin@lavanguardia.com</p>
            <p>🔑 password123</p>
          </div>
        </div>

        {/* Back to Site */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-text-gray hover:text-primary-black transition-colors duration-300">
            ← Volver al sitio web
          </Link>
        </div>
      </div>
    </div>
  )
}
