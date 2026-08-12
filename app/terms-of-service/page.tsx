import type { Metadata } from "next"
import { ContentPage } from "@/components/content-page"

export const metadata: Metadata = { title: "Terms of Service | Kairos Technology Labs" }

export default function TermsOfService() {
  return <ContentPage title="Terms of Service" updated="August 4, 2026" intro="These Terms govern your use of the Kairos Technology Labs website. A separate written agreement may apply to services we provide to you; if it conflicts with these Terms, that agreement controls." sections={[
    { title: "Acceptance and eligibility", content: <p>By using this website, you agree to these Terms. You must be legally able to enter into this agreement and, if acting for an organization, have authority to bind it.</p> },
    { title: "Permitted use", content: <p>You may use the website for lawful informational and business purposes. You may not disrupt the site, attempt unauthorized access, introduce malicious code, scrape it through automated means without permission, impersonate another person, or use content in a way that violates law or third-party rights.</p> },
    { title: "Intellectual property", content: <p>The website and its text, design, graphics, branding, software, and other content are owned by Kairos Technology Labs or its licensors and are protected by applicable intellectual-property laws. No rights are granted except the limited right to use the site under these Terms.</p> },
    { title: "Third-party services", content: <p>Our website may link to third-party sites or use third-party services. We do not control them and are not responsible for their content, availability, or privacy practices.</p> },
    { title: "Disclaimers", content: <p>The website is provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim implied warranties, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted access or that all content is error-free.</p> },
    { title: "Limitation of liability", content: <p>To the fullest extent permitted by law, Kairos Technology Labs will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or goodwill arising from your use of the website.</p> },
    { title: "Changes and termination", content: <p>We may update these Terms or suspend access to the site at any time. Continued use after revised Terms are posted means you accept them.</p> },
    { title: "Contact", content: <p>Questions about these Terms may be submitted through the contact form on our home page.</p> },
  ]} />
}
