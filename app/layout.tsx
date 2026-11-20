import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kairos Technology Labs - Innovate, Build, Scale",
  description:
    "Kairos Technology Labs builds custom software, modern websites, ecommerce platforms, and digital growth systems for ambitious businesses.",
  openGraph: {
    title: "Kairos Technology Labs",
    description: "The complete platform for digital growth",
    siteName: "Kairos Technology Labs",
    images: [
      {
        url: "/kairos-earth-brand.png",
        width: 360,
        height: 360,
        alt: "Kairos Technology Labs - Innovate, Build, Scale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairos Technology Labs",
    description: "The complete platform for digital growth",
    images: ["/kairos-earth-brand.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/kairos-earth-brand.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
