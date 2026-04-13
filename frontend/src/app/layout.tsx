import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import ConditionalNavbar from '@/components/ConditionalNavbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Omnilexis - AI-Driven Library Management',
  description: 'Your intelligent library management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50`}>
        <ConditionalNavbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
