import Navbar from '@/components/navbar'
import { Separator } from '@/components/ui/separator'
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '@/components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex justify-end p-5">
            <Navbar />
          </div>

          <div>
            <Separator />
          </div>

          {children}

          <div>
            <Footer />
          </div>
        </ThemeProvider>
  )
}
