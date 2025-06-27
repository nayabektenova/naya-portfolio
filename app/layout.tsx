import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Naya Bektenova - Software Development Engineer",
  description: "Portfolio site of Naya Bektenova, showcasing software development projects and skills.",
  keywords: "Naya Bektenova, software development engineer, web developer",
  authors: [{ name: "Naya Bektenova" }],
  openGraph: {
    title: "Naya Bektenova - Software Development Engineer",
    description: "Explore Naya's work in app development, simulations, and creative coding.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
