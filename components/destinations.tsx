"use client"

const destinations = [
  {
    name: "Makkah",
    description: "The holiest city in Islam, center of Umrah pilgrimage",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Medina",
    description: "Home to the Prophet's Mosque, spiritual second destination",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Istanbul",
    description: "Historic crossroads of cultures and religions",
    image: "/istanbul-mosque.jpg",
  },
  {
    name: "Cairo",
    description: "Ancient wonders and Islamic heritage sites",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Top Destinations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover sacred and incredible destinations we serve
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={dest.name}
              className="relative group overflow-hidden rounded-xl h-80 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 group-hover:justify-center transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{dest.name}</h3>
                <p className="text-white/80 text-sm hidden group-hover:block animate-slide-in-up">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
