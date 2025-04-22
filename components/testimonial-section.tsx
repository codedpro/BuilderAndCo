export function TestimonialSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-stone-900 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-light mb-12">What Our Residents Say</h2>
        <blockquote className="mb-8">
          <p className="text-xl md:text-2xl italic font-light mb-6 text-balance">
            "Living in a Grishin residence has transformed my daily experience. The thoughtful integration with nature
            creates a sense of peace I've never experienced in a home before. Waking up to the reflection of trees on
            water is something I'll never take for granted."
          </p>
          <footer className="text-stone-300">
            <cite>— Michael Chen, Forest Glass House Resident</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
