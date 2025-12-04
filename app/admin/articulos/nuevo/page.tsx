"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { ArrowLeft, Save, Eye } from "lucide-react"

export default function NuevoArticuloPage() {
    const router = useRouter()
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        title: "",
        excerpt: "",
        content: "",
        category: "Tecnología",
        tags: "",
        image: "",
        imageCaption: "",
        featured: false,
        published: false,
        readTime: "5 min lectura"
    })

    const categories = [
        "Tecnología",
        "Economía",
        "Política",
        "Deportes",
        "Cultura",
        "Ciencia",
        "Internacional",
        "Opinión"
    ]

    const handleSubmit = async (e: React.FormEvent, publishNow = false) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        try {
            const tagsArray = formData.tags
                .split(",")
                .map(tag => tag.trim())
                .filter(tag => tag.length > 0)

            const response = await fetch("/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    tags: tagsArray,
                    published: publishNow,
                }),
            })

            if (!response.ok) {
                throw new Error("Error al crear el artículo")
            }

            const data = await response.json()
            router.push("/admin/dashboard")
            router.refresh()
        } catch (err) {
            setError("Error al crear el artículo. Intenta de nuevo.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/admin/dashboard"
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Nuevo Artículo</h1>
                                <p className="text-sm text-gray-600">Crear un nuevo artículo</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={(e) => handleSubmit(e, false)}
                                disabled={isLoading}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center gap-2"
                            >
                                <Save className="w-4 h-4" />
                                Guardar Borrador
                            </button>
                            <button
                                onClick={(e) => handleSubmit(e, true)}
                                disabled={isLoading}
                                className="px-4 py-2 bg-accent-gold text-primary-black rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 flex items-center gap-2 font-semibold"
                            >
                                <Eye className="w-4 h-4" />
                                Publicar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                        {error}
                    </div>
                )}

                <div className="bg-white rounded-lg shadow p-6 space-y-6">
                    {/* Título */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Título *
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            placeholder="Escribe un título atractivo..."
                            required
                        />
                    </div>

                    {/* Extracto */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Extracto *
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            rows={2}
                            placeholder="Resumen breve del artículo..."
                            required
                        />
                    </div>

                    {/* Contenido */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contenido *
                        </label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold font-mono text-sm"
                            rows={15}
                            placeholder="Contenido completo del artículo..."
                            required
                        />
                    </div>

                    {/* Categoría y Tiempo de lectura */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Categoría *
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tiempo de lectura
                            </label>
                            <input
                                type="text"
                                value={formData.readTime}
                                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                                placeholder="5 min lectura"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Etiquetas (separadas por comas)
                        </label>
                        <input
                            type="text"
                            value={formData.tags}
                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            placeholder="tecnología, innovación, argentina"
                        />
                    </div>

                    {/* Imagen */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            URL de la Imagen
                        </label>
                        <input
                            type="url"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            placeholder="https://ejemplo.com/imagen.jpg"
                        />
                    </div>

                    {/* Pie de imagen */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Pie de Imagen
                        </label>
                        <input
                            type="text"
                            value={formData.imageCaption}
                            onChange={(e) => setFormData({ ...formData, imageCaption: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                            placeholder="Descripción de la imagen..."
                        />
                    </div>

                    {/* Destacado */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="featured"
                            checked={formData.featured}
                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                            className="w-4 h-4 text-accent-gold focus:ring-accent-gold border-gray-300 rounded"
                        />
                        <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                            Marcar como artículo destacado
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}