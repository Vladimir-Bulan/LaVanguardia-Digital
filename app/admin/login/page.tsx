"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Newspaper } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError("Email o contraseña incorrectos")
      } else {
        router.push("/")
        router.refresh()
      }
    } catch (error) {
      setError("Ocurrió un error. Intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
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
                disabled={isLoading}
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
                  disabled={isLoading}
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

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

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