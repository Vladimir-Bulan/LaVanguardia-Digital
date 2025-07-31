"use client"

import type React from "react"

import { useState } from "react"
import { Heart, ThumbsUp, Laugh, Frown, SmileIcon as Surprise } from "lucide-react"

interface Reaction {
  id: string
  icon: React.ReactNode
  label: string
  count: number
  color: string
}

const reactions: Reaction[] = [
  { id: "like", icon: <ThumbsUp className="w-4 h-4" />, label: "Me gusta", count: 234, color: "text-blue-500" },
  { id: "love", icon: <Heart className="w-4 h-4" />, label: "Me encanta", count: 89, color: "text-red-500" },
  { id: "laugh", icon: <Laugh className="w-4 h-4" />, label: "Divertido", count: 45, color: "text-yellow-500" },
  { id: "surprise", icon: <Surprise className="w-4 h-4" />, label: "Sorpresa", count: 67, color: "text-purple-500" },
  { id: "sad", icon: <Frown className="w-4 h-4" />, label: "Triste", count: 23, color: "text-gray-500" },
]

export default function ArticleReactions() {
  const [userReaction, setUserReaction] = useState<string | null>(null)
  const [reactionCounts, setReactionCounts] = useState(reactions)
  const [showAll, setShowAll] = useState(false)

  const handleReaction = (reactionId: string) => {
    setReactionCounts((prev) =>
      prev.map((reaction) => {
        if (reaction.id === reactionId) {
          return {
            ...reaction,
            count: userReaction === reactionId ? reaction.count - 1 : reaction.count + 1,
          }
        }
        if (reaction.id === userReaction) {
          return { ...reaction, count: reaction.count - 1 }
        }
        return reaction
      }),
    )

    setUserReaction(userReaction === reactionId ? null : reactionId)
  }

  const totalReactions = reactionCounts.reduce((sum, reaction) => sum + reaction.count, 0)
  const topReactions = reactionCounts.sort((a, b) => b.count - a.count).slice(0, 3)

  return (
    <div className="border-t border-border-gray pt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {topReactions.map((reaction) => (
              <div
                key={reaction.id}
                className={`w-6 h-6 rounded-full bg-white border-2 border-white flex items-center justify-center ${reaction.color}`}
              >
                {reaction.icon}
              </div>
            ))}
          </div>
          <span className="text-sm text-text-gray">{totalReactions} reacciones</span>
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-accent-gold hover:text-yellow-600 transition-colors duration-200"
        >
          {showAll ? "Ocultar" : "Ver todas"}
        </button>
      </div>

      <div className={`grid gap-2 transition-all duration-300 ${showAll ? "grid-cols-3" : "grid-cols-6"}`}>
        {(showAll ? reactionCounts : topReactions).map((reaction) => (
          <button
            key={reaction.id}
            onClick={() => handleReaction(reaction.id)}
            className={`flex items-center gap-2 p-2 rounded-lg border transition-all duration-200 ${
              userReaction === reaction.id
                ? "border-accent-gold bg-yellow-50 scale-105"
                : "border-border-gray hover:border-accent-gold hover:bg-light-gray"
            }`}
          >
            <span className={reaction.color}>{reaction.icon}</span>
            {showAll && <span className="text-sm">{reaction.label}</span>}
            <span className="text-sm font-medium">{reaction.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
