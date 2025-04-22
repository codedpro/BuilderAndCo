"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function ResidencesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="residences" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-400 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">Our Residences</h2>
          <p className="text-light-300">
            Each Natura residence is uniquely designed to respond to its specific site conditions, creating a living
            experience that is both distinctive and harmonious with the surrounding landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-1.png-oAnM6jOulDuhkuz1LI1DyfRSfi1L2a.jpeg"
            alt="Lakeside residence with glass walls"
            containerClassName="h-[400px]"
            initialScale={1.15}
            parallaxDirection={1}
            overlay={
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-display text-light-100 mb-2">Lakeside Pavilion</h3>
                <p className="text-light-200/80 text-sm">A tranquil retreat nestled by the water</p>
              </div>
            }
          />

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-4-AATQV8VqBg1QKteE6FI4Nl6E9r0R47.png"
            alt="Forest glass house with stone elements"
            containerClassName="h-[400px]"
            initialScale={1.15}
            parallaxDirection={1}
            overlay={
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-display text-light-100 mb-2">Forest Glass House</h3>
                <p className="text-light-200/80 text-sm">Immersive living among ancient trees</p>
              </div>
            }
          />

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-7-m3p1lqCtnuFDfZFVGgU9HhT4g3EaUC.png"
            alt="Zen garden with stepping stones"
            containerClassName="h-[400px]"
            initialScale={1.15}
            parallaxDirection={1}
            overlay={
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-display text-light-100 mb-2">Zen Courtyard</h3>
                <p className="text-light-200/80 text-sm">Japanese-inspired tranquility</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}
