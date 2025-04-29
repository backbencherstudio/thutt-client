import React from 'react'
import Navbar from './_components/_reusable/_navbar/navbar'
import Footer from './_components/_reusable/_footer/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
