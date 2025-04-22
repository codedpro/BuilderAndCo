"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !formRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (top < windowHeight * 0.75) {
        formRef.current.style.opacity = "1"
        formRef.current.style.transform = "translateY(0)"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-500">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">Contact Us</h2>
          <p className="text-light-300">
            Interested in experiencing one of our architectural masterpieces? Contact our team to schedule a private
            viewing or to learn more about our available residences.
          </p>
        </div>

        <form
          ref={formRef}
          className="space-y-6 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-200 mb-1">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="rounded-none bg-dark-400 border-dark-300 focus:border-accent1 focus:ring-accent1 text-light-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-200 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="rounded-none bg-dark-400 border-dark-300 focus:border-accent1 focus:ring-accent1 text-light-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-light-200 mb-1">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="Subject"
              className="rounded-none bg-dark-400 border-dark-300 focus:border-accent1 focus:ring-accent1 text-light-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light-200 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              rows={5}
              className="rounded-none bg-dark-400 border-dark-300 focus:border-accent1 focus:ring-accent1 text-light-100"
            />
          </div>

          <Button className="bg-accent1 hover:bg-accent1-dark text-light-100 rounded-none px-8 py-6 w-full md:w-auto">
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </section>
  )
}
