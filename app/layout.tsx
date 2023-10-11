import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DPS Resto YT',
  description: 'food delivery app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
