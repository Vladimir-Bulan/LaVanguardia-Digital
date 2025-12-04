import FeaturedArticle from "@/components/articles/featured-article"
import SecondaryArticles from "@/components/articles/secondary-articles"
import TrendingSidebar from "@/components/sidebar/trending-sidebar"

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

interface HeroSectionProps {
  articles: Article[]
}

export default function HeroSection({ articles }: HeroSectionProps) {
  const featuredArticle = articles[0]
  const secondaryArticles = articles.slice(1, 4)

  return (
    <section className="max-w-7xl mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div className="xl:col-span-2 space-y-6 sm:space-y-8">
          {featuredArticle && <FeaturedArticle article={featuredArticle} />}
          {secondaryArticles.length > 0 && <SecondaryArticles articles={secondaryArticles} />}
        </div>
        <aside className="xl:col-span-1 order-first xl:order-last">
          <TrendingSidebar articles={articles.slice(0, 5)} />
        </aside>
      </div>
    </section>
  )
}