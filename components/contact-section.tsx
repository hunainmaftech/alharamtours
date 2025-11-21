"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
    returnDate: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
      returnDate: "",
      message: "",
    })
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Plan Your Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a free quote or inquire about our packages. Our travel specialists are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
            {/* Phone Card */}
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Call Us Free</h3>
              <a href="tel:+12122441818" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                +1 (212) 244-1818
              </a>
              <p className="text-xs text-muted-foreground mt-2">24/7 Support Available</p>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Email Us</h3>
              <a
                href="mailto:info@alharamtours.com"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                info@alharamtours.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
            </div>

            {/* Location Card */}
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">Visit Us</h3>
              <p className="text-primary font-semibold">New York, USA</p>
              <p className="text-xs text-muted-foreground mt-2">Serving North America</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 animate-slide-in-right space-y-5">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Phone Row */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (212) 000-0000"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Travel Details Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="departureCity" className="block text-sm font-semibold text-foreground mb-2">
                  Departure City
                </label>
                <input
                  type="text"
                  id="departureCity"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleChange}
                  placeholder="e.g., New York"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="arrivalCity" className="block text-sm font-semibold text-foreground mb-2">
                  Arrival City
                </label>
                <input
                  type="text"
                  id="arrivalCity"
                  name="arrivalCity"
                  value={formData.arrivalCity}
                  onChange={handleChange}
                  placeholder="e.g., Makkah"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="departureDate" className="block text-sm font-semibold text-foreground mb-2">
                  Departure Date
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="returnDate" className="block text-sm font-semibold text-foreground mb-2">
                  Return Date
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel plans, preferences, or any special requests..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Send size={18} />
              Get a Free Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
