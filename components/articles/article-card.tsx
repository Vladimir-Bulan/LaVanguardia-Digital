"use client"

import Image from "next/image"
import Link from "next/link"
import SocialShare from "@/components/advanced/social-share"
import { Clock, User, Eye } from "lucide-react"

interface ArticleCardProps {
  id: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  image: string
  featured?: boolean
  size?: "small" | "medium" | "large"
  views?: number
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  category,
  image,
  featured = false,
  size = "medium",
  views,
}: ArticleCardProps) {
  const sizeClasses = {
    small: "h-40",
    medium: "h-48",
    large: "h-64",
  }

  const titleClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  }

  return (
    <article
      className={`bg-white rounded-lg overflow-hidden shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${
        featured ? "border-l-4 border-accent-gold" : ""
      }`}
    >
      <Link href={`/articulo/${id}`}>
        <div className={`relative ${sizeClasses[size]} overflow-hidden cursor-pointer`}>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-accent-red text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide">
              {category}
            </span>
          </div>
          {views && (
            <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{views.toLocaleString()}</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 sm:p-6">
        <Link href={`/articulo/${id}`}>
          <h2
            className={`font-playfair ${titleClasses[size]} font-bold text-primary-black mb-3 hover:text-accent-gold transition-colors duration-200 line-clamp-2 cursor-pointer`}
          >
            {title}
          </h2>
        </Link>

        <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-text-gray">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>{publishedAt}</span>
            <SocialShare title={title} className="ml-2" />
          </div>
        </div>
      </div>
    </article>
  )
}
