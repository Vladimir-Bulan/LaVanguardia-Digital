"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Portada", href: "/", active: true },
  { name: "Política", href: "/politica" },
  { name: "Economía", href: "/economia" },
  { name: "Internacional", href: "/internacional" },
  { name: "Tecnología", href: "/tecnologia" },
  { name: "Cultura", href: "/cultura" },
  { name: "Deportes", href: "/deportes" },
  { name: "Opinión", href: "/opinion" },
]

interface NavigationProps {
  isScrolled?: boolean
}

export default function Navigation({ isScrolled = false }: NavigationProps) {
  const [activeItem, setActiveItem] = useState("Portada")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="border-t border-border-gray bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center items-center">
          <div
            className="flex transition-all duration-500 ease-out"
            style={{
              paddingTop: isScrolled ? "8px" : "16px",
              paddingBottom: isScrolled ? "8px" : "16px",
            }}
          >
            <ul className="flex list-none gap-0">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`block no-underline font-medium tracking-wide uppercase transition-all duration-300 ease-out relative ${
                      activeItem === item.name ? "text-accent-gold" : "text-primary-black hover:text-accent-gold"
                    }`}
                    style={{
                      paddingLeft: isScrolled ? "12px" : "24px",
                      paddingRight: isScrolled ? "12px" : "24px",
                      paddingTop: isScrolled ? "8px" : "12px",
                      paddingBottom: isScrolled ? "8px" : "12px",
                      fontSize: isScrolled ? "11px" : "13px",
                    }}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-accent-gold transition-all duration-300 ease-out ${
                        activeItem === item.name ? "w-3/5 opacity-100" : "w-0 opacity-0 hover:w-3/5 hover:opacity-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div
            className="flex justify-start items-center transition-all duration-500 ease-out"
            style={{
              paddingTop: isScrolled ? "8px" : "12px",
              paddingBottom: isScrolled ? "8px" : "12px",
            }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary-black hover:text-accent-gold transition-colors duration-300 rounded-lg hover:bg-light-gray"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`transition-all duration-300 ease-out overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-4 border-t border-border-gray">
              <ul className="flex flex-col list-none">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 no-underline font-medium text-sm tracking-wide uppercase transition-all duration-300 border-l-4 ${
                        activeItem === item.name
                          ? "text-accent-gold border-accent-gold bg-yellow-50"
                          : "text-primary-black hover:text-accent-gold border-transparent hover:border-accent-gold hover:bg-light-gray"
                      }`}
                      onClick={() => {
                        setActiveItem(item.name)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
