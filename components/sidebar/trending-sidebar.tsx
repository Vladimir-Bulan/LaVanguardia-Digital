"use client"

import type React from "react"

import { useRouter } from "next/navigation"

const trendingArticles = [
  {
    id: 1,
    slug: "revolucion-digital-argentina",
    title: "Revolución Digital: Argentina Lidera la Transformación Tecnológica",
    category: "Tecnología",
    views: "15,234 lecturas",
  },
  {
    id: 2,
    slug: "inflacion-desciende-minimo",
    title: "Inflación Desciende al Mínimo de los Últimos Cinco Años",
    category: "Economía",
    views: "12,891 lecturas",
  },
  {
    id: 3,
    slug: "terapia-genica-cancer-argentina",
    title: "Terapia Génica Argentina Contra el Cáncer",
    category: "Ciencia",
    views: "11,456 lecturas",
  },
  {
    id: 4,
    slug: "messi-retiro-futbol-internacional",
    title: "Messi Anuncia su Retiro del Fútbol Internacional",
    category: "Deportes",
    views: "9,823 lecturas",
  },
  {
    id: 5,
    slug: "buenos-aires-capital-mundial-libro",
    title: "Buenos Aires Elegida Capital Mundial del Libro",
    category: "Cultura",
    views: "8,234 lecturas",
  },
]

export default function TrendingSidebar() {
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
    <div className="bg-light-gray p-4 sm:p-6 lg:p-8 rounded-lg h-fit">
      <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-primary-black text-center relative">
        Tendencias
        <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-0.5 bg-accent-gold"></div>
      </h2>

      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        {trendingArticles.map((article, index) => (
          <article
            key={article.id}
            className="py-3 sm:py-4 lg:py-6 border-b border-border-gray flex gap-3 sm:gap-4 transition-all duration-300 cursor-pointer hover:bg-white hover:-mx-2 sm:hover:-mx-4 hover:px-2 sm:hover:px-4 hover:rounded-lg last:border-b-0"
            onClick={() => handleClick(article.slug)}
          >
            <div className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-accent-gold w-8 sm:w-10 flex-shrink-0">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm sm:text-base font-semibold leading-snug mb-1 sm:mb-2 text-primary-black line-clamp-2 hover:text-accent-gold transition-colors duration-200">
                {article.title}
              </h4>
              <div className="text-[10px] sm:text-xs text-text-gray flex items-center gap-2">
                <button
                  onClick={(e) => handleCategoryClick(e, article.category)}
                  className="hover:text-accent-gold transition-colors duration-200"
                >
                  {article.category}
                </button>
                <span>•</span>
                <span>{article.views}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
