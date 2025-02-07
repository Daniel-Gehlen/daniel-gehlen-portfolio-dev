import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Matrix Portfolio",
  description: "A Matrix-themed portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background GIF */}
        <div
          className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/fundo.gif)" }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

