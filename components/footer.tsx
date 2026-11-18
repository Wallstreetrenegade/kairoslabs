import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <img src="/kairos-logo.png" alt="Kairos Technology Labs" className="h-20 w-auto rounded-sm object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">Transforming businesses with cutting-edge technology and data-driven marketing.</p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#services" className="transition-colors hover:text-foreground">Marketing</a></li>
              <li><a href="/#services" className="transition-colors hover:text-foreground">Web Development</a></li>
              <li><a href="/#services" className="transition-colors hover:text-foreground">AI Solutions</a></li>
              <li><a href="/#services" className="transition-colors hover:text-foreground">Video Production</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="transition-colors hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="transition-colors hover:text-foreground">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="transition-colors hover:text-foreground">Refund Policy</Link></li>
              <li><Link href="/cookie-policy" className="transition-colors hover:text-foreground">Cookie Policy</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-foreground">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+18582671162" className="transition-colors hover:text-foreground">
                  858 267 1162
                </a>
              </li>
              <li>
                <a href="mailto:Support@kairostechnologylabs.com" className="break-all transition-colors hover:text-foreground">
                  Support@kairostechnologylabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Kairos Technology Labs. All rights reserved.</div>
      </div>
    </footer>
  )
}
