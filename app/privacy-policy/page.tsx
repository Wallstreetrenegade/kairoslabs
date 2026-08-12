import type { Metadata } from "next"
import { ContentPage } from "@/components/content-page"

export const metadata: Metadata = { title: "Privacy Policy | Kairos Technology Labs" }

export default function PrivacyPolicy() {
  return <ContentPage title="Privacy Policy" updated="August 4, 2026" intro="This Privacy Policy explains how Kairos Technology Labs collects, uses, and protects information when you visit our website, contact us, or use our digital services." sections={[
    { title: "Information we collect", content: <p>We may collect information you provide, such as your name, email address, phone number, company details, project information, and messages. We may also automatically receive technical data such as your IP address, browser type, device information, referring pages, and activity on our site.</p> },
    { title: "How we use information", content: <ul><li>Respond to inquiries and provide requested services.</li><li>Operate, secure, analyze, and improve our website and services.</li><li>Send service updates and, where permitted, marketing communications.</li><li>Comply with legal obligations and protect our rights and users.</li></ul> },
    { title: "How we share information", content: <p>We do not sell personal information. We may share information with vendors that help us host, analyze, communicate, or deliver services; with professional advisers; when required by law; or as part of a business transaction. These parties receive only the information reasonably needed for their work.</p> },
    { title: "Cookies and analytics", content: <p>We may use cookies and similar technologies for essential site functions, preferences, performance, and analytics. Learn more in our <a href="/cookie-policy">Cookie Policy</a>.</p> },
    { title: "Data retention and security", content: <p>We retain information only as long as reasonably necessary for the purposes described here, including legal, accounting, and operational needs. We use reasonable safeguards, but no internet transmission or storage system is completely secure.</p> },
    { title: "Your choices and rights", content: <p>Depending on where you live, you may have rights to access, correct, delete, or restrict use of your personal information, or to withdraw consent. You may also opt out of marketing messages using the unsubscribe method provided in them.</p> },
    { title: "Children’s privacy", content: <p>Our services are intended for businesses and are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p> },
    { title: "Changes and contact", content: <p>We may update this policy and will post the revised effective date here. To ask a privacy question or exercise a privacy right, contact us through the contact form on our home page.</p> },
  ]} />
}
