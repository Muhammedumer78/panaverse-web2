import './globals.css'
import Header from "./Components/Header"
import Footer from './Components/Footer'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
