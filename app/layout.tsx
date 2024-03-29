import './globals.css'
import './embla.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { GoogleTagManager } from "@next/third-parties/google"

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ian Olmstead',
  description: 'Generated by create next app',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={raleway.className}>
            {children}
            <GoogleTagManager gtmId="GTM-PDP55VPW" />
        </body>
      </html>
    )
  }