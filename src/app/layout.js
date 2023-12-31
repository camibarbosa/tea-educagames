import NavBar from '@/app/pages/Navbar/page'
import Card from '@/app/pages/Card/page'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TEA EducaGames',
  description: 'Jogos educativos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}</body>
    </html>
  )
}
