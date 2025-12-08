"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Send } from "lucide-react"

interface CommentFormProps {
    articleId: string
}

export default function CommentForm({ articleId }: CommentFormProps) {
    const { data: session } = useSession()
    const router = useRouter()
    const [content, setContent] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!session) {
            router.push("/admin/login")
            return
        }

        if (!content.trim()) {
            setError("El comentario no puede estar vacío")
            return
        }

        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: content.trim(),
                    articleId,
                }),
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || "Error al publicar comentario")
            }

            setContent("")
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al publicar comentario")
        } finally {
            setIsLoading(false)
        }
    }

    if (!session) {
        return (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-gray-600 mb-4">
                    Debes iniciar sesión para comentar
                </p>

                <a
                    href="/admin/login"
                    className="inline-flex items-center px-4 py-2 bg-accent-gold text-primary-black rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
                >
                    Iniciar Sesión
                </a>
            </div>
        )
    }


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Deja tu comentario
                </label>
                <textarea
                    id="comment"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Escribe tu opinión sobre este artículo..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold resize-none"
                    rows={4}
                    disabled={isLoading}
                />
            </div>

            {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isLoading || !content.trim()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-primary-black rounded-lg hover:bg-yellow-500 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Send className="w-4 h-4" />
                {isLoading ? "Publicando..." : "Publicar Comentario"}
            </button>
        </form>
    )
}