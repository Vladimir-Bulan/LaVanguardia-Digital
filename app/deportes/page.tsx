import SectionLayout from "@/components/sections/section-layout"
import ArticleCard from "@/components/articles/article-card"

const deportesArticles = [
  {
    id: "messi-despedida-seleccion",
    title: "Messi confirma que el Mundial 2026 será su última participación con Argentina",
    excerpt:
      "El capitán de la Albiceleste anuncia oficialmente que la Copa del Mundo de Estados Unidos, México y Canadá marcará el final de su carrera internacional, cerrando una era dorada.",
    author: "Deportes Internacionales",
    publishedAt: "Hace 30 min",
    readTime: "8 min",
    category: "Fútbol Internacional",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "boca-river-superclasico",
    title: "Boca y River empatan en un Superclásico histórico en la Bombonera",
    excerpt:
      "Con 60,000 espectadores y un espectáculo deportivo de primer nivel, el clásico terminó 2-2 con goles de Cavani y Borja para Boca, y Solari y Beltrán para River.",
    author: "Fútbol Local",
    publishedAt: "Hace 2 horas",
    readTime: "7 min",
    category: "Fútbol Argentino",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "del-potro-comeback",
    title: "Del Potro anuncia su regreso al tenis profesional tras dos años",
    excerpt:
      "El tandilense confirma su participación en el Argentina Open 2025, después de superar las lesiones que lo alejaron de las canchas durante 24 meses.",
    author: "Tenis Nacional",
    publishedAt: "Hace 4 horas",
    readTime: "6 min",
    category: "Tenis",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "pumas-rugby-championship",
    title: "Los Pumas se consagran campeones del Rugby Championship",
    excerpt:
      "Argentina derrota a Sudáfrica 28-21 en el último partido y se corona campeón por primera vez en la historia del torneo más importante del hemisferio sur.",
    author: "Rugby Internacional",
    publishedAt: "Hace 6 horas",
    readTime: "5 min",
    category: "Rugby",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "basquet-mundial-femenino",
    title: "Las Gigantes clasifican al Mundial de Básquet Femenino",
    excerpt:
      "La selección argentina de básquet femenino asegura su lugar en el Mundial 2025 tras vencer a Brasil en el Sudamericano disputado en Colombia.",
    author: "Básquet Femenino",
    publishedAt: "Hace 8 horas",
    readTime: "4 min",
    category: "Básquet",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "formula1-colapinto",
    title: "Franco Colapinto logra su primer podio en la Fórmula 1",
    excerpt:
      "El piloto argentino termina tercero en el Gran Premio de Brasil, convirtiéndose en el primer argentino en subir al podio desde Carlos Reutemann en 1981.",
    author: "Automovilismo",
    publishedAt: "Hace 10 horas",
    readTime: "6 min",
    category: "Automovilismo",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function DeportesPage() {
  const breadcrumbs = [{ name: "Deportes", href: "/deportes" }]

  return (
    <SectionLayout
      title="Deportes"
      description="Toda la actualidad deportiva argentina e internacional. Fútbol, tenis, rugby, básquet y todos los deportes con análisis experto y cobertura en vivo."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="mb-8">
            <ArticleCard {...deportesArticles[0]} size="large" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deportesArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} {...article} size="medium" />
            ))}
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white border border-border-gray rounded-lg p-6 shadow-custom mb-6">
            <h3 className="font-playfair text-xl font-bold mb-4">Tabla de Posiciones</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>1. River Plate</span>
                <span className="font-bold">45 pts</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>2. Boca Juniors</span>
                <span className="font-bold">42 pts</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>3. Racing Club</span>
                <span className="font-bold">38 pts</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>4. Independiente</span>
                <span className="font-bold">35 pts</span>
              </div>
            </div>
          </div>

          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4">Próximos Partidos</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">River vs Boca</span>
                  <span className="text-xs text-accent-red">DOMINGO</span>
                </div>
                <p className="text-xs text-text-gray">17:00 hs - Monumental</p>
              </div>
              <div className="bg-white p-3 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Argentina vs Brasil</span>
                  <span className="text-xs text-accent-gold">MARTES</span>
                </div>
                <p className="text-xs text-text-gray">21:00 hs - Eliminatorias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
