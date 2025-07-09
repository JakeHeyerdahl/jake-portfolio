import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Designer Jake",
  description:
    "Passionate experience/product designer and researcher specializing in high-level design thinking and prototyping for mission-driven projects.",
  keywords: ["UX Designer", "Product Designer", "User Experience", "Design Systems", "Prototyping"],
  authors: [{ name: "Jake Heyerdahl" }],
  creator: "Jake Heyerdahl",
  openGraph: {
    title: "Designer Jake",
    description:
      "Passionate experience/product designer and researcher specializing in high-level design thinking and prototyping for mission-driven projects.",
    url: "https://jakeheyerdahl.com",
    siteName: "Jake Heyerdahl Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Designer Jake",
    description:
      "Passionate experience/product designer and researcher specializing in high-level design thinking and prototyping for mission-driven projects.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
