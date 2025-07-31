import type React from "react"
import TopBar from "@/components/layout/top-bar"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ReadingProgress from "@/components/advanced/reading-progress"
import Breadcrumbs from "@/components/ui/breadcrumbs"

interface SectionLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  breadcrumbs: Array<{ name: string; href: string }>
}

export default function SectionLayout({ children, title, description, breadcrumbs }: SectionLayoutProps) {
  return (
    <>
      <ReadingProgress />
      <TopBar />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mb-8">
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-black mb-4">
              {title}
            </h1>
            <p className="text-lg text-text-gray max-w-3xl">{description}</p>
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
