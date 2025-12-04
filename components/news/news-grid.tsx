"use client"

import NewsCardClickable from "./news-card-clickable"
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

interface NewsGridProps {
  articles: Article[]
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {articles.map((article) => {
        const timeAgo = article.publishedAt
          ? formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true, locale: es })
          : "Reciente"

        return (
          <NewsCardClickable
            key={article.id}
            id={article.id}
            slug={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            author={article.author.name || "Redacción"}
            publishedAt={timeAgo}
            readTime={article.readTime || "5 min"}
            category={article.category}
            image={article.image || "/placeholder.svg?height=240&width=400"}
            views={article.views}
          />
        )
      })}
    </div>
  )
}