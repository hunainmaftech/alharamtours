"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Alharamtours offer?",
    answer:
      "We offer premium Hajj and Umrah packages, holiday tour packages, airline tickets, ground transportation, visa processing, and comprehensive travel services with over 20 years of experience.",
  },
  {
    question: "How can I book a package?",
    answer:
      "Simply browse our packages, fill in your details in the contact form, and our agents will confirm availability and complete your booking within 24 hours.",
  },
  {
    question: "Are group and family discounts available?",
    answer:
      "Yes, we offer special group discounts and family rates. Contact our team for customized pricing based on your group size.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "We can customize any package including hotel changes, additional nights, activities, and more. Just let us know your preferences.",
  },
  {
    question: "What's included in package prices?",
    answer:
      "Package prices include accommodation, flights, ground transportation, meals, visa processing (where applicable), and 24/7 customer support.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via phone at +1 (212) 244-1818, email at info@alharamtours.com, or use the contact form on our website.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about our services</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-left font-semibold text-foreground text-base md:text-lg">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === idx && (
                <div className="px-6 pb-6 border-t border-border text-muted-foreground text-sm leading-relaxed animate-slide-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
