import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-white/20">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h3 className="text-xl font-bold">Alharamtours</h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Premium Hajj, Umrah, and holiday travel services for over two decades. Your trusted partner in spiritual
              journeys.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#offers" className="hover:text-white transition-colors">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Umrah Packages
                </a>
              </li>
              <li>
                <a href="#holiday" className="hover:text-white transition-colors">
                  Holiday Tours
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Umrah Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hajj Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Holiday Tours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visa Processing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Transportation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+12122441818" className="hover:text-white transition-colors">
                  +1 (212) 244-1818
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@alharamtours.com" className="hover:text-white transition-colors">
                  info@alharamtours.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <p>New York, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; 2025 Alharamtours. All rights reserved.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
