import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anoma Skills - Decentralized Skill Exchange',
  description: 'Connect with peers to teach and learn skills through Anoma\'s intent-based matching system. Decentralized, secure, and powered by blockchain technology.',
  keywords: ['anoma', 'skills', 'blockchain', 'decentralized', 'learning', 'teaching', 'web3'],
  authors: [{ name: 'Anoma Skills Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FF4444" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
