import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Metal_Mania, Share_Tech_Mono } from 'next/font/google'
import './globals.css'

const metal = Metal_Mania({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-metal',
})

const shareTech = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-share-tech',
})

export const metadata: Metadata = {
  title: 'Corpses Coven — Witchy Survival Minecraft Server',
  description:
    'Corpses Coven is a magical survival Minecraft SMP with proximity voice chat, curated mods, and a thriving community. Join at mc.corpsecoven.com.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0709',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${metal.variable} ${shareTech.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
