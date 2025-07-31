"use client"

import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl font-bold text-primary-black mb-4">404</h1>
          <h2 className="font-playfair text-2xl font-bold text-primary-black mb-2">Página no encontrada</h2>
          <p className="text-text-gray">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-text-gray hover:text-accent-gold transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Página anterior
            </button>

            <Link
              href="/buscar"
              className="inline-flex items-center gap-2 text-text-gray hover:text-accent-gold transition-colors duration-200"
            >
              <Search className="w-4 h-4" />
              Buscar artículos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
