"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function FeaturedArticle() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/articulo/revolucion-digital-argentina")
  }

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push("/tecnologia")
  }

  return (
    <article
      className="bg-white rounded-none overflow-hidden relative cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-hover"
      onClick={handleClick}
    >
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Revolución Digital Argentina"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
      <div className="py-4 sm:py-6 lg:py-8">
        <button
          onClick={handleCategoryClick}
          className="bg-accent-red text-white px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase inline-block mb-3 sm:mb-4 lg:mb-6 hover:bg-red-700 transition-colors duration-200"
        >
          Tecnología
        </button>
        <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-primary-black tracking-tight hover:text-accent-gold transition-colors duration-200">
          Revolución Digital: Argentina Lidera la Transformación Tecnológica en Latinoamérica
        </h1>
        <p className="font-crimson text-base sm:text-lg lg:text-xl text-text-gray leading-relaxed mb-4 sm:mb-6 font-normal">
          El nuevo marco regulatorio para inteligencia artificial posiciona al país como pionero regional en innovación
          responsable, atrayendo inversiones por USD 2.500 millones.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-[13px] text-text-gray font-medium mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Dr. Alejandro Martínez"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span>
              Por <strong>Dr. Alejandro Martínez</strong>
            </span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>Hace 1 hora</span>
          <div className="bg-light-gray px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs w-fit">8 min lectura</div>
        </div>
      </div>
    </article>
  )
}
