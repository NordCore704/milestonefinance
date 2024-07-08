'use client'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const SharedLayout = ({children}) => {
  return (
   <>
    <Navbar />
    {children}
    <Footer />
   </>
  )
}

export default SharedLayout