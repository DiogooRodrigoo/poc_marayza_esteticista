import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Marayza Estética | Conecta Leste SP',
  description: 'Clínica de estética especializada em tratamentos faciais, corporais e bem-estar. Realce sua beleza natural em Cidade Tiradentes, São Paulo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
