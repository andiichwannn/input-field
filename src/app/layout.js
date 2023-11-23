import  Navbar from '@components/navbar/navbar.js'
import '@styles/globals.css'

export const metadata = {
  title: 'TugasPMW-W12',
  description: 'D121211025 - Andi Ichwan Farmawan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
