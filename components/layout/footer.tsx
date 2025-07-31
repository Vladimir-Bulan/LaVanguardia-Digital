const footerSections = [
  {
    title: "La Vanguardia Digital",
    content: [
      "Desde 1950, comprometidos con el periodismo de calidad, la verdad y la excelencia informativa. Líderes en innovación digital y análisis profundo.",
      "Reconocidos con el Premio Nacional de Periodismo 2024 y miembro del Consejo Mundial de Medios Digitales.",
    ],
  },
  {
    title: "Secciones",
    links: [
      "Política Nacional",
      "Economía & Finanzas",
      "Tecnología & Innovación",
      "Cultura & Sociedad",
      "Deportes",
      "Internacional",
      "Análisis & Opinión",
    ],
  },
  {
    title: "Servicios",
    links: [
      "Newsletter Premium",
      "Archivo Histórico",
      "Podcasts Exclusivos",
      "Reportajes Especiales",
      "API de Noticias",
      "Alertas Breaking News",
      "App Móvil",
    ],
  },
  {
    title: "Contacto",
    links: [
      "Redacción",
      "Publicidad",
      "Suscripciones",
      "Soporte Técnico",
      "Políticas de Privacidad",
      "Términos de Uso",
      "Código de Ética",
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {footerSections.map((section, index) => (
            <div key={section.title} className="footer-section">
              <h3 className="font-playfair text-lg sm:text-xl mb-3 sm:mb-4 lg:mb-6 text-accent-gold">
                {section.title}
              </h3>
              {section.content ? (
                <div className="space-y-3 sm:space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed text-gray-300 text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <ul className="list-none space-y-2 sm:space-y-3">
                  {section.links?.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-300 no-underline transition-colors duration-300 hover:text-accent-gold text-sm sm:text-base block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p className="leading-relaxed">
            &copy; 2025 La Vanguardia Digital. Desarrollado con Next.js y pasión por el periodismo de calidad. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
