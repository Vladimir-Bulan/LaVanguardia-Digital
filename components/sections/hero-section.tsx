import FeaturedArticle from "@/components/articles/featured-article"
import SecondaryArticles from "@/components/articles/secondary-articles"
import TrendingSidebar from "@/components/sidebar/trending-sidebar"

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div className="xl:col-span-2 space-y-6 sm:space-y-8">
          <FeaturedArticle />
          <SecondaryArticles />
        </div>
        <aside className="xl:col-span-1 order-first xl:order-last">
          <TrendingSidebar />
        </aside>
      </div>
    </section>
  )
}
