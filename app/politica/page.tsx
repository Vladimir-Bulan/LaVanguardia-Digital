import SectionLayout from "@/components/sections/section-layout"
import ArticleCard from "@/components/articles/article-card"
import LiveUpdates from "@/components/advanced/live-updates"

const politicaArticles = [
  {
    id: "reforma-judicial-2025",
    title: "Congreso aprueba reforma judicial con amplio consenso político",
    excerpt:
      "La nueva legislación moderniza el sistema judicial argentino, incorporando tecnología digital y agilizando los procesos. La medida cuenta con el apoyo de todas las fuerzas políticas.",
    author: "Dr. Carlos Mendoza",
    publishedAt: "Hace 2 horas",
    readTime: "8 min",
    category: "Política Nacional",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "elecciones-provinciales",
    title: "Resultados preliminares muestran alta participación en elecciones provinciales",
    excerpt:
      "Con un 78% de participación ciudadana, las elecciones en cinco provincias reflejan el compromiso democrático. Los primeros resultados indican una distribución equilibrada del voto.",
    author: "María Elena Vásquez",
    publishedAt: "Hace 4 horas",
    readTime: "6 min",
    category: "Elecciones",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "acuerdo-oposicion",
    title: "Oposición y oficialismo alcanzan acuerdo histórico en materia educativa",
    excerpt:
      "Después de meses de negociaciones, se logró un consenso para aumentar el presupuesto educativo en un 25% y modernizar la infraestructura escolar en todo el país.",
    author: "Roberto Silva",
    publishedAt: "Hace 6 horas",
    readTime: "5 min",
    category: "Educación",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "reforma-previsional",
    title: "Nueva propuesta de reforma previsional genera debate en el Senado",
    excerpt:
      "La iniciativa busca garantizar la sostenibilidad del sistema jubilatorio a largo plazo, incorporando nuevos mecanismos de financiamiento y beneficios para los trabajadores.",
    author: "Ana Patricia López",
    publishedAt: "Hace 8 horas",
    readTime: "7 min",
    category: "Seguridad Social",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "cumbre-mercosur",
    title: "Argentina asume la presidencia pro témpore del Mercosur",
    excerpt:
      "El país liderará el bloque regional durante los próximos seis meses, con una agenda centrada en la integración digital y el comercio sustentable entre los países miembros.",
    author: "Diego Fernández",
    publishedAt: "Hace 10 horas",
    readTime: "6 min",
    category: "Relaciones Exteriores",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "transparencia-publica",
    title: "Gobierno lanza plataforma digital de transparencia y acceso a la información",
    excerpt:
      "La nueva herramienta permitirá a los ciudadanos acceder en tiempo real a información sobre el gasto público, licitaciones y decisiones gubernamentales.",
    author: "Lucía Morales",
    publishedAt: "Hace 12 horas",
    readTime: "4 min",
    category: "Transparencia",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function PoliticaPage() {
  const breadcrumbs = [{ name: "Política", href: "/politica" }]

  return (
    <SectionLayout
      title="Política"
      description="Análisis profundo de la actualidad política nacional e internacional. Cobertura completa del Congreso, elecciones y decisiones gubernamentales."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {politicaArticles.slice(0, 2).map((article, index) => (
              <ArticleCard key={article.id} {...article} size={index === 0 ? "large" : "medium"} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {politicaArticles.slice(2).map((article) => (
              <ArticleCard key={article.id} {...article} size="medium" />
            ))}
          </div>
        </div>

        <div className="xl:col-span-1">
          <LiveUpdates />
          <div className="mt-8 bg-light-gray p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4">Próximos Eventos</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-accent-gold pl-4">
                <h4 className="font-semibold text-sm">Sesión Extraordinaria</h4>
                <p className="text-xs text-text-gray">Mañana, 14:00 hs</p>
              </div>
              <div className="border-l-4 border-accent-red pl-4">
                <h4 className="font-semibold text-sm">Debate Presupuestario</h4>
                <p className="text-xs text-text-gray">Viernes, 10:00 hs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
