"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const offers = [
  {
    id: 1,
    title: "5 Nights November Umrah",
    rating: "5 Star",
    price: "$775",
    image: "/kaaba-haram-umrah.jpg",
    amenities: ["Hotel", "Meals", "Transport", "Guide"],
  },
  {
    id: 2,
    title: "7 Nights Premium Umrah",
    rating: "5 Star",
    price: "$1075",
    image: "/medina-prophet-mosque.jpg",
    amenities: ["Hotel", "Meals", "Transport", "Guide"],
  },
  {
    id: 3,
    title: "Special Flight Fares",
    rating: "Best Price",
    price: "$650",
    image: "/airplane-flight.jpg",
    amenities: ["USA", "Saudi Arabia", "Direct"],
  },
  {
    id: 4,
    title: "Luxury Transportation",
    rating: "Premium",
    price: "$350",
    image: "/luxury-sedan-car.jpg",
    amenities: ["AC Vehicle", "Driver", "Comfort"],
  },
]

export function SpecialOffers() {
  return (
    <section id="offers" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Special Offers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss our exclusive limited-time offers for Umrah, flights, and transportation
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={offer.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-scale-in border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {offer.rating.includes("Star") && (
                  <div className="absolute top-3 left-3 bg-accent px-3 py-1 rounded-full text-xs font-bold text-accent-foreground flex items-center gap-1 shadow-md">
                    <Star size={14} className="fill-current" />
                    {offer.rating}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-foreground mb-3 line-clamp-2 text-sm md:text-base">{offer.title}</h3>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-primary">${offer.price.split("$")[1]}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {offer.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded font-medium"
                    >
                      ✓ {amenity}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent font-semibold"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold shadow-lg">
            View All Special Offers
          </Button>
        </div>
      </div>
    </section>
  )
}
