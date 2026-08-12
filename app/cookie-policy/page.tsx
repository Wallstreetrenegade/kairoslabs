import type { Metadata } from "next"
import { ContentPage } from "@/components/content-page"

export const metadata: Metadata = { title: "Cookie Policy | Kairos Technology Labs" }

export default function CookiePolicy() {
  return <ContentPage title="Cookie Policy" updated="August 4, 2026" intro="This Cookie Policy explains how Kairos Technology Labs may use cookies and similar technologies on our website." sections={[
    { title: "What cookies are", content: <p>Cookies are small text files stored on your device when you visit a website. Similar technologies, such as pixels and local storage, can perform related functions.</p> },
    { title: "How we use them", content: <ul><li><strong className="text-foreground">Essential:</strong> support security and core website operation.</li><li><strong className="text-foreground">Preferences:</strong> remember settings and choices.</li><li><strong className="text-foreground">Analytics:</strong> help us understand traffic and improve performance.</li><li><strong className="text-foreground">Marketing:</strong> measure campaigns or deliver relevant communications where enabled.</li></ul> },
    { title: "Third-party technologies", content: <p>Service providers that support hosting, analytics, or embedded features may place or read their own cookies. Their use of information is governed by their privacy policies.</p> },
    { title: "Managing cookies", content: <p>You can block or delete cookies through your browser settings. Blocking essential cookies may cause parts of the website to function incorrectly. Where a consent control is provided, you can use it to change non-essential cookie preferences.</p> },
    { title: "Updates and contact", content: <p>We may update this policy as our practices or applicable requirements change. Questions can be submitted through the contact form on our home page.</p> },
  ]} />
}
