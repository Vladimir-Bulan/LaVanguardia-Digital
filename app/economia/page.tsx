import SectionLayout from "@/components/sections/section-layout"
import ArticleCard from "@/components/articles/article-card"

const economiaArticles = [
  {
    id: "inflacion-enero-2025",
    title: "Inflación de enero marca el menor registro en cinco años",
    excerpt:
      "El índice de precios al consumidor registró un 2.1% mensual, consolidando la tendencia descendente iniciada en el último trimestre de 2024. Los analistas destacan el impacto de las políticas monetarias.",
    author: "Dra. Patricia Economou",
    publishedAt: "Hace 1 hora",
    readTime: "7 min",
    category: "Indicadores",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "exportaciones-record",
    title: "Exportaciones agrícolas alcanzan récord histórico en 2024",
    excerpt:
      "Las ventas al exterior de productos agropecuarios superaron los USD 45.000 millones, impulsadas por la excelente cosecha de soja y trigo, y los precios internacionales favorables.",
    author: "Miguel Rodríguez",
    publishedAt: "Hace 3 horas",
    readTime: "6 min",
    category: "Comercio Exterior",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "inversion-tecnologia",
    title: "Inversión extranjera en tecnología creció 340% en el último año",
    excerpt:
      "Empresas internacionales apostaron fuerte al talento argentino, estableciendo centros de desarrollo y oficinas regionales. El sector tech se consolida como motor económico.",
    author: "Carolina Tech",
    publishedAt: "Hace 5 horas",
    readTime: "8 min",
    category: "Tecnología",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "mercado-inmobiliario",
    title: "Mercado inmobiliario muestra signos de recuperación en CABA",
    excerpt:
      "Las operaciones de compraventa aumentaron 25% interanual, mientras que los precios se estabilizaron después de dos años de ajustes. El crédito hipotecario impulsa la demanda.",
    author: "Andrés Inmobiliario",
    publishedAt: "Hace 7 horas",
    readTime: "5 min",
    category: "Inmobiliario",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "energia-renovable",
    title: "Argentina lidera inversión en energías renovables en Sudamérica",
    excerpt:
      "Con proyectos por USD 8.000 millones, el país se posiciona como referente regional en transición energética. Los parques eólicos y solares generan miles de empleos.",
    author: "Sustentable Verde",
    publishedAt: "Hace 9 horas",
    readTime: "6 min",
    category: "Energía",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "pymes-crecimiento",
    title: "PyMEs registran mayor crecimiento en una década",
    excerpt:
      "Las pequeñas y medianas empresas expandieron su facturación 18% en términos reales, beneficiadas por programas de financiamiento y la digitalización de procesos.",
    author: "Empresario Pyme",
    publishedAt: "Hace 11 horas",
    readTime: "4 min",
    category: "PyMEs",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function EconomiaPage() {
  const breadcrumbs = [{ name: "Economía", href: "/economia" }]

  return (
    <SectionLayout
      title="Economía"
      description="Análisis económico integral con datos actualizados sobre inflación, mercados, inversiones y políticas fiscales que impactan en la economía argentina."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="mb-8">
            <ArticleCard {...economiaArticles[0]} size="large" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {economiaArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} {...article} size="medium" />
            ))}
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white border border-border-gray rounded-lg p-6 shadow-custom mb-6">
            <h3 className="font-playfair text-xl font-bold mb-4">Indicadores Económicos</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Dólar Oficial</span>
                <span className="font-bold text-green-600">$945.50 ↗</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Dólar Blue</span>
                <span className="font-bold text-red-600">$1,180.00 ↘</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Riesgo País</span>
                <span className="font-bold text-yellow-600">1,245 pts →</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Merval</span>
                <span className="font-bold text-green-600">1,890,234 ↗</span>
              </div>
            </div>
          </div>

          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4">Agenda Económica</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <strong>Hoy:</strong> Reunión BCRA
              </div>
              <div className="text-sm">
                <strong>Mañana:</strong> Datos de empleo
              </div>
              <div className="text-sm">
                <strong>Viernes:</strong> Balanza comercial
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
