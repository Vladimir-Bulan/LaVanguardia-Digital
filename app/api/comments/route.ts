import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// GET: Obtener comentarios de un artículo
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const articleId = searchParams.get("articleId")

        if (!articleId) {
            return NextResponse.json(
                { error: "articleId es requerido" },
                { status: 400 }
            )
        }

        const comments = await prisma.comment.findMany({
            where: { articleId },
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
        })

        return NextResponse.json(comments)
    } catch (error) {
        console.error("Error al obtener comentarios:", error)
        return NextResponse.json(
            { error: "Error al obtener comentarios" },
            { status: 500 }
        )
    }
}

// POST: Crear comentario
export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { error: "Debes iniciar sesión para comentar" },
                { status: 401 }
            )
        }

        const { content, articleId } = await req.json()

        if (!content || !articleId) {
            return NextResponse.json(
                { error: "Contenido y articleId son requeridos" },
                { status: 400 }
            )
        }

        const comment = await prisma.comment.create({
            data: {
                content,
                userId: session.user.id,
                articleId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                }
            }
        })

        return NextResponse.json(
            { comment, message: "Comentario creado exitosamente" },
            { status: 201 }
        )
    } catch (error) {
        console.error("Error al crear comentario:", error)
        return NextResponse.json(
            { error: "Error al crear comentario" },
            { status: 500 }
        )
    }
}

// DELETE: Eliminar comentario
export async function DELETE(req: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { error: "No autorizado" },
                { status: 401 }
            )
        }

        const { searchParams } = new URL(req.url)
        const commentId = searchParams.get("id")

        if (!commentId) {
            return NextResponse.json(
                { error: "ID del comentario es requerido" },
                { status: 400 }
            )
        }

        // Verificar que el comentario pertenece al usuario o es admin
        const comment = await prisma.comment.findUnique({
            where: { id: commentId }
        })

        if (!comment) {
            return NextResponse.json(
                { error: "Comentario no encontrado" },
                { status: 404 }
            )
        }

        if (comment.userId !== session.user.id && session.user.role !== "ADMIN") {
            return NextResponse.json(
                { error: "No tienes permiso para eliminar este comentario" },
                { status: 403 }
            )
        }

        await prisma.comment.delete({
            where: { id: commentId }
        })

        return NextResponse.json({
            message: "Comentario eliminado exitosamente"
        })
    } catch (error) {
        console.error("Error al eliminar comentario:", error)
        return NextResponse.json(
            { error: "Error al eliminar comentario" },
            { status: 500 }
        )
    }
}