import TopBar from "@/components/layout/top-bar"
import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import NewsSection from "@/components/sections/news-section"
import NewsletterSection from "@/components/sections/newsletter-section"
import Footer from "@/components/layout/footer"
import ReadingProgress from "@/components/advanced/reading-progress"
import BreakingNewsTicker from "@/components/advanced/breaking-news-ticker"
import { prisma } from "@/lib/prisma"

export const dynamic = 'force-dynamic'

async function getArticles() {
  try {
    const articles = await prisma.article.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true
          }
        }
      },
      orderBy: { publishedAt: "desc" },
      take: 10
    })
    return articles
  } catch (error) {
    console.error("Error al obtener artículos:", error)
    return []
  }
}

export default async function HomePage() {
  const articles = await getArticles()

  return (
    <>
      <ReadingProgress />
      <BreakingNewsTicker />
      <TopBar />
      <Header />
      <main>
        <HeroSection articles={articles} />
        <NewsSection articles={articles} />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}