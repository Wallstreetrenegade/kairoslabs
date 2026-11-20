import { Card } from "@/components/ui/card"
import { Code2, Store, Video, Share2, ShoppingCart, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Digital Marketing",
      description:
        "Data-driven strategies that convert browsers into buyers. SEO, PPC, email campaigns, and conversion optimization tailored for your business.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Lightning-fast, scalable platforms built with modern frameworks. Custom web applications, e-commerce sites, and seamless integrations.",
    },
    {
      icon: Store,
      title: "Ecommerce Solutions",
      description:
        "Conversion-focused online stores with secure checkout, inventory integrations, customer portals, and streamlined order management.",
    },
    {
      icon: Video,
      title: "Video Ads Production",
      description:
        "High-converting video content for social media and paid campaigns. Product showcases, testimonials, and brand storytelling.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Build your brand presence across all platforms. Content strategy, community management, and influencer partnerships.",
    },
    {
      icon: Zap,
      title: "Growth Acceleration",
      description:
        "End-to-end growth strategies combining technology and marketing. A/B testing, analytics, and continuous optimization.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
            Complete digital solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Our collection of services spans every aspect of digital transformation. From development to marketing,
            we've got you covered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-card-foreground">{service.title}</h3>

              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:scale-150" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
