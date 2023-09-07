import './globals.css'
import { Rubik } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/footer'
import Navbar from './components/navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Ian Olmstead',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${rubik.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
