import type { Metadata } from "next"
import { ContentPage } from "@/components/content-page"

export const metadata: Metadata = { title: "Refund Policy | Kairos Technology Labs" }

export default function RefundPolicy() {
  return (
    <ContentPage
      title="Refund Policy"
      updated="November 18, 2026"
      intro="Our objective is to provide excellent service and make sure every client is happy with the work and support they receive from Kairos Technology Labs."
      sections={[
        {
          title: "Our satisfaction commitment",
          content: (
            <p>
              If you are not happy with our services, you may request a refund. We encourage you to contact us as soon as possible so we can understand your concerns and work toward a satisfactory resolution.
            </p>
          ),
        },
        {
          title: "How to request a refund",
          content: (
            <p>
              Submit your request by emailing <a href="mailto:Support@kairostechnologylabs.com">Support@kairostechnologylabs.com</a> or calling <a href="tel:+18582671162">858 267 1162</a>. Please include your name, company name, the service purchased, and a brief explanation of your concern so we can locate your account and assist you promptly.
            </p>
          ),
        },
        {
          title: "No forced retention",
          content: (
            <p>
              We do not force anyone to retain our services. Clients may discontinue services in accordance with any active service agreement, and we will work with them in good faith to address refund requests and account closure.
            </p>
          ),
        },
        {
          title: "Service agreements",
          content: (
            <p>
              If a separate written service agreement includes specific cancellation or refund terms, those terms will apply. Nothing in this policy limits any rights available under applicable law.
            </p>
          ),
        },
      ]}
    />
  )
}
