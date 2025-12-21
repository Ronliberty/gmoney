import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grocery Money - Earn Weekly Income Through AI Platforms',
  description: 'Earn consistent weekly income through AI platforms without doing the work yourself.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-gray-50 text-gray-800 font-sans leading-relaxed antialiased">
        {children}
      </body>
    </html>
  )
}