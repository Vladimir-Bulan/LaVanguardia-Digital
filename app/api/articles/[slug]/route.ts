import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// GET: Obtener artículo por slug
export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const article = await prisma.article.findUnique({
            where: { slug: params.slug },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true,
                        bio: true
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
                    orderBy: { createdAt: "desc" }
                }
            }
        })

        if (!article) {
            return NextResponse.json(
                { error: "Artículo no encontrado" },
                { status: 404 }
            )
        }

        // Incrementar vistas
        await prisma.article.update({
            where: { id: article.id },
            data: { views: { increment: 1 } }
        })

        return NextResponse.json(article)
    } catch (error) {
        console.error("Error al obtener artículo:", error)
        return NextResponse.json(
            { error: "Error al obtener artículo" },
            { status: 500 }
        )
    }
}

// PUT: Actualizar artículo
// PUT: Actualizar artículo
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { error: "No autorizado" },
                { status: 401 }
            )
        }

        const body = await request.json()  // ← Cambiar req por request

        const { slug } = await params
        const article = await prisma.article.update({
            where: { slug },
            data: body,
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        image: true
                    }
                }
            }
        })

        return NextResponse.json({
            article,
            message: "Artículo actualizado exitosamente"
        })
    } catch (error) {
        console.error("Error al actualizar artículo:", error)
        return NextResponse.json(
            { error: "Error al actualizar artículo" },
            { status: 500 }
        )
    }
}