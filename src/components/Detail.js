import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'
export default function detail() {
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
                  <h1 className="m-0"><img   src='img/logo.jpg' alt="logo" />IEEE GCET SB</h1>
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
                                  <Link to="/Faculty" className="dropdown-item">Faculty</Link>
                                  
                              </div>
                          </div>
                         
                      </div>
                      <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                      <Link to="https://www.ieee.org/profile/public/createwebaccount/showRegister.html" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</Link>
                  </div>
              </nav>
  
              <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                  <div className="row py-5">
                      <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                          <h1 className="display-4 text-white animated zoomIn">Events</h1>
                          
                          <Link to="/Serviceus" className="h5 text-white"> Recent Events of IEEE</Link>
                      </div>
                  </div>
              </div>
          </div>



    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-8">
                 
                    <div className="mb-5">
                        <img className="img-fluid w-100 rounded mb-5" src="img/blog-1.jpg" alt=""/>
                        <h1 className="mb-4">Chakravuyuh</h1>
                        <p></p>
                    </div>
                 
                    <div className="mb-5">
                        <div className="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 className="mb-0">3 Comments</h3>
                        </div>
                        <div className="d-flex mb-4">
                            <img src="img/user.jpg"  alt=""  className="img-fluid rounded" style={{width: '45px', height: '45px'}} />
                            <div className="ps-3">
                                <h6><Link to="">John Doe</Link> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-light">Reply</button>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <img src="img/user.jpg" alt='' className="img-fluid rounded" style={{width: '45px' , height: '45px'}}/>
                            <div className="ps-3">
                                <h6><Link to="">John Doe</Link> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-light">Reply</button>
                            </div>
                        </div>
                        <div className="d-flex ms-5 mb-4">
                            <img src="img/user.jpg" alt='' className="img-fluid rounded" style={{width: '45px' , height: '45px'}}/>
                            <div className="ps-3">
                                <h6><Link to="">John Doe</Link> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-light">Reply</button>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
    
           
           
            </div>
        </div>
    </div>
<Footer/>
   </>
  )
}
