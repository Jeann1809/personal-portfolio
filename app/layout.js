import './globals.css'
import { Archivo, JetBrains_Mono } from 'next/font/google'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jbmono',
  display: 'swap',
})

export const metadata = {
  title: 'Jean Almario — Full-Stack & ML/AI Engineer',
  description: 'Computer Science student at Texas Tech University, focused on full-stack development and applied machine learning.',
  authors: [{ name: 'Jean Almario', url: 'https://linkedin.com/in/jeanalmario' }],
  keywords: ['Software Engineer', 'Full Stack Developer', 'AI', 'Machine Learning', 'Next.js', 'React', 'Portfolio'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jbMono.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
