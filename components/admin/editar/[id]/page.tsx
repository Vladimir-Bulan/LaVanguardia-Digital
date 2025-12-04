import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect, notFound } from "next/navigation"
import EditArticleForm from "@/components/admin/edit-article-form"

interface PageProps {
    params: Promise<{
        id: string
    }>
}

async function getArticle(id: string) {
    const article = await prisma.article.findUnique({
        where: { id },
        include: {
            author: {
                select: {
                    name: true
                }
            }
        }
    })

    if (!article) {
        return null
    }

    return {
        ...article,
        createdAt: article.createdAt.toISOString(),
        updatedAt: article.updatedAt.toISOString(),
        publishedAt: article.publishedAt?.toISOString() || null,
    }
}

export default async function EditarArticuloPage({ params }: PageProps) {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        redirect("/admin/login")
    }

    const { id } = await params
    const article = await getArticle(id)

    if (!article) {
        notFound()
    }

    return <EditArticleForm article={article} />
}