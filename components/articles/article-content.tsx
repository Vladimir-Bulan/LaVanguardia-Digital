"use client"

import Image from "next/image"
import SocialShare from "@/components/advanced/social-share"
import ArticleReactions from "@/components/advanced/article-reactions"
import NewsletterSignup from "@/components/articles/newsletter-signup"
import { Clock, Calendar, Tag, Eye, Bookmark } from "lucide-react"
import type { Article } from "@/types/article"

interface ArticleContentProps {
  article: Article
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="max-w-4xl">
      {/* Article Header */}
      <header className="mb-10">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center bg-accent-red text-white px-4 py-2 text-sm font-bold tracking-wide uppercase rounded-full">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-black mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="font-crimson text-xl sm:text-2xl text-text-gray leading-relaxed mb-8 border-l-4 border-accent-gold pl-6">
          {article.excerpt}
        </p>

        {/* Article Meta */}
        <div className="bg-light-gray rounded-2xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Author and Date */}
            <div className="flex items-center gap-4">
              <Image
                src={article.author.avatar || "/placeholder.svg?height=50&width=50"}
                alt={article.author.name}
                width={50}
                height={50}
                className="rounded-full object-cover border-2 border-accent-gold"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-primary-black text-lg">Por {article.author.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <Calendar className="w-4 h-4 text-accent-gold" />
                  <span>{article.publishedAt}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-text-gray">
                <Clock className="w-4 h-4 text-accent-gold" />
                <span>{article.readTime}</span>
              </div>
              {article.views && (
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <Eye className="w-4 h-4 text-accent-gold" />
                  <span>{article.views.toLocaleString()}</span>
                </div>
              )}
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border-gray rounded-lg hover:border-accent-gold transition-colors duration-200">
                <Bookmark className="w-4 h-4" />
                <span className="text-sm">Guardar</span>
              </button>
              <SocialShare title={article.title} />
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative mb-10">
        <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-hover">
          <Image
            src={article.image || "/placeholder.svg?height=500&width=1000"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        {article.imageCaption && (
          <div className="mt-4 text-center">
            <p className="text-sm text-text-gray italic">{article.imageCaption}</p>
          </div>
        )}
      </div>

      {/* Article Body */}
      <div className="prose prose-lg prose-gray max-w-none mb-12">
        <style jsx global>{`
          .prose {
            color: #1a1a1a;
            line-height: 1.8;
          }
          .prose .lead {
            font-size: 1.25rem;
            font-weight: 500;
            color: #2d2d2d;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: #f8f9fa;
            border-left: 4px solid #d4af37;
            border-radius: 0 8px 8px 0;
          }
          .prose h2 {
            font-family: var(--font-playfair);
            font-size: 2rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid #d4af37;
            padding-bottom: 0.5rem;
          }
          .prose h3 {
            font-family: var(--font-playfair);
            font-size: 1.5rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
          }
          .prose p {
            margin-bottom: 1.5rem;
            text-align: justify;
          }
          .prose blockquote {
            border-left: 4px solid #d4af37;
            background: #f8f9fa;
            padding: 1.5rem 2rem;
            margin: 2rem 0;
            font-style: italic;
            font-size: 1.1rem;
            border-radius: 0 8px 8px 0;
          }
          .prose ul, .prose ol {
            margin: 1.5rem 0;
            padding-left: 2rem;
          }
          .prose li {
            margin-bottom: 0.5rem;
            line-height: 1.7;
          }
          .prose strong {
            color: #1a1a1a;
            font-weight: 600;
          }
        `}</style>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* Tags */}
      <div className="bg-light-gray rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Tag className="w-5 h-5 text-accent-gold" />
          <h3 className="font-playfair text-xl font-bold text-primary-black">Temas relacionados</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {article.tags.map((tag) => (
            <button
              key={tag}
              className="bg-white text-text-gray px-4 py-2 rounded-full text-sm font-medium hover:bg-accent-gold hover:text-primary-black transition-all duration-200 border border-border-gray hover:border-accent-gold transform hover:scale-105"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Article Reactions */}
      <div className="bg-white border border-border-gray rounded-2xl p-6 mb-10 shadow-custom">
        <ArticleReactions />
      </div>

      {/* Newsletter Signup */}
      <div className="mb-12">
        <NewsletterSignup />
      </div>
    </div>
  )
}
