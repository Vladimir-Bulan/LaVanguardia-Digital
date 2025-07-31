import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
})

export const metadata: Metadata = {
  title: "La Vanguardia Digital - Periodismo de Excelencia",
  description: "Desde 1950, comprometidos con el periodismo de calidad, la verdad y la excelencia informativa.",
  keywords: "noticias, periodismo, argentina, política, economía, tecnología",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${crimson.variable}`}>
      <body className="font-inter text-primary-black bg-white overflow-x-hidden">{children}</body>
    </html>
  )
}
