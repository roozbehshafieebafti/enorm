import type { Metadata } from 'next'
import { ReactNode } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: 'Enorm Test',
  description: 'This is a test application',
}

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
      <body>{children}</body>
    </html>
  )
}
