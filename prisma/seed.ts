import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Sembrando datos...')

    // Crear usuario admin
    const hashedPassword = await bcrypt.hash('admin123', 10)

    const admin = await prisma.user.upsert({
        where: { email: 'admin@lavanguardia.com' },
        update: {},
        create: {
            email: 'admin@lavanguardia.com',
            name: 'Administrador',
            password: hashedPassword,
            role: 'ADMIN',
            bio: 'Editor en jefe de La Vanguardia Digital'
        }
    })

    console.log('✅ Usuario admin creado:', admin.email)

    // Crear artículos de ejemplo
    const articles = [
        {
            title: 'Revolución Digital: Argentina Lidera la Transformación Tecnológica',
            slug: 'revolucion-digital-argentina-lidera-transformacion-tecnologica',
            excerpt: 'El país se posiciona como referente regional en innovación y desarrollo tecnológico.',
            content: 'Argentina está experimentando una revolución digital sin precedentes. Empresas tecnológicas locales están desarrollando soluciones innovadoras que están siendo adoptadas en toda la región. El gobierno ha implementado políticas de fomento a la innovación que están dando resultados positivos.',
            category: 'Tecnología',
            tags: ['tecnología', 'innovación', 'argentina'],
            featured: true,
            published: true,
            publishedAt: new Date(),
            authorId: admin.id
        },
        {
            title: 'Inflación Desciende al Mínimo de los Últimos Cinco Años',
            slug: 'inflacion-desciende-minimo-ultimos-cinco-anos',
            excerpt: 'Las políticas económicas implementadas comienzan a mostrar resultados positivos.',
            content: 'La inflación en Argentina ha descendido al nivel más bajo de los últimos cinco años, según informó el INDEC. Los analistas económicos destacan las medidas implementadas por el gobierno y el Banco Central como factores clave en esta reducción.',
            category: 'Economía',
            tags: ['economía', 'inflación', 'argentina'],
            featured: true,
            published: true,
            publishedAt: new Date(),
            authorId: admin.id
        },
        {
            title: 'Terapia Génica Argentina Contra el Cáncer',
            slug: 'terapia-genica-argentina-contra-cancer',
            excerpt: 'Científicos argentinos desarrollan tratamiento innovador contra el cáncer.',
            content: 'Un equipo de científicos argentinos del CONICET ha desarrollado una terapia génica innovadora para el tratamiento del cáncer. Los resultados preliminares de los ensayos clínicos muestran una eficacia prometedora en el tratamiento de ciertos tipos de tumores.',
            category: 'Ciencia',
            tags: ['ciencia', 'salud', 'argentina'],
            featured: false,
            published: true,
            publishedAt: new Date(),
            authorId: admin.id
        },
        {
            title: 'Argentina Clasifica al Mundial con Récord Histórico',
            slug: 'argentina-clasifica-mundial-record-historico',
            excerpt: 'La selección argentina obtiene su clasificación más temprana a un Mundial.',
            content: 'La selección argentina de fútbol logró clasificar al próximo Mundial con cinco fechas de anticipación, estableciendo un nuevo récord en la historia de las eliminatorias sudamericanas. El equipo dirigido por Lionel Scaloni mostró un rendimiento excepcional.',
            category: 'Deportes',
            tags: ['fútbol', 'mundial', 'argentina'],
            featured: false,
            published: true,
            publishedAt: new Date(),
            authorId: admin.id
        },
        {
            title: 'Nuevo Festival de Cine Argentino Bate Récords de Asistencia',
            slug: 'nuevo-festival-cine-argentino-bate-records',
            excerpt: 'El Festival Internacional de Cine de Buenos Aires supera todas las expectativas.',
            content: 'El Festival Internacional de Cine de Buenos Aires cerró su edición 2025 con cifras récord de asistencia. Más de 200,000 espectadores disfrutaron de las proyecciones, consolidando a Buenos Aires como uno de los principales centros cinematográficos de América Latina.',
            category: 'Cultura',
            tags: ['cine', 'cultura', 'argentina'],
            featured: false,
            published: true,
            publishedAt: new Date(),
            authorId: admin.id
        }
    ]

    for (const article of articles) {
        const created = await prisma.article.create({
            data: article
        })
        console.log('✅ Artículo creado:', created.title)
    }

    console.log('🎉 Datos sembrados exitosamente!')
}

main()
    .catch((e) => {
        console.error('❌ Error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })