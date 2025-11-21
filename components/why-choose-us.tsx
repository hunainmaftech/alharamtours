"use client"

import { Award, Headphones, TrendingUp, Shield, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Affordable Rates",
    description: "Best prices in industry with premium quality services and value",
  },
  {
    icon: TrendingUp,
    title: "Special Offers",
    description: "Exclusive discount deals on all Hajj, Umrah, and holiday packages",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Professional support team available round the clock for assistance",
  },
  {
    icon: Shield,
    title: "Trust & Credibility",
    description: "#1 trusted platform with thousands of happy satisfied customers",
  },
  {
    icon: Zap,
    title: "Fast Booking",
    description: "Quick and secure booking with instant confirmation and updates",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Strong partnerships with agencies across North America and worldwide",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose Alharamtours?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over two decades of trusted pilgrimage and travel excellence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-slide-in-up group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
