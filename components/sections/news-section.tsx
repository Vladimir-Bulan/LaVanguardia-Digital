import NewsGrid from "@/components/news/news-grid"

interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string | null
  category: string
  tags: string[]
  views: number
  readTime: string | null
  publishedAt: Date | null
  author: {
    id: string
    name: string | null
    email: string | null
    image: string | null
  }
}

interface NewsSectionProps {
  articles: Article[]
}

export default function NewsSection({ articles }: NewsSectionProps) {
  return (
    <section className="max-w-7xl mx-auto my-16 px-8">
      <div className="text-center mb-12 relative">
        <h2 className="font-playfair text-4xl font-bold text-primary-black mb-4">Últimas Noticias</h2>
        <p className="text-sm text-text-gray uppercase tracking-[2px]">Información verificada y análisis profundo</p>
      </div>
      <NewsGrid articles={articles} />
    </section>
  )
}