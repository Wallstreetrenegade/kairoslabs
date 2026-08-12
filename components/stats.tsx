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
      </div>
    </section>
  )
}
