"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const holidays = [
  {
    id: 1,
    destination: "Istanbul, Turkey",
    duration: "3-5 Days",
    price: "$325",
    image: "/istanbul-blue-mosque.jpg",
    highlights: ["Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"],
  },
  {
    id: 2,
    destination: "Cairo & Giza, Egypt",
    duration: "3-4 Days",
    price: "$350",
    image: "/cairo-pyramids-giza.jpg",
    highlights: ["Pyramids", "Sphinx", "Nile River"],
  },
  {
    id: 3,
    destination: "Amman & Petra, Jordan",
    duration: "5-7 Days",
    price: "$450",
    image: "/petra-ancient-site.jpg",
    highlights: ["Petra", "Dead Sea", "Desert"],
  },
  {
    id: 4,
    destination: "Marrakech, Morocco",
    duration: "5 Days",
    price: "$400",
    image: "/marrakech-medina.jpg",
    highlights: ["Medina", "Atlas Mountains", "Sahara"],
  },
  {
    id: 5,
    destination: "Dubai, UAE",
    duration: "3-5 Days",
    price: "$400",
    image: "/dubai-burj-khalifa.jpg",
    highlights: ["Burj Khalifa", "Mall", "Beach"],
  },
  {
    id: 6,
    destination: "Cappadocia, Turkey",
    duration: "3 Days",
    price: "$585",
    image: "/placeholder.svg?height=240&width=300",
    highlights: ["Hot Air Balloon", "Cave Hotels", "Desert"],
  },
]

export function HolidayPackages() {
  return (
    <section id="holiday" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Holiday Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore amazing destinations across Turkey, Egypt, Jordan, Morocco, UAE and more
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {holidays.map((holiday, idx) => (
            <div
              key={holiday.id}
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 animate-scale-in border border-border/50 hover:border-primary/30 group"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={holiday.image || "/placeholder.svg"}
                  alt={holiday.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{holiday.duration}</p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <h3 className="font-bold text-foreground text-base">{holiday.destination}</h3>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {holiday.highlights.map((highlight) => (
                    <span key={highlight} className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">From ${holiday.price.split("$")[1]}</span>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  Explore Tour
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold shadow-lg">
            View All Holiday Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
