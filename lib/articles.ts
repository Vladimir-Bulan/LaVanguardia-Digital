import type { Article } from "@/types/article"

// Todos los artículos completos con contenido real
const articles: Article[] = [
  // ARTÍCULO PRINCIPAL DESTACADO
  {
    slug: "revolucion-digital-argentina",
    title: "Revolución Digital: Argentina Lidera la Transformación Tecnológica en Latinoamérica",
    excerpt:
      "El nuevo marco regulatorio para inteligencia artificial posiciona al país como pionero regional en innovación responsable, atrayendo inversiones por USD 2.500 millones.",
    content: `
      <p class="lead">Argentina se posiciona como líder regional en transformación digital con la implementación de un marco regulatorio integral para inteligencia artificial que ha captado la atención de inversores internacionales.</p>
      
      <h2>Un Marco Regulatorio Pionero</h2>
      <p>La nueva legislación, aprobada por unanimidad en el Congreso Nacional, establece principios éticos claros para el desarrollo y aplicación de tecnologías de IA, garantizando la protección de datos personales y promoviendo la innovación responsable.</p>
      
      <blockquote>"Este marco regulatorio no solo protege a los ciudadanos, sino que también genera confianza en los inversores internacionales", explicó la Ministra de Ciencia y Tecnología, Dra. Ana Franchi.</blockquote>
      
      <h2>Inversiones Millonarias</h2>
      <p>En los últimos seis meses, empresas tecnológicas de Estados Unidos, Europa y Asia han anunciado inversiones por más de USD 2.500 millones en el país, estableciendo centros de investigación y desarrollo en Buenos Aires, Córdoba y Mendoza.</p>
      
      <p>Entre las empresas que han confirmado su llegada se encuentran:</p>
      <ul>
        <li>Google AI Research Center - USD 800 millones</li>
        <li>Microsoft Azure Argentina - USD 600 millones</li>
        <li>Amazon Web Services - USD 500 millones</li>
        <li>Startups locales financiadas - USD 600 millones</li>
      </ul>
      
      <h2>Impacto en el Empleo</h2>
      <p>Se estima que estas inversiones generarán más de 50.000 empleos directos e indirectos en los próximos tres años, con salarios promedio 40% superiores a la media nacional.</p>
      
      <p>Las universidades argentinas han respondido rápidamente, creando nuevas carreras y especializaciones en inteligencia artificial, ciencia de datos y ciberseguridad.</p>
      
      <h2>Desafíos y Oportunidades</h2>
      <p>A pesar del optimismo, expertos señalan desafíos importantes como la necesidad de mejorar la infraestructura de telecomunicaciones y formar más profesionales especializados.</p>
      
      <p>"Tenemos una ventana de oportunidad única para posicionarnos como el Silicon Valley de Sudamérica", concluyó el Secretario de Innovación Tecnológica.</p>
    `,
    author: {
      name: "Dr. Alejandro Martínez",
      bio: "Especialista en políticas tecnológicas y transformación digital con más de 15 años de experiencia en el sector.",
      role: "Editor de Tecnología",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/alemartinez",
        linkedin: "https://linkedin.com/in/alemartinez",
      },
    },
    publishedAt: "31 de enero, 2025",
    readTime: "8 min",
    category: "Tecnología",
    tags: ["inteligencia artificial", "inversiones", "tecnología", "regulación", "innovación"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Centro de investigación de IA en Buenos Aires - Imagen ilustrativa",
    featured: true,
    views: 15420,
  },

  // ARTÍCULOS SECUNDARIOS DEL HERO
  {
    slug: "inflacion-desciende-minimo",
    title: "Inflación Desciende al Mínimo de los Últimos Cinco Años",
    excerpt:
      "Los indicadores económicos muestran una tendencia sostenida hacia la estabilización, con proyecciones optimistas para el próximo trimestre según el Banco Central.",
    content: `
      <p class="lead">La inflación argentina registró en enero su menor nivel en cinco años, marcando un hito en la política económica del país y generando optimismo entre analistas locales e internacionales.</p>
      
      <h2>Datos Históricos</h2>
      <p>El índice de precios al consumidor (IPC) se ubicó en 2.1% mensual, muy por debajo del 4.2% registrado en el mismo período del año anterior. Esta cifra representa el menor registro desde marzo de 2020.</p>
      
      <blockquote>"Estamos viendo los frutos de una política monetaria consistente y responsable", declaró el presidente del Banco Central en conferencia de prensa.</blockquote>
      
      <h2>Sectores que Lideran la Baja</h2>
      <p>Los sectores que más contribuyeron a la desaceleración inflacionaria fueron:</p>
      <ul>
        <li>Alimentos y bebidas: -1.2% mensual</li>
        <li>Transporte: -0.8% mensual</li>
        <li>Vivienda y servicios básicos: -0.5% mensual</li>
        <li>Indumentaria: -0.3% mensual</li>
      </ul>
      
      <h2>Proyecciones para 2025</h2>
      <p>Los economistas proyectan que la inflación anual podría cerrar 2025 en torno al 25%, una cifra significativamente menor al 78% registrado en 2024.</p>
      
      <p>Esta tendencia positiva se debe a múltiples factores, incluyendo la estabilización del tipo de cambio, el control del gasto público y la recuperación de la confianza del consumidor.</p>
      
      <h2>Impacto en el Poder Adquisitivo</h2>
      <p>La desaceleración inflacionaria ya se refleja en una mejora del poder adquisitivo de los salarios, especialmente en los sectores formales de la economía.</p>
      
      <p>Los jubilados también se benefician con esta tendencia, ya que sus haberes mantienen mejor su valor real a lo largo del tiempo.</p>
    `,
    author: {
      name: "María González",
      bio: "Economista especializada en política monetaria y análisis macroeconómico. Magíster en Economía por la UBA.",
      role: "Editora de Economía",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/mariagonzalez",
        linkedin: "https://linkedin.com/in/mariagonzalez",
      },
    },
    publishedAt: "30 de enero, 2025",
    readTime: "6 min",
    category: "Economía",
    tags: ["inflación", "economía", "banco central", "política monetaria"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Gráfico de evolución de la inflación en Argentina",
    featured: false,
    views: 12891,
  },

  {
    slug: "startup-argentina-tecnologia-cuantica",
    title: "Startup Argentina Desarrolla Revolucionaria Tecnología Cuántica",
    excerpt:
      "QuantumTech Buenos Aires logra un avance significativo en computación cuántica, atrayendo la atención de gigantes tecnológicos internacionales.",
    content: `
      <p class="lead">Una startup argentina ha logrado un breakthrough en computación cuántica que promete revolucionar la industria tecnológica global, atrayendo inversiones millonarias de empresas internacionales.</p>
      
      <h2>El Avance Revolucionario</h2>
      <p>QuantumTech Buenos Aires, fundada por egresados del Instituto Balseiro, desarrolló un nuevo tipo de qubit que mantiene su coherencia cuántica por 10 veces más tiempo que los sistemas actuales.</p>
      
      <blockquote>"Hemos resuelto uno de los principales obstáculos de la computación cuántica: la decoherencia. Nuestros qubits pueden mantener su estado cuántico por más de 100 microsegundos", explicó la Dra. Carla Mendoza, cofundadora de la empresa.</blockquote>
      
      <h2>Aplicaciones Revolucionarias</h2>
      <p>Esta tecnología tiene aplicaciones en múltiples sectores:</p>
      <ul>
        <li>Criptografía y seguridad informática</li>
        <li>Simulación molecular para desarrollo de fármacos</li>
        <li>Optimización de rutas logísticas</li>
        <li>Inteligencia artificial avanzada</li>
        <li>Modelado financiero complejo</li>
      </ul>
      
      <h2>Inversiones Internacionales</h2>
      <p>IBM, Google y Microsoft han expresado interés en adquirir licencias de la tecnología, mientras que fondos de inversión de Silicon Valley han ofrecido USD 150 millones por una participación minoritaria.</p>
      
      <p>La empresa planea establecer su centro de investigación principal en Buenos Aires, generando 500 empleos altamente calificados en los próximos tres años.</p>
      
      <h2>Reconocimiento Mundial</h2>
      <p>El MIT y la Universidad de Oxford han invitado al equipo argentino a presentar sus resultados en conferencias internacionales, consolidando a Argentina como potencia en investigación cuántica.</p>
    `,
    author: {
      name: "Carlos Rodríguez",
      bio: "Físico especializado en tecnologías cuánticas y periodista científico. Doctor en Física por el Instituto Balseiro.",
      role: "Corresponsal de Innovación",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/carlosrodriguez",
        linkedin: "https://linkedin.com/in/carlosrodriguez",
      },
    },
    publishedAt: "29 de enero, 2025",
    readTime: "7 min",
    category: "Tecnología",
    tags: ["computación cuántica", "startup", "innovación", "tecnología", "investigación"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Laboratorio de computación cuántica de QuantumTech Buenos Aires",
    featured: false,
    views: 18750,
  },

  // ARTÍCULOS DE NEWS GRID
  {
    slug: "messi-retiro-futbol-internacional",
    title: "Messi Anuncia su Retiro del Fútbol Internacional",
    excerpt:
      "El capitán de la selección argentina confirmó que el próximo Mundial será su última participación con la camiseta albiceleste, cerrando una era dorada del fútbol argentino.",
    content: `
      <p class="lead">Lionel Messi, el máximo goleador histórico de la selección argentina, anunció oficialmente que la Copa del Mundo de 2026 será su última participación con la camiseta albiceleste, marcando el fin de una era dorada.</p>
      
      <h2>Una Decisión Meditada</h2>
      <p>En una emotiva conferencia de prensa realizada en el predio de la AFA en Ezeiza, el capitán de 37 años explicó que esta decisión fue tomada después de largas conversaciones con su familia y el cuerpo técnico.</p>
      
      <blockquote>"Ha llegado el momento de dar un paso al costado y permitir que las nuevas generaciones tomen la posta. El Mundial de 2026 será mi despedida con esta camiseta que tanto amo", declaró Messi visiblemente emocionado.</blockquote>
      
      <h2>Un Legado Incomparable</h2>
      <p>Los números de Messi con la selección argentina son simplemente extraordinarios:</p>
      <ul>
        <li>180 partidos disputados</li>
        <li>106 goles convertidos</li>
        <li>56 asistencias</li>
        <li>1 Copa del Mundo (2022)</li>
        <li>2 Copas América (2021, 2024)</li>
        <li>1 Finalissima (2022)</li>
      </ul>
      
      <h2>Reacciones del Mundo del Fútbol</h2>
      <p>La noticia generó una ola de reacciones en todo el mundo del fútbol. Desde la FIFA hasta clubes europeos, todos reconocieron la grandeza del rosarino.</p>
      
      <p>El presidente de la AFA, Claudio Tapia, declaró: "Leo es el mejor jugador de la historia y siempre será bienvenido en la casa de la selección argentina".</p>
      
      <h2>El Camino hacia 2026</h2>
      <p>Con Messi confirmado para el Mundial de Estados Unidos, México y Canadá, la selección argentina buscará defender su título mundial con su capitán por última vez.</p>
      
      <p>El técnico Lionel Scaloni ya comenzó a planificar la transición post-Messi, con jugadores como Julián Álvarez, Enzo Fernández y Alejandro Garnacho como las nuevas figuras del equipo.</p>
    `,
    author: {
      name: "Roberto Silva",
      bio: "Periodista deportivo especializado en fútbol argentino e internacional. Corresponsal de La Vanguardia en eventos FIFA.",
      role: "Editor de Deportes",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/robertosilva",
        linkedin: "https://linkedin.com/in/robertosilva",
      },
    },
    publishedAt: "28 de enero, 2025",
    readTime: "5 min",
    category: "Deportes",
    tags: ["messi", "selección argentina", "mundial 2026", "retiro", "fútbol"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Lionel Messi durante la conferencia de prensa en el predio de la AFA",
    featured: false,
    views: 25430,
  },

  {
    slug: "cientificos-argentinos-antartida",
    title: "Científicos Argentinos Descubren Nueva Especie en la Antártida",
    excerpt:
      "El hallazgo podría revolucionar nuestra comprensión sobre la adaptación de la vida en condiciones extremas y el cambio climático global.",
    content: `
      <p class="lead">Un equipo de científicos argentinos del Instituto Antártico Argentino (IAA) ha descubierto una nueva especie de microorganismo extremófilo en las profundidades heladas de la Antártida, un hallazgo que podría cambiar nuestra comprensión sobre la vida en condiciones extremas.</p>
      
      <h2>El Descubrimiento</h2>
      <p>La nueva especie, denominada "Cryobacterium argentinensis", fue encontrada a 800 metros bajo el hielo antártico durante una expedición de investigación en la base Belgrano II.</p>
      
      <blockquote>"Este microorganismo ha desarrollado mecanismos únicos para sobrevivir en temperaturas de hasta -40°C y en completa ausencia de luz solar", explicó la Dra. Ana Pérez, líder del equipo de investigación.</blockquote>
      
      <h2>Implicaciones Científicas</h2>
      <p>El descubrimiento tiene múltiples implicaciones para la ciencia:</p>
      <ul>
        <li>Nuevas perspectivas sobre la evolución en ambientes extremos</li>
        <li>Posibles aplicaciones biotecnológicas</li>
        <li>Indicios sobre la posibilidad de vida en otros planetas</li>
        <li>Comprensión del impacto del cambio climático en ecosistemas polares</li>
      </ul>
      
      <h2>Metodología de Investigación</h2>
      <p>El equipo utilizó técnicas de perforación criogénica avanzada y análisis genómico de última generación para identificar y caracterizar la nueva especie.</p>
      
      <p>Los resultados fueron publicados en la prestigiosa revista "Nature Microbiology" y han sido validados por laboratorios internacionales.</p>
      
      <h2>Colaboración Internacional</h2>
      <p>El proyecto contó con la colaboración de universidades de Estados Unidos, Reino Unido y Alemania, consolidando a Argentina como líder en investigación antártica.</p>
      
      <p>"Este descubrimiento demuestra la importancia de mantener la investigación científica en la Antártida y el compromiso de Argentina con la ciencia global", concluyó el director del IAA.</p>
    `,
    author: {
      name: "Dra. Ana Pérez",
      bio: "Microbióloga especializada en extremófilos y investigación antártica. Doctora en Ciencias Biológicas por la Universidad de Buenos Aires.",
      role: "Corresponsal Científica",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/anaperez",
        linkedin: "https://linkedin.com/in/anaperez",
      },
    },
    publishedAt: "27 de enero, 2025",
    readTime: "7 min",
    category: "Ciencia",
    tags: ["antártida", "microorganismos", "investigación", "ciencia argentina", "extremófilos"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Equipo de investigación argentino en la base Belgrano II",
    featured: false,
    views: 18920,
  },

  {
    slug: "argentina-energia-solar-sudamerica",
    title: "Argentina Lanza el Mayor Proyecto de Energía Solar de Sudamérica",
    excerpt:
      "La iniciativa generará energía limpia para 2 millones de hogares y creará más de 15,000 empleos verdes en las próximas tres décadas.",
    content: `
      <p class="lead">Argentina inauguró oficialmente el proyecto de energía solar más ambicioso de Sudamérica, con una inversión de USD 3.200 millones que transformará el panorama energético del país y la región.</p>
      
      <h2>Dimensiones del Proyecto</h2>
      <p>El "Parque Solar Patagónico" se extiende por 15,000 hectáreas en las provincias de Neuquén y Río Negro, con una capacidad instalada de 2,500 MW.</p>
      
      <blockquote>"Este proyecto posiciona a Argentina como líder regional en energías renovables y nos acerca significativamente a nuestros objetivos de carbono neutralidad para 2050", declaró la Ministra de Energía.</blockquote>
      
      <h2>Beneficios Ambientales y Económicos</h2>
      <p>El impacto del proyecto será múltiple:</p>
      <ul>
        <li>Reducción de 4.2 millones de toneladas de CO2 anuales</li>
        <li>Energía limpia para 2 millones de hogares</li>
        <li>15,000 empleos directos e indirectos</li>
        <li>Ahorro de USD 800 millones anuales en importación de combustibles</li>
      </ul>
      
      <h2>Tecnología de Vanguardia</h2>
      <p>El parque utiliza paneles solares bifaciales de última generación y sistemas de seguimiento solar que maximizan la captación de energía durante todo el día.</p>
      
      <p>Además, incorpora sistemas de almacenamiento en baterías de litio que permiten suministrar energía incluso durante la noche.</p>
      
      <h2>Impacto Regional</h2>
      <p>El proyecto no solo beneficiará a Argentina, sino que también exportará energía limpia a países vecinos como Chile y Uruguay a través de interconexiones eléctricas.</p>
      
      <p>Se espera que el parque esté completamente operativo para mediados de 2026, consolidando a Argentina como potencia en energías renovables.</p>
    `,
    author: {
      name: "Laura Fernández",
      bio: "Ingeniera en Energías Renovables y periodista especializada en sustentabilidad. Magíster en Políticas Energéticas.",
      role: "Editora de Medio Ambiente",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/laurafernandez",
        linkedin: "https://linkedin.com/in/laurafernandez",
      },
    },
    publishedAt: "26 de enero, 2025",
    readTime: "6 min",
    category: "Tecnología",
    tags: ["energía solar", "renovables", "sustentabilidad", "patagonia", "medio ambiente"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Vista aérea del Parque Solar Patagónico en construcción",
    featured: false,
    views: 16750,
  },

  {
    slug: "terapia-genica-cancer-argentina",
    title: "Terapia Génica Argentina Muestra Resultados Prometedores Contra el Cáncer",
    excerpt:
      "Los ensayos clínicos desarrollados en el Instituto Leloir demuestran una eficacia del 85% en casos de leucemia infantil avanzada.",
    content: `
      <p class="lead">Un revolucionario tratamiento de terapia génica desarrollado por científicos argentinos del Instituto Leloir ha mostrado resultados extraordinarios en el tratamiento de leucemia infantil, ofreciendo nueva esperanza a miles de familias.</p>
      
      <h2>Breakthrough Científico</h2>
      <p>La terapia, denominada "CAR-T Argentina", modifica genéticamente las células T del propio paciente para que reconozcan y destruyan las células cancerosas de manera más efectiva.</p>
      
      <blockquote>"Los resultados superan nuestras expectativas más optimistas. Estamos viendo remisiones completas en el 85% de los casos tratados", explicó el Dr. Roberto Méndez, director del proyecto.</blockquote>
      
      <h2>Ensayos Clínicos</h2>
      <p>Los ensayos de Fase II incluyeron a 120 pacientes pediátricos con leucemia linfoblástica aguda refractaria:</p>
      <ul>
        <li>85% de remisión completa a los 6 meses</li>
        <li>78% libre de enfermedad a los 12 meses</li>
        <li>Efectos secundarios mínimos comparado con quimioterapia</li>
        <li>Tiempo de recuperación reducido en 60%</li>
      </ul>
      
      <h2>Innovación Nacional</h2>
      <p>El desarrollo de esta terapia representa un hito para la ciencia argentina, posicionando al país como pionero en medicina de precisión en América Latina.</p>
      
      <p>El tratamiento utiliza vectores virales desarrollados completamente en Argentina, reduciendo significativamente los costos comparado con terapias similares importadas.</p>
      
      <h2>Próximos Pasos</h2>
      <p>La ANMAT (Administración Nacional de Medicamentos) está evaluando la aprobación acelerada del tratamiento, que podría estar disponible para pacientes argentinos a partir del segundo semestre de 2025.</p>
      
      <p>Además, varios países de la región han expresado interés en implementar esta terapia, lo que podría convertir a Argentina en exportador de tecnología médica avanzada.</p>
      
      <h2>Impacto Social</h2>
      <p>"Cada niño que se cura es una victoria no solo para la ciencia, sino para toda la sociedad", concluyó el Dr. Méndez durante la presentación de resultados.</p>
    `,
    author: {
      name: "Dr. Roberto Méndez",
      bio: "Oncólogo pediátrico e investigador en terapias génicas. Director del Laboratorio de Inmunología del Instituto Leloir.",
      role: "Corresponsal Médico",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/robertomendez",
        linkedin: "https://linkedin.com/in/robertomendez",
      },
    },
    publishedAt: "25 de enero, 2025",
    readTime: "8 min",
    category: "Ciencia",
    tags: ["terapia génica", "cáncer", "leucemia", "medicina", "investigación"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Laboratorio de terapia génica del Instituto Leloir",
    featured: false,
    views: 14230,
  },

  {
    slug: "buenos-aires-capital-mundial-libro",
    title: "Buenos Aires Elegida Capital Mundial del Libro 2026",
    excerpt:
      "La UNESCO reconoce el compromiso de la ciudad con la promoción de la lectura y las industrias culturales creativas.",
    content: `
      <p class="lead">Buenos Aires ha sido designada oficialmente como Capital Mundial del Libro 2026 por la UNESCO, convirtiéndose en la primera ciudad sudamericana en recibir este prestigioso reconocimiento en la última década.</p>
      
      <h2>Un Reconocimiento Histórico</h2>
      <p>La decisión fue anunciada en París durante la reunión del Comité de Selección, que destacó el excepcional programa cultural y educativo presentado por la ciudad.</p>
      
      <blockquote>"Buenos Aires demostró un compromiso extraordinario con la promoción de la lectura, la diversidad cultural y el acceso democrático al libro", declaró la directora general de la UNESCO.</blockquote>
      
      <h2>Programa "Buenos Aires Lee"</h2>
      <p>La propuesta ganadora incluye iniciativas innovadoras:</p>
      <ul>
        <li>100 nuevas bibliotecas barriales</li>
        <li>Festival Internacional del Libro expandido</li>
        <li>Programa de alfabetización digital</li>
        <li>Red de librerías independientes fortalecida</li>
        <li>Traducción de obras argentinas a 15 idiomas</li>
      </ul>
      
      <h2>Impacto Cultural</h2>
      <p>El reconocimiento posiciona a Buenos Aires como epicentro cultural de América Latina, con eventos programados durante todo 2026 que atraerán a escritores, editores y lectores de todo el mundo.</p>
      
      <p>Se espera un impacto económico de USD 150 millones en turismo cultural y la creación de 5,000 empleos en el sector editorial y cultural.</p>
      
      <h2>Tradición Literaria</h2>
      <p>La ciudad cuenta con una rica tradición literaria que incluye figuras como Borges, Cortázar y Sábato, además de ser sede de la Feria del Libro más importante de América Latina.</p>
      
      <p>Buenos Aires tiene más librerías per cápita que cualquier otra ciudad del mundo, con más de 2,500 establecimientos dedicados a la venta de libros.</p>
      
      <h2>Proyección Internacional</h2>
      <p>"Este reconocimiento confirma que Buenos Aires es una ciudad que vive y respira literatura", celebró el Ministro de Cultura de la Ciudad.</p>
    `,
    author: {
      name: "Sofía Martín",
      bio: "Periodista cultural especializada en literatura y artes. Licenciada en Letras por la UBA y crítica literaria.",
      role: "Editora de Cultura",
      avatar: "/placeholder.svg?height=60&width=60",
      social: {
        twitter: "https://twitter.com/sofiamartin",
        linkedin: "https://linkedin.com/in/sofiamartin",
      },
    },
    publishedAt: "24 de enero, 2025",
    readTime: "4 min",
    category: "Cultura",
    tags: ["unesco", "capital mundial libro", "cultura", "literatura", "buenos aires"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Librería El Ateneo Grand Splendid, símbolo cultural de Buenos Aires",
    featured: false,
    views: 12890,
  },

  {
    slug: "revolucion-digital-aulas-ia",
    title: "Revolución Digital en las Aulas: IA Personaliza el Aprendizaje",
    excerpt:
      "El programa piloto implementado en 500 escuelas muestra mejoras del 40% en el rendimiento académico estudiantil.",
    content: `
      <p class="lead">Un innovador programa de inteligencia artificial implementado en 500 escuelas argentinas está revolucionando la educación, personalizando el aprendizaje y mejorando significativamente el rendimiento académico de los estudiantes.</p>
      
      <h2>Programa "Aula Inteligente"</h2>
      <p>La iniciativa, desarrollada por el Ministerio de Educación en colaboración con universidades nacionales, utiliza algoritmos de IA para adaptar el contenido educativo a las necesidades específicas de cada estudiante.</p>
      
      <blockquote>"Estamos presenciando una transformación sin precedentes en la forma de enseñar y aprender. La IA nos permite identificar las fortalezas y debilidades de cada alumno en tiempo real", explicó Pedro Vega, coordinador del programa.</blockquote>
      
      <h2>Resultados Extraordinarios</h2>
      <p>Los datos del primer año de implementación son alentadores:</p>
      <ul>
        <li>40% de mejora en comprensión lectora</li>
        <li>35% de aumento en habilidades matemáticas</li>
        <li>50% de reducción en deserción escolar</li>
        <li>60% de los docentes reportan mayor engagement estudiantil</li>
      </ul>
      
      <h2>Tecnología Adaptativa</h2>
      <p>El sistema utiliza machine learning para analizar patrones de aprendizaje, identificar dificultades tempranamente y sugerir estrategias pedagógicas personalizadas.</p>
      
      <p>Los estudiantes acceden a contenido multimedia interactivo que se ajusta automáticamente a su ritmo y estilo de aprendizaje.</p>
      
      <h2>Formación Docente</h2>
      <p>Más de 2,000 docentes han sido capacitados en el uso de estas herramientas, transformando su rol de transmisores de información a facilitadores del aprendizaje personalizado.</p>
      
      <p>El programa incluye mentorías continuas y comunidades de práctica donde los educadores comparten experiencias y mejores prácticas.</p>
      
      <h2>Expansión Nacional</h2>
      <p>Debido al éxito del piloto, el programa se expandirá a 2,000 escuelas adicionales durante 2025, con el objetivo de alcanzar cobertura nacional para 2027.</p>
      
      <p>"Estamos democratizando el acceso a una educación de calidad y preparando a nuestros estudiantes para los desafíos del siglo XXI", concluyó el Ministro de Educación.</p>
    `,
    author: {
      name: "Pedro Vega",
      bio: "Especialista en tecnología educativa y transformación digital. Magíster en Educación y Tecnología por la Universidad de San Andrés.",
      role: "Editor de Educación",
      avatar: "/placeholder.svg?height=400&width=60",
      social: {
        twitter: "https://twitter.com/pedrovega",
        linkedin: "https://linkedin.com/in/pedrovega",
      },
    },
    publishedAt: "23 de enero, 2025",
    readTime: "6 min",
    category: "Tecnología",
    tags: ["educación", "inteligencia artificial", "tecnología educativa", "innovación", "aprendizaje"],
    image: "/placeholder.svg?height=400&width=800",
    imageCaption: "Estudiantes utilizando tecnología de IA en el aula",
    featured: false,
    views: 11450,
  },
]

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getArticleBySlug(slug: string): Article | null {
  return articles.find((article) => article.slug === slug) || null
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 4): Article[] {
  return articles.filter((article) => article.slug !== currentSlug && article.category === category).slice(0, limit)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}
