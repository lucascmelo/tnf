import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "True North Fortress — Home Security Consulting (Ontario)",
  description:
    "In-home security consulting & coaching for Ontario families — one visit that shows you what to fix, what to buy, and how to act lawfully and calmly under stress.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Service"],
            name: "True North Fortress",
            description: "In-home security consulting & coaching service",
            areaServed: [
              "Greater Toronto Area",
              "Kitchener-Waterloo",
              "London",
              "Windsor",
              "Peel",
              "Chatham-Kent",
              "Tillsonburg",
            ],
            serviceType: "Home Security Consulting",
          })}
        </script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
