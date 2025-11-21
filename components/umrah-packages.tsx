"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    id: 1,
    title: "5 Nights Economy Umrah",
    rating: "5 Star",
    price: "$650",
    image: "/kaaba-interior-mosque.jpg",
    details: "Perfect for first-timers",
  },
  {
    id: 2,
    title: "5 Nights Premium Umrah",
    rating: "5 Star",
    price: "$725",
    image: "/medina-prophet-mosque.jpg",
    details: "Enhanced comfort & services",
  },
  {
    id: 3,
    title: "5 Nights Deluxe Umrah",
    rating: "5 Star",
    price: "$750",
    image: "/haram-city-night.jpg",
    details: "Luxury experience",
  },
  {
    id: 4,
    title: "Honeymoon Umrah Package",
    rating: "5 Star",
    price: "$1995",
    image: "/istanbul-mosque.jpg",
    details: "Umrah + Turkey/Dubai",
  },
]

export function UmrahPackages() {
  return (
    <section id="packages" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Umrah Packages 2025</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated Umrah packages designed for comfort, spirituality, and value
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-scale-in border border-border/50 hover:border-primary/30 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-md">
                  <Star size={14} className="fill-current" />
                  {pkg.rating}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-sm md:text-base">{pkg.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{pkg.details}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-primary">${pkg.price.split("$")[1]}</span>
                  <span className="text-xs text-muted-foreground">per person</span>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  View Package
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold shadow-lg">
            View All Umrah Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
