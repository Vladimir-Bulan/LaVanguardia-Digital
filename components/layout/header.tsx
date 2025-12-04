"use client"

import { useState, useEffect, useCallback } from "react"
import Navigation from "./navigation"
import Link from "next/link"
import { UserProfile } from "@/components/user/user-profile"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
    setScrollY(currentScrollY)
    setIsScrolled(currentScrollY > 50)
  }, [])

  useEffect(() => {
    let ticking = false

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-border-gray sticky top-0 z-50 shadow-sm transition-all duration-500 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Profile - Posicionado absolutamente arriba a la derecha */}
        <div className="absolute top-4 right-4 z-10">
          <UserProfile />
        </div>

        <div
          className="text-center transition-all duration-500 ease-out"
          style={{
            paddingTop: isScrolled ? "8px" : "24px",
            paddingBottom: isScrolled ? "8px" : "24px",
          }}
        >
          <Link
            href="/"
            className="font-playfair font-black text-primary-black no-underline tracking-tight inline-block relative transition-all duration-500 ease-out"
            style={{
              fontSize: isScrolled ? "clamp(1.5rem, 4vw, 2rem)" : "clamp(2rem, 6vw, 4rem)",
              marginBottom: isScrolled ? "4px" : "8px",
            }}
          >
            La Vanguardia
            <div
              className="absolute left-1/2 bg-accent-gold transition-all duration-500 ease-out"
              style={{
                bottom: isScrolled ? "-2px" : "-4px",
                transform: "translateX(-50%)",
                width: isScrolled ? "32px" : "48px",
                height: isScrolled ? "2px" : "3px",
              }}
            />
          </Link>

          <p
            className="text-text-gray font-medium tracking-wider uppercase transition-all duration-500 ease-out"
            style={{
              fontSize: isScrolled ? "10px" : "12px",
              marginTop: isScrolled ? "4px" : "16px",
              opacity: isScrolled ? 0.8 : 1,
            }}
          >
            Periodismo de Excelencia
          </p>

          <div
            className="border-t border-border-gray text-xs text-text-gray flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4 transition-all duration-500 ease-out overflow-hidden"
            style={{
              maxHeight: isScrolled ? "0px" : "60px",
              opacity: isScrolled ? 0 : 1,
              marginTop: isScrolled ? "0px" : "12px",
              paddingTop: isScrolled ? "0px" : "12px",
            }}
          >
            <span>Edición Digital</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-center">Año LXXV - Nº 27,394</span>
            <span className="hidden sm:inline">•</span>
            <span>Fundado en 1950</span>
          </div>
        </div>
      </div>
      <Navigation isScrolled={isScrolled} />
    </header>
  )
}