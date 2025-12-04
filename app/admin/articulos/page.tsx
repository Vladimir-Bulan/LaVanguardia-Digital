import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Plus, Search, Filter } from "lucide-react"

interface SearchParams {
    page?: string
    search?: string
    category?: string
    published?: string
}

async function getArticles(searchParams: SearchParams) {
    const page = parseInt(searchParams.page || "1")
    const limit = 20
    const skip = (page - 1) * limit

    const where: any = {}

    if (searchParams.search) {
        where.OR = [
            { title: { contains: searchParams.search, mode: "insensitive" } },
            { excerpt: { contains: searchParams.search, mode: "insensitive" } },
        ]
    }

    if (searchParams.category) {
        where.category = searchParams.category
    }

    if (searchParams.published) {
        where.published = searchParams.published === "true"
    }

    const [articles, total] = await Promise.all([
        prisma.article.findMany({
            where,
            include: {
                author: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: { createdAt: "desc" },
            take: limit,
            skip
        }),
        prisma.article.count({ where })
    ])

    return {
        articles,
        total,
        pages: Math.ceil(total / limit),
        currentPage: page
    }
}

export default async function ArticulosPage({
    searchParams
}: {
    searchParams: Promise<SearchParams>
}) {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        redirect("/admin/login")
    }

    const params = await searchParams
    const { articles, total, pages, currentPage } = await getArticles(params)

    const categories = ["Tecnología", "Economía", "Política", "Deportes", "Cultura", "Ciencia", "Internacional", "Opinión"]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Artículos</h1>
                            <p className="text-gray-600 mt-1">{total} artículos en total</p>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href="/admin/dashboard"
                                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="/admin/articulos/nuevo"
                                className="px-6 py-2 bg-accent-gold text-primary-black rounded-lg hover:bg-yellow-500 transition-colors font-semibold flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Nuevo Artículo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <form method="get" className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Buscar
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    name="search"
                                    defaultValue={params.search}
                                    placeholder="Buscar por título o contenido..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Categoría
                            </label>
                            <select
                                name="category"
                                defaultValue={params.category || ""}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            >
                                <option value="">Todas</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Published */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Estado
                            </label>
                            <select
                                name="published"
                                defaultValue={params.published || ""}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            >
                                <option value="">Todos</option>
                                <option value="true">Publicados</option>
                                <option value="false">Borradores</option>
                            </select>
                        </div>

                        <div className="md:col-span-4 flex gap-2">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                            >
                                <Filter className="w-4 h-4" />
                                Filtrar
                            </button>
                            <Link
                                href="/admin/articulos"
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Limpiar
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Articles List */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Artículo
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Autor
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Categoría
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Vistas
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Estado
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="flex items-start">
                                            <div>
                                                <Link
                                                    href={`/articulo/${article.slug}`}
                                                    className="text-sm font-medium text-gray-900 hover:text-accent-gold line-clamp-2"
                                                >
                                                    {article.title}
                                                </Link>
                                                <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                                                    {article.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {article.author.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {article.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {article.views}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${article.published
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            {article.published ? "Publicado" : "Borrador"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={`/articulo/${article.slug}`}
                                                className="text-blue-600 hover:text-blue-900"
                                                target="_blank"
                                            >
                                                Ver
                                            </Link>
                                            <Link
                                                href={`/admin/articulos/editar/${article.id}`}
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Editar
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {pages > 1 && (
                    <div className="mt-6 flex justify-center gap-2">
                        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                            <Link
                                key={page}
                                href={`/admin/articulos?page=${page}${params.search ? `&search=${params.search}` : ""}${params.category ? `&category=${params.category}` : ""}${params.published ? `&published=${params.published}` : ""}`} className={`px-4 py-2 rounded-lg ${page === currentPage
                                    ? "bg-accent-gold text-primary-black font-semibold"
                                    : "bg-white text-gray-700 hover:bg-gray-50"
                                    } border`}
                            >
                                {page}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}