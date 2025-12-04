import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import ArticleLayout from "@/components/articles/article-layout"
import ArticleContent from "@/components/articles/article-content"
import ArticleSidebar from "@/components/articles/article-sidebar"

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

async function getArticle(slug: string) {
  try {
    const article = await prisma.article.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            bio: true,
            role: true
          }
        },
        comments: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          },
          orderBy: {
            createdAt: "desc"
          }
        }
      }
    })

    if (!article) {
      return null
    }

    // Incrementar vistas
    await prisma.article.update({
      where: { id: article.id },
      data: { views: { increment: 1 } }
    })

    // Serializar las fechas y normalizar datos para evitar errores
    return {
      ...article,
      createdAt: article.createdAt.toISOString(),
      updatedAt: article.updatedAt.toISOString(),
      publishedAt: article.publishedAt?.toISOString() || null,
      author: {
        ...article.author,
        name: article.author.name || "Redacción",
        email: article.author.email || "",
        image: article.author.image || "/placeholder.svg",
        bio: article.author.bio || "Periodista de La Vanguardia Digital"
      },
      comments: article.comments.map(comment => ({
        ...comment,
        createdAt: comment.createdAt.toISOString(),
        updatedAt: comment.updatedAt.toISOString(),
        user: {
          ...comment.user,
          name: comment.user.name || "Usuario",
          image: comment.user.image || "/placeholder.svg"
        }
      }))
    }
  } catch (error) {
    console.error("Error al obtener artículo:", error)
    return null
  }
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

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
      images: article.image ? [article.image] : [],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name || "La Vanguardia"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

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