"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Alharamtours</h1>
              <p className="text-xs text-muted-foreground">Premium Tours</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#offers"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Offers
            </a>
            <a
              href="#packages"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Packages
            </a>
            <a
              href="#holiday"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Holidays
            </a>
            <a
              href="#destinations"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Destinations
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              Reviews
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">Contact Us</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-3 animate-fade-in">
            <a href="#offers" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Offers
            </a>
            <a href="#packages" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Packages
            </a>
            <a href="#holiday" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Holidays
            </a>
            <a href="#destinations" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Destinations
            </a>
            <a href="#why" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Why Us
            </a>
            <a href="#testimonials" className="block text-sm font-medium text-foreground hover:text-primary py-2">
              Reviews
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Contact Us</Button>
          </div>
        )}
      </div>
    </header>
  )
}
