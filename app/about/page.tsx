import type { Metadata } from "next"
import { ContentPage } from "@/components/content-page"

export const metadata: Metadata = { title: "About Us | Kairos Technology Labs" }

export default function About() {
  return <ContentPage title="About Us" intro="Kairos Technology Labs is a technology partner helping businesses turn ambitious ideas into practical, high-performing digital experiences." sections={[
    { title: "What we do", content: <p>We bring web development, ecommerce solutions, digital marketing, and video production together under one roof. That connected approach helps brands create a consistent experience from the first impression through conversion and long-term growth.</p> },
    { title: "How we work", content: <p>We start by listening to the business problem, then shape a focused strategy around the audience and desired outcome. Our work balances clear design, reliable technology, useful data, and straightforward communication.</p> },
    { title: "What we value", content: <ul><li>Work that creates measurable business value.</li><li>Honest, collaborative client relationships.</li><li>Thoughtful use of technology and data.</li><li>Simple solutions that are built to evolve.</li></ul> },
    { title: "Let’s build what’s next", content: <p>Whether you are launching something new or improving an established digital presence, we would be glad to hear what you are working on. Use the contact form on our home page to start a conversation.</p> },
  ]} />
}
