import type { ReactNode } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"

type Section = { title: string; content: ReactNode }

export function ContentPage({ title, intro, sections, updated }: { title: string; intro: string; sections: Section[]; updated?: string }) {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/90">
        <div className="container mx-auto flex h-16 items-center px-4 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="Kairos Technology Labs home">
            <img src="/kairos-logo.png" alt="Kairos Technology Labs" className="h-14 w-auto rounded-sm object-contain" />
          </Link>
        </div>
      </header>
      <article className="container mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Kairos Technology Labs</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {updated && <p className="mt-4 text-sm text-muted-foreground">Effective date: {updated}</p>}
        <p className="mt-8 text-lg leading-8 text-muted-foreground">{intro}</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => <section key={section.title}><h2 className="mb-3 text-2xl font-semibold">{section.title}</h2><div className="space-y-3 leading-7 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">{section.content}</div></section>)}
        </div>
      </article>
      <Footer />
    </main>
  )
}
