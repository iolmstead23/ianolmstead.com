import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex justify-end p-5">
              <Navbar />
            </div>

            {children}

            <div>
              <Footer />
            </div>
          </ThemeProvider>
        </>
  )
}
