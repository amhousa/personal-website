import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Personal website showcasing projects, skills, and more",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}

