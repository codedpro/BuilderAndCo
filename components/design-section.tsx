"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="design" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-500 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-9.png-gWmukTdbHptiUFgREr9u0XUtwPv6SA.jpeg"
            alt="Modern interior with glass walls and natural light"
            containerClassName="h-[600px]"
            initialScale={1.15}
            parallaxDirection={1}
          />

          <div className="transition-transform duration-300 ease-out">
            <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">Design Philosophy</h2>
            <p className="text-light-300 mb-6">
              Our design approach is guided by three core principles: connection to nature, timeless modernism, and
              exceptional craftsmanship. These principles inform every decision, from site selection to material
              choices.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-display text-light-100 mb-3">Connection to Nature</h3>
              <p className="text-light-300">
                We design spaces that blur the boundary between inside and outside, creating a seamless connection with
                the natural environment. Floor-to-ceiling glass, natural materials, and thoughtful orientation maximize
                this relationship.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-display text-light-100 mb-3">Timeless Modernism</h3>
              <p className="text-light-300">
                Our aesthetic embraces clean lines, thoughtful proportions, and a restrained material palette. We create
                spaces that feel contemporary yet enduring, avoiding trendy elements that quickly become dated.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-display text-light-100 mb-3">Exceptional Craftsmanship</h3>
              <p className="text-light-300">
                We collaborate with master craftspeople who share our commitment to excellence. From custom millwork to
                hand-finished concrete, every detail receives meticulous attention to ensure the highest quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
