import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'

export default function Ieeextreme() {
  return (
    <>
    <Topbar/>
    
    <div className="container-fluid position-relative p-0" style={{
         top: 0 ,
         left: 0,
         right: 0,
         bottom: 0,
         background:'rgba(9, 30, 62, .7)',
         zIndex:1 }}>
               <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                   <Link to="/" className="navbar-brand p-0">
                   <h1 className="m-0" style={{ filter: 'drop-shadow(2px 4px 6px black)' }} >
                <img src='img/ieee.png' alt="logo" style={{padding:'0.3rem 1rem'}}/>
                <span>IEEE GCET SB</span>
            </h1>
                   </Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                       <span className="fa fa-bars"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarCollapse">
                       <div className="navbar-nav ms-auto py-0">
                           <Link to="/" className="nav-item nav-link">Home</Link>
                           <Link to="/Aboutus" className="nav-item nav-link">About</Link>
                           <div className="nav-item dropdown">
                               <Link to="/Events" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Events</Link>
                               <div className="dropdown-menu m-0">
                               <Link to="/Recent" className="dropdown-item ">Recent</Link>
                                   <Link to="/Events" className="dropdown-item ">Events 21-22</Link>
                                   <Link to="/Events1" className="dropdown-item">Events 2020</Link>
                               </div>
                           </div>
                           <div className="nav-item dropdown">
                               <Link to="/Xecom" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Xecom </Link>
                               <div className="dropdown-menu m-0">
                                   <Link to="/Xecom" className="dropdown-item ">Xecom 2022</Link>
                                   <Link to="/Xecom" className="dropdown-item">Xecom 2023</Link>
                               </div>
                           </div>
                           <div className="nav-item dropdown">
                               <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                               <div className="dropdown-menu m-0">
                                   <Link to="/Priceus" className="dropdown-item">Pricing Plan</Link>
                                   <Link to="/Teamus" className="dropdown-item">Team Members</Link>
                               </div>
                           </div>
                       </div>
                       <Link to="https://www.ieee.org/profile/public/createwebaccount/showRegister.html" className="btn btn-primary py-2 px-4 ms-3">Join IEEE</Link>
                   </div>
               </nav>
   
               <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                   <div className="row py-5">
                       <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                           <h1 className="display-4 text-white animated zoomIn">IEEE Xtreme 17.0</h1>
                           <Link to="/Serviceus" className="h5 text-white">Event Sponsored By IEEE</Link>
                       </div>
                   </div>
               </div>
           </div>
 
     <div className="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
         <div className="container py-5">
             <div className="row g-5">
                 <div className="col-lg-8">
                     <div className="mb-5">
                         <img className="img-fluid w-100 rounded mb-5" src="img/ieeextreme17.0.jpg" alt=""/>
                         <h1 className="mb-4">IEEE Xtreme 17.0</h1>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio cumque ducimus aperiam officiis. Sunt, perferendis maiores totam quidem ratione enim quod debitis magnam sapiente earum facilis quibusdam excepturi nihil ipsam exercitationem placeat nam ad deserunt perspiciatis aspernatur tempora, repudiandae quae. Vel at alias adipisci quia exercitationem assumenda architecto cumque, provident ab harum ad iste nostrum facere accusantium doloribus soluta ipsam praesentium quod veniam? Facere officiis similique neque ipsa?</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 
     <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ paddingTop: '0px' }}>
         <div className="container">
             <h1 className="mb-4">Gallery</h1>
             <div className="row g-4">
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme1.jpg" alt="Gallery1"/>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme6.jpg" alt="Gallery1"/>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme7.jpg" alt="Gallery 2"/>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme4.jpg" alt="Gallery 3"/>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme5.jpg" alt="Gallery 4"/>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme2.jpg" alt="Gallery 5"/>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme3.jpg" alt="Gallery 6"/>
                 </div>
                 <div className="col-lg-4 col-md-6">
                     <img className="img-fluid w-100 rounded" src="img/ieeextreme8.jpg" alt="Gallery 7"/>
                 </div>
             </div>
         </div>
     </div>
 
    <Footer/>
    </>
  )
}
