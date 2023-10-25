// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learining next',
  description: 'learning next.js',
}

export default function RootLayout({ children }) {
  console.log("Children ",children)
  return (
    <html lang="en">
      
      <div> Layout inside Main</div>
     {children}
    </html>
  )
}
