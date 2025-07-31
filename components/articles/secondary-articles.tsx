"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"

const secondaryArticles = [
  {
    id: 1,
    slug: "inflacion-desciende-minimo",
    category: "Economía",
    title: "Inflación Desciende al Mínimo de los Últimos Cinco Años",
    author: "María González",
    time: "Hace 2 horas",
    excerpt:
      "Los indicadores económicos muestran una tendencia sostenida hacia la estabilización, con proyecciones optimistas para el próximo trimestre según el Banco Central.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    slug: "startup-argentina-tecnologia-cuantica",
    category: "Tecnología",
    title: "Startup Argentina Desarrolla Revolucionaria Tecnología Cuántica",
    author: "Carlos Rodríguez",
    time: "Hace 3 horas",
    excerpt:
      "QuantumTech Buenos Aires logra un avance significativo en computación cuántica, atrayendo la atención de gigantes tecnológicos internacionales.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function SecondaryArticles() {
  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push(`/articulo/${slug}`)
  }

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.stopPropagation()
    // Mapeo correcto de categorías a rutas
    const categoryRoutes: { [key: string]: string } = {
      Deportes: "/deportes",
      Ciencia: "/tecnologia", // Ciencia va a tecnología por ahora
      Tecnología: "/tecnologia",
      Cultura: "/cultura",
      Economía: "/economia",
      Política: "/politica",
      Internacional: "/internacional",
      Opinión: "/opinion",
    }

    const route = categoryRoutes[category] || `/${category.toLowerCase()}`
    router.push(route)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {secondaryArticles.map((article) => (
        <article
          key={article.id}
          className="bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1 border-b border-border-gray pb-4 sm:pb-6"
          onClick={() => handleClick(article.slug)}
        >
          <div className="relative h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 overflow-hidden rounded">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>
          <button
            onClick={(e) => handleCategoryClick(e, article.category)}
            className="text-[10px] sm:text-[11px] font-semibold text-accent-red uppercase tracking-wide mb-2 sm:mb-3 block hover:text-red-700 transition-colors duration-200"
          >
            {article.category}
          </button>
          <h2 className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold leading-tight mb-2 sm:mb-3 text-primary-black hover:text-accent-gold transition-colors duration-200">
            {article.title}
          </h2>
          <div className="text-[10px] sm:text-xs text-text-gray mb-2 sm:mb-3">
            Por {article.author} • {article.time}
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-text-gray line-clamp-3">{article.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
