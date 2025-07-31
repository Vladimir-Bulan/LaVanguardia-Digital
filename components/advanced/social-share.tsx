"use client"

import { useState } from "react"
import { Share2, Facebook, Twitter, Linkedin, Link, Check } from "lucide-react"

interface SocialShareProps {
  title: string
  url?: string
  className?: string
}

export default function SocialShare({ title, url = "", className = "" }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(shareUrl)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Error copying to clipboard:", err)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-text-gray hover:text-accent-gold transition-colors duration-200 text-sm"
      >
        <Share2 className="w-4 h-4" />
        <span>Compartir</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-border-gray rounded-lg shadow-hover p-4 z-50 min-w-48">
          <h4 className="font-semibold text-primary-black mb-3 text-sm">Compartir artículo</h4>

          <div className="space-y-2">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 hover:bg-light-gray rounded-lg transition-colors duration-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>Facebook</span>
            </a>

            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 hover:bg-light-gray rounded-lg transition-colors duration-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Twitter className="w-4 h-4 text-blue-400" />
              <span>Twitter</span>
            </a>

            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 hover:bg-light-gray rounded-lg transition-colors duration-200 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <Linkedin className="w-4 h-4 text-blue-700" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 p-2 hover:bg-light-gray rounded-lg transition-colors duration-200 text-sm w-full text-left"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link className="w-4 h-4 text-text-gray" />}
              <span>{copied ? "¡Copiado!" : "Copiar enlace"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
