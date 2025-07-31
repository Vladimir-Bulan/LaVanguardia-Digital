"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 bg-light-gray px-4 py-3 rounded-lg">
      <Link
        href="/"
        className="flex items-center text-text-gray hover:text-accent-gold transition-colors duration-200 font-medium"
      >
        <Home className="w-4 h-4 mr-1" />
        <span>Inicio</span>
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-text-gray" />
          {index === items.length - 1 ? (
            <span className="text-primary-black font-semibold cursor-default">{item.name}</span>
          ) : (
            <Link
              href={item.href}
              className="text-text-gray hover:text-accent-gold font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
