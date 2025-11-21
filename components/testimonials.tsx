"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    location: "New York",
    text: "Alharamtours made my Umrah unforgettable. Exceptional service, excellent accommodation, and professional guides.",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Fatima Khan",
    location: "Chicago",
    text: "Perfectly organized tour with knowledgeable guides. The itinerary was well-planned and comfortable throughout.",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Mohammad Ali",
    location: "Los Angeles",
    text: "Best value for money! Included everything and more. Highly recommended to all seeking quality pilgrimage.",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    location: "Houston",
    text: "Outstanding customer service! They helped us at every step. Will definitely book with them again.",
    rating: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Customer Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from thousands of satisfied customers who've traveled with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-4 line-clamp-4 text-sm leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
