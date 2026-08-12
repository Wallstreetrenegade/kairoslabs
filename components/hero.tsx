import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-start overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/kairos-office-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/15 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background/65" />

        <div className="relative flex w-full justify-end px-6 pb-16 pt-12 lg:px-16 lg:pt-14">
          <div className="max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/20 px-3 py-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Innovate • Build • Scale</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-tight text-balance lg:text-5xl">
              Technology built for <span className="text-primary">what comes next</span>
            </h1>

            <p className="mb-6 max-w-lg text-base leading-7 text-zinc-200 text-pretty lg:text-lg">
              Kairos Technology Labs transforms ambitious ideas into powerful digital products through intelligent
              software, AI solutions, and growth-focused technology.
            </p>

          </div>
        </div>
    </section>
  )
}
