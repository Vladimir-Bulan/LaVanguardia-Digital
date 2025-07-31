export interface Author {
  name: string
  bio: string
  role: string
  avatar?: string
  social?: {
    twitter?: string
    linkedin?: string
    email?: string
  }
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  author: Author
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  image: string
  imageCaption?: string
  featured?: boolean
  views?: number
}
