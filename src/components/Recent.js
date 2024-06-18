import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'

export default function Recent() {
  return (
<>
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
                              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</Link>
                              <div className="dropdown-menu m-0">
                                  <Link to="/Priceus" className="dropdown-item">Pricing Plan</Link>
                                 
                                  <Link to="/Teamus" className="dropdown-item">Team Members</Link>
                                  <Link to="/Faculty" className="dropdown-item">Faculty</Link>
                                  
                              </div>
                          </div>
                         
                      </div>
                      
                      <Link to="https://www.ieee.org/profile/public/createwebaccount/showRegister.html" className="btn btn-primary py-2 px-4 ms-3">Join IEEE</Link>
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
  
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container py-5">
              <div class="row g-7">
             
                  <div class="col-lg-11">
                      <div class="row g-5">
                      
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/codebuz1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">CodeBuzz</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>P. sai vardhan reddy</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>21 march, 2024</small>
                                      </div>
                                      
                                      <p>Code for fun</p>
                                      <Link class="text-uppercase" to="">Register Here <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/chakravyuh.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="/Chakravyuh">chakravyuh</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Dhanush</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>22 Apr, 2024</small>
                                      </div>
                                      
                                      <p>Once falls never comes out</p>
                                      <Link class="text-uppercase" to="/Chakravyuh">Register here <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>

                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/codequizz.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="/Codequizz">CODEQUIZZ: ML Edition</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"> k Shruthi (Secretary- IEEE CS)</i></small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>04 April, 2023</small>
                                      </div>
                                      
                                      <p>"CodeQuizz: ML Edition" is related to the field of Machine Learning, an exciting event for enthusiasts of this dynamic field. </p>
                                      <Link class="text-uppercase" to="/Codequizz">Register Here <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>


                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/Xtreme.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="/Ieeextreme">IEEE Xteme 4.0</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Neha Nandal</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>04 April, 2023</small>
                                      </div>
                                      
                                      <p>International Level Coding all the students should participate</p>
                                      <Link class="text-uppercase" to="/Ieeextreme">Register Here <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>


                         </div>
                         </div>

                  
              </div>
          </div>
      </div>
      <Footer/>
    </>
</>
  )
}
