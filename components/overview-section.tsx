import Image from "next/image"

export function OverviewSection() {
  return (
    <section id="overview" className="py-20 px-4 md:px-6 bg-stone-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-light text-stone-900 mb-6">
              Architectural Excellence in Every Detail
            </h2>
            <p className="text-stone-700 mb-6">
              Grishin Residences represents the pinnacle of modern architectural design, where form and function merge
              seamlessly with the natural environment. Each residence is thoughtfully crafted to provide an unparalleled
              living experience.
            </p>
            <p className="text-stone-700 mb-6">
              Our properties feature expansive glass walls that dissolve the boundary between interior and exterior,
              allowing natural light to flood the living spaces while providing breathtaking views of the surrounding
              landscape.
            </p>
            <p className="text-stone-700">
              Premium materials including natural stone, sustainable wood, and architectural concrete create a
              harmonious palette that complements the environment while providing durability and timeless elegance.
            </p>
          </div>
          <div className="relative h-[500px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lux-8-WhGG2u8h69r8HVcpaUVzXKfeGoggac.png"
              alt="Modern luxury interior with high ceilings and glass walls"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
