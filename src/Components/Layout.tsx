import React, { ReactNode } from 'react'
import Footer from './Footer/Footer'
import Navbar from './NavBar/Navbar'


export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <Navbar></Navbar>
        {children}
     
    </div>
  )
}

