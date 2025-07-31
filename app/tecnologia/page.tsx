import SectionLayout from "@/components/sections/section-layout"
import ArticleCard from "@/components/articles/article-card"

const tecnologiaArticles = [
  {
    id: "ia-argentina-breakthrough",
    title: "Startup argentina desarrolla IA que revoluciona diagnósticos médicos",
    excerpt:
      "MediAI, empresa fundada en Buenos Aires, logra 99.7% de precisión en detección temprana de cáncer. Google y Microsoft compiten por invertir USD 50 millones en la compañía.",
    author: "Tech Reporter",
    publishedAt: "Hace 45 min",
    readTime: "8 min",
    category: "Inteligencia Artificial",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: "5g-argentina-expansion",
    title: "Red 5G se expande a 15 ciudades argentinas en 2025",
    excerpt:
      "La nueva infraestructura promete velocidades 100 veces superiores al 4G, habilitando ciudades inteligentes, telemedicina avanzada y realidad aumentada masiva.",
    author: "Conectividad News",
    publishedAt: "Hace 2 horas",
    readTime: "6 min",
    category: "Telecomunicaciones",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "criptomonedas-regulacion",
    title: "Argentina presenta marco regulatorio integral para criptomonedas",
    excerpt:
      "La nueva legislación establece reglas claras para exchanges, DeFi y NFTs, posicionando al país como líder regional en adopción de activos digitales.",
    author: "Crypto Analyst",
    publishedAt: "Hace 4 horas",
    readTime: "7 min",
    category: "Blockchain",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "quantum-computing-conicet",
    title: "CONICET inaugura primer laboratorio de computación cuántica",
    excerpt:
      "La inversión de USD 25 millones coloca a Argentina en el mapa mundial de la computación cuántica, con aplicaciones en criptografía y simulación molecular.",
    author: "Science Tech",
    publishedAt: "Hace 6 horas",
    readTime: "9 min",
    category: "Computación Cuántica",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "gaming-argentina-boom",
    title: "Industria del gaming argentina factura USD 500 millones en 2024",
    excerpt:
      "Estudios locales como Team17 y Nimble Giant Entertainment exportan juegos a nivel mundial, consolidando a Argentina como potencia regional en desarrollo de videojuegos.",
    author: "Gaming Industry",
    publishedAt: "Hace 8 horas",
    readTime: "5 min",
    category: "Gaming",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "satelites-argentina-space",
    title: "Argentina lanza constelación de satélites para internet rural",
    excerpt:
      "El proyecto ARSAT-SG llevará conectividad de alta velocidad a zonas remotas del país, beneficiando a 2 millones de habitantes en áreas rurales.",
    author: "Space Reporter",
    publishedAt: "Hace 10 horas",
    readTime: "6 min",
    category: "Espacio",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function TecnologiaPage() {
  const breadcrumbs = [{ name: "Tecnología", href: "/tecnologia" }]

  return (
    <SectionLayout
      title="Tecnología"
      description="Las últimas innovaciones tecnológicas, startups argentinas, inteligencia artificial y transformación digital que está cambiando el mundo."
      breadcrumbs={breadcrumbs}
    >
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-3">
          <div className="mb-8">
            <ArticleCard {...tecnologiaArticles[0]} size="large" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tecnologiaArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} {...article} size="medium" />
            ))}
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="bg-white border border-border-gray rounded-lg p-6 shadow-custom mb-6">
            <h3 className="font-playfair text-xl font-bold mb-4">Tech Trends</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">🤖 IA Generativa</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+340%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">🔗 Blockchain</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">+180%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">🥽 Realidad Virtual</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">+220%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">⚡ Computación Cuántica</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">+150%</span>
              </div>
            </div>
          </div>

          <div className="bg-light-gray p-6 rounded-lg">
            <h3 className="font-playfair text-xl font-bold mb-4">Startups Destacadas</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border-l-4 border-accent-gold">
                <h4 className="font-semibold text-sm">MediAI</h4>
                <p className="text-xs text-text-gray">Diagnósticos médicos con IA</p>
                <p className="text-xs text-accent-gold">Valuación: USD 200M</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-accent-red">
                <h4 className="font-semibold text-sm">AgriTech Solutions</h4>
                <p className="text-xs text-text-gray">Agricultura de precisión</p>
                <p className="text-xs text-accent-red">Valuación: USD 85M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
