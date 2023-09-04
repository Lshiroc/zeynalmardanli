import './../styles/global.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zeynal Mardanli | Web Developer',
  description: 'A curious Web Developer who wants to learn various things. Usually works with ReactJS, NextJS, SASS and etc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-custom.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
