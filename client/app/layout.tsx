import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LGS Super - LGS Sınav Hazırlık Platformu',
  description: 'Kapsamlı LGS sınav hazırlık platformu. Interaktif dersler, deneme sınavları ve kişiselleştirilmiş çalışma planları.',
  keywords: 'LGS, sınav hazırlık, eğitim, matematik, türkçe, fen bilimleri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}