import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Creemers Exclusive - Professional Hospitality Services',
  description: 'Tom Creemers - Experienced freelance hospitality professional offering exceptional service in Dutch, English, German, and French.',
  keywords: 'hospitality, horeca, freelance, service, Tom Creemers, professional',
  authors: [{ name: 'Tom Creemers' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/resources/favicon.png', sizes: '32x32' },
      { url: '/resources/favicon.png', sizes: '64x64' },
      { url: '/resources/favicon.png', sizes: '96x96' },
      { url: '/resources/favicon.png', sizes: '128x128' },
    ],
    shortcut: '/resources/favicon.png',
    apple: [
      { url: '/resources/favicon.png', sizes: '180x180' },
      { url: '/resources/favicon.png', sizes: '152x152' },
      { url: '/resources/favicon.png', sizes: '144x144' },
      { url: '/resources/favicon.png', sizes: '120x120' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

