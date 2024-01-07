import Navbar from "@/components/navbar"
import "../styles/global.css"
import { Pixelify_Sans } from "next/font/google"

const pixelify_sans = Pixelify_Sans({
  subsets: ['latin'],
  display: "swap",
})

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by Next.js',
}



export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className={pixelify_sans.className}>
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  )
}
