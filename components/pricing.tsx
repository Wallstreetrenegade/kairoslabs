"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    features: [
      "Basic website setup",
      "Social media profile optimization",
      "1 short-form video ad",
      "Email support",
      "1 week delivery",
    ],
  },
  {
    name: "Growth",
    description: "Scale your ecommerce presence",
    features: [
      "Custom responsive website",
      "Social media content calendar",
      "3 video ads (short & long-form)",
      "Basic SEO optimization",
      "Priority email support",
      "2 week delivery",
    ],
  },
  {
    name: "Professional",
    description: "Enhanced digital marketing suite",
    features: [
      "Advanced website with CMS",
      "Multi-platform social strategy",
      "5 professional video ads",
      "Email marketing automation",
      "Analytics dashboard",
      "Dedicated support",
      "3 week delivery",
    ],
    popular: true,
  },
  {
    name: "Business",
    description: "Comprehensive growth package",
    features: [
      "Full ecommerce platform",
      "AI chatbot integration",
      "10 video ads + editing",
      "Advanced social media management",
      "Conversion optimization",
      "Monthly strategy calls",
      "4 week delivery",
    ],
  },
  {
    name: "Enterprise",
    description: "Complete digital transformation",
    features: [
      "Custom AI-powered platform",
      "Full-service marketing agency",
      "Unlimited video production",
      "Omnichannel social management",
      "Advanced analytics & reporting",
      "24/7 priority support",
      "White-glove service",
      "6 week delivery",
    ],
  },
  {
    name: "Custom",
    description: "Tailored solutions for unique needs",
    features: [
      "Fully customized services",
      "Dedicated team assignment",
      "Enterprise-level AI solutions",
      "Unlimited revisions",
      "Custom integrations",
      "Ongoing maintenance",
      "Flexible timeline",
    ],
    custom: true,
  },
]

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 bg-background">
        <div className="w-full flex flex-col items-center px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Flexible Technology <span className="text-primary">Packages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Choose the package that fits your business goals. All plans include our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative p-8 flex flex-col transition-all duration-300 hover:scale-105 w-full ${
                  tier.popular
                    ? "border-primary shadow-lg shadow-primary/20"
                    : tier.custom
                      ? "border-primary/50 bg-card/50"
                      : "border-border hover:border-primary/50"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-balance">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                  onClick={() => setIsModalOpen(true)}
                >
                  {tier.custom ? "Contact Sales" : "Get Started"}
                </Button>
              </Card>
            ))}
          </div>

          <p className="mt-12 text-center text-muted-foreground">
            Every engagement is tailored to your goals, scope, and technical requirements.
          </p>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
