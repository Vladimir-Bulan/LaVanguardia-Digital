import SectionLayout from "@/components/sections/section-layout"
import ArticleCard from "@/components/articles/article-card"

const internacionalArticles = [
  {
    id: "cumbre-g20-brasil",
    title: "Cumbre del G20 en Brasil aborda crisis climática y comercio global",
    excerpt:
      "Los líderes mundiales se reúnen en Río de Janeiro para discutir estrategias conjuntas contra el cambio climático y establecer nuevas reglas para el comercio internacional post-pandemia.",
    author: "Corresponsal Internacional",
    publishedAt: "Hace 30 min",
    readTime: "9 min",
    category: "Diplomacia",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "elecciones-europa",
    title: "Elecciones europeas reflejan giro hacia políticas ambientales",
    excerpt:
      "Los partidos verdes obtienen resultados históricos en Francia, Alemania y Países Bajos, marcando una nueva era en la política europea centrada en la sostenibilidad.",
    author: "Elena Europea",
    publishedAt: "Hace 2 horas",
    readTime: "7 min",
    category: "Europa",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "conflicto-medio-oriente",
    title: "Nuevo acuerdo de paz en Medio Oriente genera esperanzas",
    excerpt:
      "Después de meses de mediación internacional, se alcanza un alto al fuego duradero que incluye ayuda humanitaria y reconstrucción de infraestructura civil.",
    author: "Corresponsal Medio Oriente",
    publishedAt: "Hace 4 horas",
    readTime: "8 min",
    category: "Medio Oriente",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "economia-china",
    title: "China anuncia plan de estímulo económico de USD 2 billones",
    excerpt:
      "El gigante asiático implementa medidas para reactivar su economía post-COVID, con foco en infraestructura digital y energías renovables, impactando mercados globales.",
    author: "Analista Asia",
    publishedAt: "Hace 6 horas",
    readTime: "6 min",
    category: "Asia",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "migracion-america",
    title: "Cumbre Americana propone solución integral a crisis migratoria",
    excerpt:
      "Los países del continente acuerdan un plan coordinado para abordar las causas de la migración, incluyendo inversión en desarrollo y programas de trabajo temporal.",
    author: "Reportero América",
    publishedAt: "Hace 8 horas",
    readTime: "7 min",
    category: "América",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "tecnologia-africa",
    title: "África emerge como nuevo hub tecnológico mundial",
    excerpt:
      "Países como Nigeria, Kenia y Sudáfrica atraen inversiones millonarias en startups, posicionando al continente como el próximo Silicon Valley global.",
    author: "Tech África",
    publishedAt: "Hace 10 horas",
    readTime: "5 min",
    category: "África",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function InternacionalPage() {
  const breadcrumbs = [{ name: "Internacional", href: "/internacional" }]

  return (
    <SectionLayout
      title="Internacional"
      description="Cobertura global de los acontecimientos más relevantes. Análisis geopolítico, economía mundial y relaciones internacionales desde una perspectiva argentina."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="mb-8">
            <ArticleCard {...internacionalArticles[0]} size="large" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internacionalArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} {...article} size="medium" />
            ))}
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white border border-border-gray rounded-lg p-6 shadow-custom mb-6">
            <h3 className="font-playfair text-xl font-bold mb-4">Mundo en Cifras</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-sm">Europa</h4>
                <p className="text-xs text-text-gray">Inflación: 2.8% anual</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-sm">Estados Unidos</h4>
                <p className="text-xs text-text-gray">Fed Rate: 4.75%</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-sm">China</h4>
                <p className="text-xs text-text-gray">PIB: +5.2% anual</p>
              </div>
            </div>
          </div>

          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4">Corresponsales</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-xs font-bold">
                  NY
                </div>
                <div>
                  <p className="text-sm font-medium">Nueva York</p>
                  <p className="text-xs text-text-gray">María González</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center text-xs font-bold">
                  EU
                </div>
                <div>
                  <p className="text-sm font-medium">Bruselas</p>
                  <p className="text-xs text-text-gray">Carlos Mendez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
