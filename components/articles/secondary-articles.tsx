"use client"

import type React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string | null
  category: string
  publishedAt: Date | null
  author: {
    name: string | null
  }
}

interface SecondaryArticlesProps {
  articles: Article[]
}

export default function SecondaryArticles({ articles }: SecondaryArticlesProps) {
  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push(`/articulo/${slug}`)
  }

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.stopPropagation()
    const categoryRoutes: { [key: string]: string } = {
      Deportes: "/deportes",
      Ciencia: "/tecnologia",
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
      {articles.map((article) => {
        const timeAgo = article.publishedAt
          ? formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true, locale: es })
          : "Reciente"

        return (
          <article
            key={article.id}
            className="bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1 border-b border-border-gray pb-4 sm:pb-6"
            onClick={() => handleClick(article.slug)}
          >
            <div className="relative h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 overflow-hidden rounded">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
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
              Por {article.author.name || "Redacción"} • {timeAgo}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-text-gray line-clamp-3">
              {article.excerpt}
            </p>
          </article>
        )
      })}
    </div>
  )
}