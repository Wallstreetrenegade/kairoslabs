"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative flex min-h-[640px] items-end overflow-hidden border-y border-border bg-[url('/kairos-earth-cta.png')] bg-cover bg-center py-12 lg:min-h-[760px] lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-xl text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-balance lg:text-4xl">
              Ready to scale your business?
            </h2>

            <p className="mb-5 text-sm leading-6 text-zinc-200 text-pretty lg:text-base">
              Join hundreds of successful brands that trust us with their digital growth. Let's build something
              extraordinary together.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="default"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsModalOpen(true)}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="default" variant="outline" className="border-border bg-black/20 hover:bg-secondary">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
