export function Work() {
  const projects = [
    {
      title: "Luxury Fashion Store",
      category: "Web Development",
      description: "Custom headless commerce platform with advanced filtering and seamless checkout experience",
      image: "/luxury-fashion-ecommerce-website-dark-theme.jpg",
      metrics: "320% increase in conversions",
    },
    {
      title: "Beauty Brand Launch",
      category: "Social Media Growth",
      description: "Viral Instagram and TikTok campaigns that built a community of 500K+ engaged followers",
      image: "/beauty-brand-social-media-content-colorful.jpg",
      metrics: "500K+ followers in 6 months",
    },
    {
      title: "Athletic Wear Campaign",
      category: "Video Ads",
      description: "High-converting video ad series for Meta and YouTube driving 12x ROAS",
      image: "/athletic-sportswear-video-production.jpg",
      metrics: "12x ROAS",
    },
    {
      title: "Home Decor Empire",
      category: "Full-Service Marketing",
      description: "End-to-end digital transformation: custom Shopify Plus build, conversion strategy, paid ads, and content planning",
      image: "/home-decor-interior-design-website.jpg",
      metrics: "$2M+ monthly revenue",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Some of Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real results for real businesses. See how we've helped ecommerce brands scale and dominate their markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{project.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-bold text-primary">{project.metrics}</span>
                  <svg
                    className="w-5 h-5 text-primary transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
