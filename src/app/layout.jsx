import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Anton } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

export const metadata = {
  title: 'Locadora Red Devs',
  description: 'pagina incial locadora red-devs',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} bg-gradient-to-b from-first_color_gradient to-second_color_gradient h-[100vh] text-branco flex items-center justify-around flex-col`}>{children}</body>
    </html>
  )
}
