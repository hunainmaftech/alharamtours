"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Sacred Umrah Journeys",
    subtitle: "Perform your spiritual pilgrimage with utmost comfort",
    price: "From $650",
    image: "/kaaba-makkah-umrah-pilgrimage.jpg",
    cta: "Book Now",
  },
  {
    id: 2,
    title: "Explore Holy Destinations",
    subtitle: "Discover sacred Islamic heritage across the world",
    price: "From $300",
    image: "/egypt-pyramids-cairo-tour.jpg",
    cta: "Explore Tours",
  },
  {
    id: 3,
    title: "Group Travel Experiences",
    subtitle: "Travel with your community and share spiritual moments",
    price: "From $1895",
    image: "/group-tour-people-travel.jpg",
    cta: "Join Group",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          {/* Enhanced Gradient Overlay with Purple Theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

          {/* Content */}
          <div
            className={`absolute inset-0 flex items-center justify-start ${idx === current ? "animate-slide-in-left" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <p className="text-white/90 text-sm md:text-base font-semibold mb-2 md:mb-4 animate-slide-in-up">
                  ✨ Premium Travel Experiences
                </p>
                <h2
                  className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight animate-slide-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-xl md:text-2xl text-white/95 mb-6 md:mb-8 animate-slide-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.subtitle}
                </p>
                <div
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 animate-slide-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-accent text-2xl md:text-4xl font-bold">{slide.price.split("$")[1]}</span>
                    <span className="text-white/80 text-sm md:text-base">{slide.price.split("$")[0]}</span>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
        <button
          onClick={prev}
          className="p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${idx === current ? "bg-accent w-8" : "bg-white/50 w-2"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button
          onClick={next}
          className="p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  )
}
