import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// GET: Obtener favoritos del usuario
export async function GET(req: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { error: "No autorizado" },
                { status: 401 }
            )
        }

        const favorites = await prisma.favorite.findMany({
            where: { userId: session.user.id },
            include: {
                article: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true,
                                image: true
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: "desc" }
        })

        return NextResponse.json(favorites)
    } catch (error) {
        console.error("Error al obtener favoritos:", error)
        return NextResponse.json(
            { error: "Error al obtener favoritos" },
            { status: 500 }
        )
    }
}

// POST: Agregar a favoritos
export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { error: "Debes iniciar sesión para guardar favoritos" },
                { status: 401 }
            )
        }

        const { articleId } = await req.json()

        if (!articleId) {
            return NextResponse.json(
                { error: "articleId es requerido" },
                { status: 400 }
            )
        }

        const favorite = await prisma.favorite.create({
            data: {
                userId: session.user.id,
                articleId
            }
        })

        return NextResponse.json(
            { favorite, message: "Agregado a favoritos" },
            { status: 201 }
        )
    } catch (error: any) {
        // Si ya existe, devolver error específico
        if (error.code === "P2002") {
            return NextResponse.json(
                { error: "Este artículo ya está en tus favoritos" },
                { status: 400 }
            )
        }

        console.error("Error al agregar a favoritos:", error)
        return NextResponse.json(
            { error: "Error al agregar a favoritos" },
            { status: 500 }
        )
    }
}

// DELETE: Quitar de favoritos
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
        const articleId = searchParams.get("articleId")

        if (!articleId) {
            return NextResponse.json(
                { error: "articleId es requerido" },
                { status: 400 }
            )
        }

        await prisma.favorite.deleteMany({
            where: {
                userId: session.user.id,
                articleId
            }
        })

        return NextResponse.json({
            message: "Eliminado de favoritos"
        })
    } catch (error) {
        console.error("Error al eliminar de favoritos:", error)
        return NextResponse.json(
            { error: "Error al eliminar de favoritos" },
            { status: 500 }
        )
    }
}