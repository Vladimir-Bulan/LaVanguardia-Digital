import NewsGrid from "@/components/news/news-grid"

export default function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto my-16 px-8">
      <div className="text-center mb-12 relative">
        <h2 className="font-playfair text-4xl font-bold text-primary-black mb-4">Últimas Noticias</h2>
        <p className="text-sm text-text-gray uppercase tracking-[2px]">Información verificada y análisis profundo</p>
      </div>
      <NewsGrid />
    </section>
  )
}
