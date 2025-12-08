import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// POST: Crear comentario
export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session || !session.user?.email) {
            return NextResponse.json(
                { error: "Debes iniciar sesión para comentar" },
                { status: 401 }
            )
        }

        const body = await request.json()
        const { content, articleId } = body

        if (!content || !articleId) {
            return NextResponse.json(
                { error: "Contenido y artículo son requeridos" },
                { status: 400 }
            )
        }

        // Obtener el usuario por email
        const user = await prisma.user.findUnique({
            where: { email: session.user.email }
        })

        if (!user) {
            return NextResponse.json(
                { error: "Usuario no encontrado" },
                { status: 404 }
            )
        }

        // Crear el comentario
        const comment = await prisma.comment.create({
            data: {
                content,
                userId: user.id,
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

        return NextResponse.json(comment, { status: 201 })
    } catch (error) {
        console.error("Error al crear comentario:", error)
        return NextResponse.json(
            { error: "Error al crear comentario" },
            { status: 500 }
        )
    }
}