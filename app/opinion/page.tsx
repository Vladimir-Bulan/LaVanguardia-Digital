import SectionLayout from "@/components/sections/section-layout"
import ArticleCard from "@/components/articles/article-card"

const opinionArticles = [
  {
    id: "futuro-democracia-argentina",
    title: "El futuro de la democracia argentina en la era digital",
    excerpt:
      "Las nuevas tecnologías plantean desafíos y oportunidades para fortalecer la participación ciudadana. Es hora de repensar nuestras instituciones para el siglo XXI.",
    author: "Dr. Roberto Gargarella",
    publishedAt: "Hace 2 horas",
    readTime: "12 min",
    category: "Análisis Político",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "economia-post-pandemia",
    title: "Lecciones económicas de la post-pandemia: hacia un nuevo modelo",
    excerpt:
      "La crisis sanitaria nos enseñó la importancia de la resiliencia económica. Argentina tiene la oportunidad de construir un modelo más inclusivo y sustentable.",
    author: "Dra. Marina Dal Poggetto",
    publishedAt: "Hace 4 horas",
    readTime: "10 min",
    category: "Economía",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "educacion-siglo-xxi",
    title: "Educación para el siglo XXI: más allá de la digitalización",
    excerpt:
      "No basta con incorporar tecnología en las aulas. Necesitamos repensar qué enseñamos y cómo preparamos a las nuevas generaciones para un mundo en constante cambio.",
    author: "Prof. Inés Dussel",
    publishedAt: "Hace 6 horas",
    readTime: "9 min",
    category: "Educación",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "cambio-climatico-argentina",
    title: "Argentina ante el cambio climático: oportunidad o amenaza",
    excerpt:
      "El país tiene recursos únicos para liderar la transición energética global, pero necesita políticas coherentes y visión de largo plazo para aprovechar esta ventaja.",
    author: "Dr. Pablo Canziani",
    publishedAt: "Hace 8 horas",
    readTime: "11 min",
    category: "Medio Ambiente",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "cultura-identidad-nacional",
    title: "Cultura e identidad nacional en tiempos de globalización",
    excerpt:
      "¿Cómo preservar nuestra identidad cultural sin cerrarnos al mundo? El desafío de ser argentinos en un mundo globalizado requiere equilibrio y creatividad.",
    author: "Lic. Beatriz Sarlo",
    publishedAt: "Hace 10 horas",
    readTime: "8 min",
    category: "Cultura",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "juventud-futuro-pais",
    title: "La juventud argentina: protagonista del cambio que viene",
    excerpt:
      "Las nuevas generaciones tienen una visión diferente del país y del mundo. Es fundamental escuchar sus voces y crear espacios para su participación activa.",
    author: "Lic. Sergio Balardini",
    publishedAt: "Hace 12 horas",
    readTime: "7 min",
    category: "Sociedad",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function OpinionPage() {
  const breadcrumbs = [{ name: "Opinión", href: "/opinion" }]

  return (
    <SectionLayout
      title="Opinión"
      description="Análisis profundo y perspectivas expertas sobre los temas que definen nuestro tiempo. Voces autorizadas reflexionan sobre el presente y futuro argentino."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="mb-8">
            <ArticleCard {...opinionArticles[0]} size="large" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opinionArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} {...article} size="medium" />
            ))}
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white border border-border-gray rounded-lg p-6 shadow-custom mb-6">
            <h3 className="font-playfair text-xl font-bold mb-4">Columnistas Destacados</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-black">RG</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Roberto Gargarella</h4>
                  <p className="text-xs text-text-gray">Constitucionalista</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">MD</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Marina Dal Poggetto</h4>
                  <p className="text-xs text-text-gray">Economista</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">BS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Beatriz Sarlo</h4>
                  <p className="text-xs text-text-gray">Crítica Cultural</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4">Temas del Momento</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">#DemocraciaDigital</span>
                <span className="text-xs bg-accent-gold text-primary-black px-2 py-1 rounded">Trending</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">#EconomíaVerde</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Popular</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">#EducaciónXXI</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Debate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
