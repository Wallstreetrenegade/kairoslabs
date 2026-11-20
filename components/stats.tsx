import { ArrowUpRight } from "lucide-react"

export function Stats() {
  const stats = [
    {
      value: "300%",
      label: "Average ROI increase",
      company: "Shopify Plus",
    },
    {
      value: "98%",
      label: "Client satisfaction",
      company: "BigCommerce",
    },
    {
      value: "$50M+",
      label: "Revenue generated",
      company: "WooCommerce",
    },
    {
      value: "2.5x",
      label: "Faster time to market",
      company: "Magento",
    },
  ]

  const offers = [
    {
      name: "Wife Code",
      href: "https://wificode.dev/",
    },
    {
      name: "Push Profit Pro",
      href: "https://pushprofit.pro/",
    },
  ]

  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-foreground lg:text-5xl">{stat.value}</div>
              <div className="mb-1 text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-xs font-medium text-primary">{stat.company}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {offers.map((offer) => (
              <a
                key={offer.name}
                href={offer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between rounded-lg border border-primary/40 bg-background px-6 py-4 font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <span>{offer.name}</span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            Email us if you would like to be an affiliate for any of these offers.
          </p>
        </div>
      </div>
    </section>
  )
}
