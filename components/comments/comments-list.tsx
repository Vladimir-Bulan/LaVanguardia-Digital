import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
import { MessageCircle, User } from "lucide-react"

interface Comment {
    id: string
    content: string
    createdAt: string
    user: {
        id: string
        name: string | null
        image: string | null
    }
}

interface CommentsListProps {
    comments: Comment[]
}

export default function CommentsList({ comments }: CommentsListProps) {
    if (comments.length === 0) {
        return (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                    Sé el primero en comentar este artículo
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">
                {comments.length} {comments.length === 1 ? "Comentario" : "Comentarios"}
            </h3>

            <div className="space-y-4">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-start gap-3">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                {comment.user.image ? (
                                    <img
                                        src={comment.user.image}
                                        alt={comment.user.name || "Usuario"}
                                        className="w-10 h-10 rounded-full"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-accent-gold flex items-center justify-center">
                                        <User className="w-5 h-5 text-primary-black" />
                                    </div>
                                )}
                            </div>

                            {/* Contenido */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-gray-900">
                                        {comment.user.name || "Usuario"}
                                    </span>
                                    <span className="text-sm text-gray-500">•</span>
                                    <span className="text-sm text-gray-500">
                                        {formatDistanceToNow(new Date(comment.createdAt), {
                                            addSuffix: true,
                                            locale: es,
                                        })}
                                    </span>
                                </div>
                                <p className="text-gray-700 whitespace-pre-wrap">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}