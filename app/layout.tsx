import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap'
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Marayza Estética | Luxo e Cuidado em Cada Detalhe',
  description: 'Descubra a excelência em estética avançada. Tratamentos personalizados em Cidade Tiradentes, SP. Realce sua essência com Marayza Esteticista.',
  keywords: ['estética', 'beleza', 'tratamentos faciais', 'harmonização', 'cidade tiradentes', 'marayza esteticista'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${playfair.variable} ${outfit.variable} font-sans antialiased text-foreground bg-background selection:bg-primary/20 selection:text-primary`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
