"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="gallery" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-400 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">Gallery</h2>
          <p className="text-light-300 mb-8">
            Explore our collection of architectural spaces that showcase the harmony between modern design and natural
            surroundings.
          </p>
          <p className="text-light-300 text-sm bg-dark-300 p-2 rounded">
            <span className="text-red-500 font-bold">Note:</span> Images will show a red border at the top when they
            reach their final state (when the top of the image reaches the navigation bar height).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-2-6CZZM9YeA0UfmYkiiLzZtKHjUyrppz.png"
            alt="Indoor-outdoor living space with pool"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-3-JmWFVCp5EUNvLfrrK6QDI9CcrsEI6m.png"
            alt="Modern residence with water feature"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-5-6vbkAUx2JcthU7yqqR4o8cMJHUBaUx.png"
            alt="Minimalist interior with outdoor view"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-6-aUTvwwFa3ZzFQQeiH6bKU1aWSYJGrO.png"
            alt="Forest house at night"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-7-m3p1lqCtnuFDfZFVGgU9HhT4g3EaUC.png"
            alt="Zen garden with stepping stones"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-8-WhGG2u8h69r8HVcpaUVzXKfeGoggac.png"
            alt="High ceiling living room with glass walls"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />
        </div>
      </div>
    </section>
  )
}
