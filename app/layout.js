import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Jean Almario | Full Stack Developer',
  description: 'Computer Science student and Full Stack Developer specializing in AI, Machine Learning, and Modern Web Technologies.',
  authors: [{ name: 'Jean Almario', url: 'https://www.linkedin.com/in/jean-almario-7238301ab' }],
  keywords: ['Software Engineer', 'Full Stack Developer', 'AI', 'Machine Learning', 'Next.js', 'React', 'Portfolio'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
