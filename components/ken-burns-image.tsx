"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface KenBurnsImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  initialScale?: number
  parallaxDirection?: 1 | -1
  parallaxSpeed?: number
  overlay?: ReactNode
}

export function KenBurnsImage({
  src,
  alt,
  className,
  containerClassName,
  initialScale = 1.15,
  parallaxDirection = 1,
  parallaxSpeed = 14, // Standardized to the 3rd image value
  overlay,
}: KenBurnsImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Height of the navigation bar (estimated)
  const navHeight = 80

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return

      const windowHeight = window.innerHeight

      // Get the container's position relative to the viewport
      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top

      // Calculate progress based on how close the top of the container is to the nav height position
      // 0 = container top is at bottom of viewport, 1 = container top is at nav height or above
      let progress = 0

      if (containerTop >= windowHeight) {
        // Container is below viewport, fully scaled
        progress = 0
      } else if (containerTop <= navHeight) {
        // Container top has reached or passed nav height, natural size
        progress = 1
      } else {
        // Container is between bottom of viewport and nav height
        // Map this range to 0-1 progress
        progress = (windowHeight - containerTop) / (windowHeight - navHeight)
      }

      // Scale factor: initialScale when out of view, 1.0 when top reaches nav height
      const scaleFactor = initialScale - (initialScale - 1) * progress

      // Only apply parallax when the image is still scaling (before reaching nav height)
      const translateY = progress < 1 ? parallaxDirection * (1 - progress) * parallaxSpeed : 0

      // Apply both the Ken Burns scale effect and the subtle parallax
      imageRef.current.style.transform = `scale(${scaleFactor}) translateY(${translateY}px)`

      // For debugging - add a visual indicator when the animation is at its final state
      if (progress >= 1 && !isAnimating) {
        setIsAnimating(true)
      } else if (progress < 1 && isAnimating) {
        setIsAnimating(false)
      }
    }

    // Set up intersection observer to only apply effects when near viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", handleScroll)
            handleScroll() // Initial calculation
          } else {
            window.removeEventListener("scroll", handleScroll)
          }
        })
      },
      { rootMargin: "200px" }, // Start observing slightly before the element comes into view
    )

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [initialScale, parallaxDirection, parallaxSpeed, isAnimating, navHeight])

  return (
    <div ref={containerRef} className={cn("overflow-hidden relative", containerClassName)}>
      <Image
        ref={imageRef}
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-transform duration-1000 ease-out",
          isAnimating && "border-t-4 border-red-500", // Visual indicator when animation completes
          className,
        )}
        style={{ transformOrigin: "center center" }}
      />
      {overlay && overlay}
    </div>
  )
}
