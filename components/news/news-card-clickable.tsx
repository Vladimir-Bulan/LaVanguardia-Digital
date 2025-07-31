"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Clock, User, Eye } from "lucide-react"

interface NewsCardProps {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  image: string
  views?: number
}

export default function NewsCardClickable({
  id,
  slug,
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  category,
  image,
  views,
}: NewsCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/articulo/${slug}`)
  }

  const handleCategoryClick = (e: React.MouseEvent) => {
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
    <article
      className="bg-white rounded-lg overflow-hidden shadow-custom transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-hover"
      onClick={handleClick}
    >
      <div className="relative h-40 sm:h-48 lg:h-60 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <button
            onClick={handleCategoryClick}
            className="bg-accent-red text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide hover:bg-red-700 transition-colors duration-200"
          >
            {category}
          </button>
        </div>
        {views && (
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{views.toLocaleString()}</span>
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className="font-playfair text-lg sm:text-xl lg:text-2xl font-semibold leading-tight mb-2 sm:mb-3 lg:mb-4 text-primary-black line-clamp-2 hover:text-accent-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-text-gray mb-3 sm:mb-4 lg:mb-6 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center text-[10px] sm:text-xs text-text-gray">
          <div className="flex items-center gap-2">
            <User className="w-3 h-3" />
            <span className="truncate">Por {author}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
            <span className="whitespace-nowrap">{publishedAt}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
