import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SpecialOffers } from "@/components/special-offers"
import { UmrahPackages } from "@/components/umrah-packages"
import { HolidayPackages } from "@/components/holiday-packages"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Destinations } from "@/components/destinations"
import { FAQ } from "@/components/faq"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SpecialOffers />
      <UmrahPackages />
      <HolidayPackages />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
