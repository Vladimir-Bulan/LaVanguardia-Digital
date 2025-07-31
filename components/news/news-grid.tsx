"use client"

import NewsCardClickable from "./news-card-clickable"

const newsArticles = [
  {
    id: 1,
    slug: "messi-retiro-futbol-internacional",
    category: "Deportes",
    title: "Messi Anuncia su Retiro del Fútbol Internacional",
    excerpt:
      "El capitán de la selección argentina confirmó que el próximo Mundial será su última participación con la camiseta albiceleste, cerrando una era dorada...",
    author: "Roberto Silva",
    publishedAt: "Hace 4 horas",
    readTime: "5 min",
    image: "/placeholder.svg?height=240&width=400",
    views: 25430,
  },
  {
    id: 2,
    slug: "cientificos-argentinos-antartida",
    category: "Ciencia",
    title: "Científicos Argentinos Descubren Nueva Especie en la Antártida",
    excerpt:
      "El hallazgo podría revolucionar nuestra comprensión sobre la adaptación de la vida en condiciones extremas y el cambio climático...",
    author: "Dra. Ana Pérez",
    publishedAt: "Hace 6 horas",
    readTime: "7 min",
    image: "/placeholder.svg?height=240&width=400",
    views: 18920,
  },
  {
    id: 3,
    slug: "argentina-energia-solar-sudamerica",
    category: "Tecnología",
    title: "Argentina Lanza el Mayor Proyecto de Energía Solar de Sudamérica",
    excerpt:
      "La iniciativa generará energía limpia para 2 millones de hogares y creará más de 15,000 empleos verdes en las próximas tres décadas...",
    author: "Laura Fernández",
    publishedAt: "Hace 8 horas",
    readTime: "6 min",
    image: "/placeholder.svg?height=240&width=400",
    views: 16750,
  },
  {
    id: 4,
    slug: "terapia-genica-cancer-argentina",
    category: "Ciencia",
    title: "Terapia Génica Argentina Muestra Resultados Prometedores Contra el Cáncer",
    excerpt:
      "Los ensayos clínicos desarrollados en el Instituto Leloir demuestran una eficacia del 85% en casos de leucemia infantil avanzada...",
    author: "Dr. Roberto Méndez",
    publishedAt: "Hace 10 horas",
    readTime: "8 min",
    image: "/placeholder.svg?height=240&width=400",
    views: 14230,
  },
  {
    id: 5,
    slug: "buenos-aires-capital-mundial-libro",
    category: "Cultura",
    title: "Buenos Aires Elegida Capital Mundial del Libro 2026",
    excerpt:
      "La UNESCO reconoce el compromiso de la ciudad con la promoción de la lectura y las industrias culturales creativas...",
    author: "Sofía Martín",
    publishedAt: "Hace 12 horas",
    readTime: "4 min",
    image: "/placeholder.svg?height=240&width=400",
    views: 12890,
  },
  {
    id: 6,
    slug: "revolucion-digital-aulas-ia",
    category: "Tecnología",
    title: "Revolución Digital en las Aulas: IA Personaliza el Aprendizaje",
    excerpt:
      "El programa piloto implementado en 500 escuelas muestra mejoras del 40% en el rendimiento académico estudiantil...",
    author: "Pedro Vega",
    publishedAt: "Hace 14 horas",
    readTime: "6 min",
    image: "/placeholder.svg?height=240&width=400",
    views: 11450,
  },
]

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {newsArticles.map((article) => (
        <NewsCardClickable
          key={article.id}
          id={article.id.toString()}
          slug={article.slug}
          title={article.title}
          excerpt={article.excerpt}
          author={article.author}
          publishedAt={article.publishedAt}
          readTime={article.readTime}
          category={article.category}
          image={article.image}
          views={article.views}
        />
      ))}
    </div>
  )
}
