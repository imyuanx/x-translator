import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '𝕏 𝕋ℝ𝔸ℕ𝕊𝕃𝔸𝕋𝕆ℝ',
  description: '𝕋ℝ𝔸ℕ𝕊𝕃𝔸𝕋𝔼 𝕋𝕎𝕀𝕋𝕋𝔼ℝ 𝕋𝕆 𝕏',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
