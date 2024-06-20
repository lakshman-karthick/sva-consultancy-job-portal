"use client"
import React,{useRef} from 'react'
import Navbar from '/app/components/Navbar'
import Banner from '/app/components/Banner'
import About from '/app/components/About'
import Footer from '/app/components/Footer'
import Form from '../components/Form'

function Page() {
  const targetRef = useRef(null);

  const handleScroll = () => {
      if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
  };
  return (
    <div className="flex min-h-screen flex-col">
       <Navbar/>
        <Banner onClick={handleScroll}/>
        <About/> 
        <Form forwardedRef={targetRef}/>
       {/* <About/> */}
       <Footer/> 
    </div>
  )
}

export default Page
