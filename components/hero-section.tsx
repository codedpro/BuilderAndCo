"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !contentRef.current) return

      const scrollPosition = window.scrollY
      const translateY = scrollPosition * 0.5
      const opacity = 1 - Math.min(1, scrollPosition / 700)

      parallaxRef.current.style.transform = `translateY(${translateY}px)`
      contentRef.current.style.opacity = `${opacity}`
      contentRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-6-aUTvwwFa3ZzFQQeiH6bKU1aWSYJGrO.png)`,
          height: "120%",
          top: "-10%",
        }}
      >
        <div className="absolute inset-0 bg-dark-900/50" />
      </div>

      <div
        ref={contentRef}
        className="relative h-full flex flex-col justify-center items-start px-4 md:px-12 lg:px-20 container mx-auto z-10"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-light-100 font-display font-light mb-6">
            Architecture in Harmony with Nature
          </h1>
          <p className="text-lg md:text-xl text-light-200 mb-8 max-w-lg">
            Discover our collection of modern residences designed to create a seamless connection between interior
            spaces and natural surroundings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent1 text-light-100 hover:bg-accent1-dark rounded-none px-8 py-6">
              EXPLORE RESIDENCES
            </Button>
            <Button
              variant="outline"
              className="text-light-100 border-light-100 hover:bg-light-100/10 rounded-none px-8 py-6"
            >
              BOOK A VIEWING
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
