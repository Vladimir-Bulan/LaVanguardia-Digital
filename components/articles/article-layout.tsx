import type React from "react"
import TopBar from "@/components/layout/top-bar"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ReadingProgress from "@/components/advanced/reading-progress"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import type { Article } from "@/types/article"

interface ArticleLayoutProps {
  children: React.ReactNode
  article: Article
}

export default function ArticleLayout({ children, article }: ArticleLayoutProps) {
  // Mapeo correcto de categorías a rutas
  const getCategoryRoute = (category: string): string => {
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

    return categoryRoutes[category] || `/${category.toLowerCase()}`
  }

  const breadcrumbs = [
    {
      name: article.category,
      href: getCategoryRoute(article.category),
    },
    {
      name: article.title,
      href: `/articulo/${article.slug}`,
    },
  ]

  return (
    <>
      <ReadingProgress />
      <TopBar />
      <Header />
      <main className="min-h-screen bg-white">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs items={breadcrumbs} />
          {children}
        </article>
      </main>
      <Footer />
    </>
  )
}
