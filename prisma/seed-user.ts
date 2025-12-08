import { PrismaClient, UserRole } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    const hashedPassword = await bcrypt.hash("usuario123", 10)

    const user = await prisma.user.upsert({
        where: { email: "usuario@test.com" },
        update: {},
        create: {
            email: "usuario@test.com",
            name: "Juan Pérez",
            password: hashedPassword,
            role: UserRole.READER,
            bio: "Usuario de prueba"
        }
    })

    console.log("Usuario creado:", user)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })