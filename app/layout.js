import '../styles/globals.css'
import { Navigation } from './components/Navigation'
import { Space_Grotesk } from '@next/font/google'

const font = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-grotesk'
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}