"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-400/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-light-100 text-2xl tracking-tight">NATURA</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-light-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
          >
            About
          </Link>
          <Link
            href="#residences"
            className="text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
          >
            Residences
          </Link>
          <Link
            href="#design"
            className="text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
          >
            Design
          </Link>
          <Link
            href="#gallery"
            className="text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-dark-400/95 backdrop-blur-md z-50">
          <nav className="flex flex-col p-4">
            <Link
              href="#about"
              className="py-3 text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#residences"
              className="py-3 text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Residences
            </Link>
            <Link
              href="#design"
              className="py-3 text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Design
            </Link>
            <Link
              href="#gallery"
              className="py-3 text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="py-3 text-light-100 hover:text-accent1-light text-sm uppercase tracking-wider font-display font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
