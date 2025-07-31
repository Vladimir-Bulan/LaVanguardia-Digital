import SectionLayout from "@/components/sections/section-layout"
import ArticleCard from "@/components/articles/article-card"

const culturaArticles = [
  {
    id: "festival-cine-mdp",
    title: "Festival de Cine de Mar del Plata bate récord de asistencia",
    excerpt:
      "Con más de 400,000 espectadores, el festival consolida su posición como el evento cinematográfico más importante de Latinoamérica. 15 países compiten por el Astor de Oro.",
    author: "Crítico de Cine",
    publishedAt: "Hace 1 hora",
    readTime: "7 min",
    category: "Cine",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "museo-malba-expansion",
    title: "MALBA inaugura nueva ala dedicada al arte digital contemporáneo",
    excerpt:
      "La ampliación incluye obras de artistas argentinos que trabajan con realidad virtual, NFTs y arte generativo, posicionando al museo a la vanguardia mundial.",
    author: "Arte Contemporáneo",
    publishedAt: "Hace 3 horas",
    readTime: "6 min",
    category: "Arte",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "tango-patrimonio-unesco",
    title: "UNESCO declara al tango argentino Patrimonio Inmaterial de la Humanidad",
    excerpt:
      "El reconocimiento internacional destaca la importancia cultural del tango como expresión artística única que trasciende fronteras y conecta culturas.",
    author: "Patrimonio Cultural",
    publishedAt: "Hace 5 horas",
    readTime: "5 min",
    category: "Patrimonio",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "literatura-premio-nacional",
    title: "Escritora argentina gana Premio Nacional de Literatura 2025",
    excerpt:
      "Claudia Piñeiro recibe el galardón por su obra 'Voces del Río', una novela que explora la identidad femenina en la Argentina contemporánea.",
    author: "Literatura Hoy",
    publishedAt: "Hace 7 horas",
    readTime: "4 min",
    category: "Literatura",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "teatro-colon-temporada",
    title: "Teatro Colón presenta temporada 2025 con artistas internacionales",
    excerpt:
      "La programación incluye óperas, ballets y conciertos sinfónicos con figuras mundiales, reafirmando la excelencia artística del teatro más importante del país.",
    author: "Música Clásica",
    publishedAt: "Hace 9 horas",
    readTime: "6 min",
    category: "Música",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "gastronomia-michelin",
    title: "Restaurantes argentinos brillan en nueva guía Michelin Sudamérica",
    excerpt:
      "Cinco establecimientos porteños reciben estrellas Michelin, consolidando a Buenos Aires como capital gastronómica regional junto a Lima y São Paulo.",
    author: "Gastronomía Gourmet",
    publishedAt: "Hace 11 horas",
    readTime: "5 min",
    category: "Gastronomía",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function CulturaPage() {
  const breadcrumbs = [{ name: "Cultura", href: "/cultura" }]

  return (
    <SectionLayout
      title="Cultura"
      description="El pulso cultural argentino: arte, cine, literatura, música y gastronomía. Cobertura de festivales, exposiciones y la escena cultural contemporánea."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="mb-8">
            <ArticleCard {...culturaArticles[0]} size="large" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturaArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} {...article} size="medium" />
            ))}
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white border border-border-gray rounded-lg p-6 shadow-custom mb-6">
            <h3 className="font-playfair text-xl font-bold mb-4">Agenda Cultural</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-accent-gold pl-4">
                <h4 className="font-semibold text-sm">Exposición Quinquela Martín</h4>
                <p className="text-xs text-text-gray">Museo Nacional de Bellas Artes</p>
                <p className="text-xs text-accent-gold">Hasta 15 de marzo</p>
              </div>
              <div className="border-l-4 border-accent-red pl-4">
                <h4 className="font-semibold text-sm">Concierto Sinfónico</h4>
                <p className="text-xs text-text-gray">Teatro Colón</p>
                <p className="text-xs text-accent-red">Sábado 20:00 hs</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-sm">Feria del Libro</h4>
                <p className="text-xs text-text-gray">La Rural</p>
                <p className="text-xs text-blue-500">Abril 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4">Recomendados</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-sm">📚 "Voces del Río"</h4>
                <p className="text-xs text-text-gray">Claudia Piñeiro</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-sm">🎬 "El Último Tango"</h4>
                <p className="text-xs text-text-gray">Cine Atlas</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-sm">🎭 "Esperando a Godot"</h4>
                <p className="text-xs text-text-gray">Teatro San Martín</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
