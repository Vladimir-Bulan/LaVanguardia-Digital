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
  views: number
  readTime: string | null
  publishedAt: Date | null
  author: {
    name: string | null
    image: string | null
  }
}

interface FeaturedArticleProps {
  article: Article
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/articulo/${article.slug}`)
  }

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/${article.category.toLowerCase()}`)
  }

  const timeAgo = article.publishedAt
    ? formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true, locale: es })
    : "Reciente"

  return (
    <article
      className="bg-white rounded-none overflow-hidden relative cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-hover"
      onClick={handleClick}
    >
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg?height=400&width=1200"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
      <div className="py-4 sm:py-6 lg:py-8">
        <button
          onClick={handleCategoryClick}
          className="bg-accent-red text-white px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase inline-block mb-3 sm:mb-4 lg:mb-6 hover:bg-red-700 transition-colors duration-200"
        >
          {article.category}
        </button>
        <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-primary-black tracking-tight hover:text-accent-gold transition-colors duration-200">
          {article.title}
        </h1>
        <p className="font-crimson text-base sm:text-lg lg:text-xl text-text-gray leading-relaxed mb-4 sm:mb-6 font-normal">
          {article.excerpt}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-[13px] text-text-gray font-medium mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src={article.author.image || "/placeholder.svg?height=32&width=32"}
              alt={article.author.name || "Autor"}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span>
              Por <strong>{article.author.name || "Redacción"}</strong>
            </span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>{timeAgo}</span>
          {article.readTime && (
            <>
              <span className="hidden sm:inline">•</span>
              <div className="bg-light-gray px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs w-fit">
                {article.readTime}
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  )
}