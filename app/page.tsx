import TopBar from "@/components/layout/top-bar"
import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import NewsSection from "@/components/sections/news-section"
import NewsletterSection from "@/components/sections/newsletter-section"
import Footer from "@/components/layout/footer"
import ReadingProgress from "@/components/advanced/reading-progress"
import BreakingNewsTicker from "@/components/advanced/breaking-news-ticker"

export default function HomePage() {
  return (
    <>
      <ReadingProgress />
      <BreakingNewsTicker />
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
