"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, ThumbsUp, Reply, Flag } from "lucide-react"

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  publishedAt: string
  likes: number
  replies: Comment[]
}

interface CommentSectionProps {
  articleId: string
}

const mockComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "María González",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Excelente análisis. Me parece muy acertado el enfoque sobre la situación actual.",
    publishedAt: "Hace 2 horas",
    likes: 12,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Carlos Mendez",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "Totalmente de acuerdo, María. El periodismo de calidad es fundamental.",
        publishedAt: "Hace 1 hora",
        likes: 5,
        replies: [],
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Roberto Silva",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Muy interesante la perspectiva histórica que presenta el artículo. Aporta mucho contexto.",
    publishedAt: "Hace 4 horas",
    likes: 8,
    replies: [],
  },
]

export default function CommentSection({ articleId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "Usuario Anónimo",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: newComment,
      publishedAt: "Ahora",
      likes: 0,
      replies: [],
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  const handleSubmitReply = (e: React.FormEvent, parentId: string) => {
    e.preventDefault()
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: `${parentId}-${Date.now()}`,
      author: {
        name: "Usuario Anónimo",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: replyContent,
      publishedAt: "Ahora",
      likes: 0,
      replies: [],
    }

    setComments(
      comments.map((comment) =>
        comment.id === parentId ? { ...comment, replies: [...comment.replies, reply] } : comment,
      ),
    )
    setReplyContent("")
    setReplyingTo(null)
  }

  const CommentComponent = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`${isReply ? "ml-12" : ""} mb-6`}>
      <div className="flex gap-3">
        <Image
          src={comment.author.avatar || "/placeholder.svg"}
          alt={comment.author.name}
          width={40}
          height={40}
          className="rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="bg-light-gray rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-sm text-primary-black">{comment.author.name}</h4>
              <span className="text-xs text-text-gray">{comment.publishedAt}</span>
            </div>
            <p className="text-sm text-primary-black leading-relaxed">{comment.content}</p>
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-text-gray">
            <button className="flex items-center gap-1 hover:text-accent-gold transition-colors duration-200">
              <ThumbsUp className="w-3 h-3" />
              <span>{comment.likes}</span>
            </button>
            {!isReply && (
              <button
                onClick={() => setReplyingTo(comment.id)}
                className="flex items-center gap-1 hover:text-accent-gold transition-colors duration-200"
              >
                <Reply className="w-3 h-3" />
                <span>Responder</span>
              </button>
            )}
            <button className="flex items-center gap-1 hover:text-red-500 transition-colors duration-200">
              <Flag className="w-3 h-3" />
              <span>Reportar</span>
            </button>
          </div>

          {replyingTo === comment.id && (
            <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-4">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Escribe tu respuesta..."
                className="w-full p-3 border border-border-gray rounded-lg resize-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold outline-none"
                rows={3}
              />
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-accent-gold text-primary-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 text-sm"
                >
                  Responder
                </button>
                <button
                  type="button"
                  onClick={() => setReplyingTo(null)}
                  className="px-4 py-2 bg-gray-200 text-text-gray rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 text-sm"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}

          {comment.replies.map((reply) => (
            <CommentComponent key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <section className="mt-12 pt-8 border-t border-border-gray">
      <div className="flex items-center gap-2 mb-8">
        <MessageCircle className="w-5 h-5 text-accent-gold" />
        <h3 className="font-playfair text-2xl font-bold text-primary-black">Comentarios ({comments.length})</h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="¿Qué opinas sobre este artículo?"
          className="w-full p-4 border border-border-gray rounded-lg resize-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold outline-none"
          rows={4}
        />
        <div className="flex justify-between items-center mt-4">
          <p className="text-xs text-text-gray">
            Al comentar, aceptas nuestras{" "}
            <a href="#" className="text-accent-gold hover:underline">
              políticas de comentarios
            </a>
          </p>
          <button
            type="submit"
            className="px-6 py-2 bg-accent-gold text-primary-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
          >
            Publicar Comentario
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div>
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>

      {/* Load More Comments */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 border border-border-gray text-text-gray rounded-lg hover:border-accent-gold hover:text-accent-gold transition-colors duration-200">
          Cargar más comentarios
        </button>
      </div>
    </section>
  )
}
