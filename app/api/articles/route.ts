import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// GET: Obtener lista de artículos
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const page = parseInt(searchParams.get("page") || "1")
        const limit = parseInt(searchParams.get("limit") || "10")
        const category = searchParams.get("category")
        const featured = searchParams.get("featured")
        const search = searchParams.get("search")

        const skip = (page - 1) * limit

        // Construir filtros
        const where: any = { published: true }

        if (category) {
            where.category = category
        }

        if (featured === "true") {
            where.featured = true
        }

        if (search) {
            where.OR = [
                { title: { contains: search, mode: "insensitive" } },
                { excerpt: { contains: search, mode: "insensitive" } },
                { content: { contains: search, mode: "insensitive" } }
            ]
        }

        // Obtener artículos
        const [articles, total] = await Promise.all([
            prisma.article.findMany({
                where,
                include: {
                    author: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            image: true
                        }
                    }
                },
                orderBy: { publishedAt: "desc" },
                skip,
                take: limit
            }),
            prisma.article.count({ where })
        ])

        return NextResponse.json({
            articles,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        })
    } catch (error) {
        console.error("Error al obtener artículos:", error)
        return NextResponse.json(
            { error: "Error al obtener artículos" },
            { status: 500 }
        )
    }
}

// POST: Crear nuevo artículo
export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { error: "No autorizado" },
                { status: 401 }
            )
        }

        const body = await req.json()
        const {
            title,
            excerpt,
            content,
            image,
            imageCaption,
            category,
            tags,
            featured,
            published
        } = body

        // Validar campos requeridos
        if (!title || !excerpt || !content || !category) {
            return NextResponse.json(
                { error: "Faltan campos requeridos" },
                { status: 400 }
            )
        }

        // Generar slug del título
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")

        // Crear artículo
        const article = await prisma.article.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                image,
                imageCaption,
                category,
                tags: tags || [],
                featured: featured || false,
                published: published || false,
                publishedAt: published ? new Date() : null,
                authorId: session.user.id
            },
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

        return NextResponse.json(
            { article, message: "Artículo creado exitosamente" },
            { status: 201 }
        )
    } catch (error) {
        console.error("Error al crear artículo:", error)
        return NextResponse.json(
            { error: "Error al crear artículo" },
            { status: 500 }
        )
    }
}