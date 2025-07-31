import { notFound } from "next/navigation"
import ArticleLayout from "@/components/articles/article-layout"
import ArticleContent from "@/components/articles/article-content"
import ArticleSidebar from "@/components/articles/article-sidebar"
import { getArticleBySlug, getAllArticles } from "@/lib/articles"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Artículo no encontrado - La Vanguardia Digital",
    }
  }

  return {
    title: `${article.title} - La Vanguardia Digital`,
    description: article.excerpt,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <ArticleLayout article={article}>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <ArticleContent article={article} />
        </div>
        <div className="xl:col-span-1">
          <ArticleSidebar article={article} />
        </div>
      </div>
    </ArticleLayout>
  )
}
