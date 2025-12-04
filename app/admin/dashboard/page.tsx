import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { FileText, Users, Eye, TrendingUp } from "lucide-react"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        redirect("/admin/login")
    }

    // Obtener estadísticas
    const [
        totalArticles,
        publishedArticles,
        totalUsers,
        totalViews
    ] = await Promise.all([
        prisma.article.count(),
        prisma.article.count({ where: { published: true } }),
        prisma.user.count(),
        prisma.article.aggregate({ _sum: { views: true } })
    ])

    const recentArticles = await prisma.article.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: {
            author: {
                select: { name: true }
            }
        }
    })

    const stats = [
        {
            title: "Total Artículos",
            value: totalArticles,
            icon: FileText,
            color: "bg-blue-500"
        },
        {
            title: "Publicados",
            value: publishedArticles,
            icon: TrendingUp,
            color: "bg-green-500"
        },
        {
            title: "Usuarios",
            value: totalUsers,
            icon: Users,
            color: "bg-purple-500"
        },
        {
            title: "Total Vistas",
            value: totalViews._sum.views || 0,
            icon: Eye,
            color: "bg-orange-500"
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
                            <p className="text-gray-600 mt-1">Bienvenido, {session.user.name}</p>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href="/"
                                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Ver Sitio
                            </Link>
                            <Link
                                href="/admin/articulos/nuevo"
                                className="px-6 py-2 bg-accent-gold text-primary-black rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
                            >
                                Nuevo Artículo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.title} className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">{stat.title}</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                </div>
                                <div className={`${stat.color} p-3 rounded-lg`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Articles */}
                <div className="bg-white rounded-lg shadow">
                    <div className="px-6 py-4 border-b flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">Artículos Recientes</h2>
                        <Link
                            href="/admin/articulos"
                            className="text-accent-gold hover:text-yellow-600 text-sm font-semibold"
                        >
                            Ver todos
                        </Link>
                    </div>
                    <div className="divide-y">
                        {recentArticles.map((article) => (
                            <div key={article.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span>{article.author.name}</span>
                                            <span>•</span>
                                            <span>{article.category}</span>
                                            <span>•</span>
                                            <span>{article.views} vistas</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link
                                            href={`/admin/articulos/editar/${article.id}`}
                                            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
                                        >
                                            Editar
                                        </Link>
                                        <span className={`px-3 py-1 text-sm rounded ${article.published
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                            }`}>
                                            {article.published ? "Publicado" : "Borrador"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}