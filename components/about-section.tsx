"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-500 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="transition-transform duration-300 ease-out">
            <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">
              Modern Living Redefined
            </h2>
            <p className="text-light-300 mb-6">
              At Natura, we believe that exceptional architecture should create a seamless connection between interior
              spaces and the natural world. Our residences are designed to blur the boundaries between inside and
              outside, allowing you to experience the changing seasons and natural rhythms from the comfort of your
              home.
            </p>
            <p className="text-light-300 mb-6">
              Each residence is thoughtfully positioned to maximize views and natural light, with floor-to-ceiling glass
              walls that frame the landscape like living artwork. The use of natural materials—stone, wood, and
              concrete—creates a warm, tactile experience that complements the surrounding environment.
            </p>
            <p className="text-light-300">
              Our commitment to sustainable design means that every Natura residence is built to minimize environmental
              impact while maximizing comfort and energy efficiency. From passive solar design to advanced insulation
              systems, our homes are as responsible as they are beautiful.
            </p>
          </div>

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-8-WhGG2u8h69r8HVcpaUVzXKfeGoggac.png"
            alt="Modern luxury interior with high ceilings and glass walls"
            containerClassName="h-[600px]"
            initialScale={1.15}
            parallaxDirection={1}
          />
        </div>
      </div>
    </section>
  )
}
