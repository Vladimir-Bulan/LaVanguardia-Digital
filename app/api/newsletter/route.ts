import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// POST: Suscribirse al newsletter
export async function POST(req: Request) {
    try {
        const { email, name } = await req.json()

        if (!email) {
            return NextResponse.json(
                { error: "Email es requerido" },
                { status: 400 }
            )
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Email inválido" },
                { status: 400 }
            )
        }

        // Verificar si ya existe
        const existing = await prisma.newsletter.findUnique({
            where: { email }
        })

        if (existing) {
            // Si existe pero está inactivo, reactivar
            if (!existing.active) {
                await prisma.newsletter.update({
                    where: { email },
                    data: { active: true }
                })
                return NextResponse.json({
                    message: "¡Bienvenido de nuevo! Tu suscripción ha sido reactivada"
                })
            }

            return NextResponse.json(
                { error: "Este email ya está suscrito" },
                { status: 400 }
            )
        }

        // Crear suscripción
        const subscription = await prisma.newsletter.create({
            data: {
                email,
                name: name || null
            }
        })

        return NextResponse.json(
            {
                subscription,
                message: "¡Gracias por suscribirte! Recibirás nuestras noticias."
            },
            { status: 201 }
        )
    } catch (error) {
        console.error("Error al suscribir:", error)
        return NextResponse.json(
            { error: "Error al procesar suscripción" },
            { status: 500 }
        )
    }
}

// DELETE: Desuscribirse
export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const email = searchParams.get("email")

        if (!email) {
            return NextResponse.json(
                { error: "Email es requerido" },
                { status: 400 }
            )
        }

        await prisma.newsletter.update({
            where: { email },
            data: { active: false }
        })

        return NextResponse.json({
            message: "Te has desuscrito exitosamente"
        })
    } catch (error) {
        console.error("Error al desuscribir:", error)
        return NextResponse.json(
            { error: "Error al procesar desuscripción" },
            { status: 500 }
        )
    }
}