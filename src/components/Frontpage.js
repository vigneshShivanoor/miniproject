import React from 'react'
import Navbar from './Navbar';
import Facts from './Facts';
// import Service from './Service';
import Quote from './Quote';
import Price from './Price';
import Team from './Team';
import About from './About';
import Footer from './Footer';
 import Features from './Features';
// import Testimonial from './Testmonial';
import Topbar from './Topbar';
import Blog from './Blog';
 import Faq from './Faq';
import Slider from './Slider';


export default function front() {
  return (
  <>
    <Topbar/>
    <Navbar />
        <Facts />
       <About/>
         <Features /> 
        {/* <Service /> */}
        <Price />
        <Quote />
        {/* <Testimonial /> */}
        <Team />
        <Blog/>
        <Faq/>
        <Slider/> 
        <Footer />
  </>
  )
}
