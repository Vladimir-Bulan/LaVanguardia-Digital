import Image from "next/image"
import Link from "next/link"
import { getRelatedArticles } from "@/lib/articles"
import { Twitter, Linkedin, Mail, TrendingUp, Clock, Users } from "lucide-react"
import type { Article } from "@/types/article"

interface ArticleSidebarProps {
  article: Article
}

export default function ArticleSidebar({ article }: ArticleSidebarProps) {
  const relatedArticles = getRelatedArticles(article.slug, article.category)

  return (
    <div className="space-y-8">
      {/* Author Card */}
      <div className="bg-white border border-border-gray rounded-2xl p-6 shadow-custom">
        <div className="text-center mb-6">
          <Image
            src={article.author.avatar || "/placeholder.svg?height=80&width=80"}
            alt={article.author.name}
            width={80}
            height={80}
            className="rounded-full object-cover mx-auto mb-4 border-3 border-accent-gold"
          />
          <h3 className="font-playfair text-xl font-bold text-primary-black mb-1">{article.author.name}</h3>
          <p className="text-sm text-accent-gold font-medium mb-2">{article.author.role}</p>
          <p className="text-sm text-text-gray leading-relaxed">{article.author.bio}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 pt-4 border-t border-border-gray">
          {article.author.social?.twitter && (
            <a
              href={article.author.social.twitter}
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {article.author.social?.linkedin && (
            <a
              href={article.author.social.linkedin}
              className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          <button className="w-10 h-10 bg-accent-gold text-primary-black rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Article Stats */}
      <div className="bg-gradient-to-br from-accent-gold/10 to-yellow-100 rounded-2xl p-6">
        <h3 className="font-playfair text-lg font-bold text-primary-black mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent-gold" />
          Estadísticas
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-gray flex items-center gap-2">
              <Users className="w-4 h-4" />
              Lecturas
            </span>
            <span className="font-bold text-primary-black">{article.views?.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-gray flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Tiempo de lectura
            </span>
            <span className="font-bold text-primary-black">{article.readTime}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-gray">Categoría</span>
            <span className="bg-accent-red text-white px-2 py-1 rounded-full text-xs font-bold">
              {article.category}
            </span>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-light-gray rounded-2xl p-6">
        <h3 className="font-playfair text-xl font-bold text-primary-black mb-6">Artículos Relacionados</h3>
        <div className="space-y-4">
          {relatedArticles.length > 0 ? (
            relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/articulo/${relatedArticle.slug}`}
                className="block group hover:bg-white p-4 rounded-xl transition-all duration-200 border border-transparent hover:border-accent-gold hover:shadow-custom"
              >
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={relatedArticle.image || "/placeholder.svg?height=80&width=80"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-primary-black group-hover:text-accent-gold transition-colors duration-200 line-clamp-2 mb-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-xs text-text-gray">{relatedArticle.publishedAt}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-text-gray text-center py-4">No hay artículos relacionados disponibles</p>
          )}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white border border-border-gray rounded-2xl p-6 shadow-custom">
        <h3 className="font-playfair text-xl font-bold text-primary-black mb-6">Más Leídos Hoy</h3>
        <div className="space-y-4">
          {[
            { title: "Revolución Digital: Argentina Lidera la Transformación", views: "15.4K" },
            { title: "Inflación Desciende al Mínimo de los Últimos Cinco Años", views: "12.8K" },
            { title: "Startup Argentina Desarrolla Tecnología Cuántica", views: "11.2K" },
            { title: "Messi Anuncia su Retiro del Fútbol Internacional", views: "9.8K" },
            { title: "Buenos Aires Elegida Capital Mundial del Libro", views: "8.5K" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 hover:bg-light-gray rounded-lg transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-primary-black font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-primary-black line-clamp-2 mb-1">{item.title}</h4>
                <p className="text-xs text-text-gray">{item.views} lecturas</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-primary-black to-secondary-black text-white rounded-2xl p-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-primary-black" />
          </div>
          <h3 className="font-playfair text-lg font-bold mb-3">¿Te gustó este artículo?</h3>
          <p className="text-sm opacity-90 mb-4">
            Recibe contenido exclusivo y análisis profundos directamente en tu correo.
          </p>
          <button className="w-full bg-accent-gold text-primary-black py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
            Suscribirme Gratis
          </button>
        </div>
      </div>
    </div>
  )
}
