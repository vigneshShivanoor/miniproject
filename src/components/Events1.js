import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'
export default function Events1() {
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
                                  <Link to="/Events1" className="dropdown-item active">Events 2020</Link>
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
                          
                          <Link to="/Serviceus" className="h5 text-white">Events of IEEE  2020</Link>
                      </div>
                  </div>
              </div>
          </div>
  
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container py-5">
              <div class="row g-7">
             
                  <div class="col-lg-11">
                      <div class="row g-5">
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/chakravyuh1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">starter Code</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Dr. G Somashekar</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>7 june, 2020</small>
                                      </div>
                                      
                                      <p>Starter Code</p>
                                      <Link class="text-uppercase" to="">Details <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/chakravyuh1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Genios 2.0</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Dr. G .Soma Sekhar</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>12  june, 2020</small>
                                      </div>
                                      
                                      <p>Genios 2.0</p>
                                      <Link class="te'xt-uppercase" to="">Details <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/chakravyuh1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">online Quiz</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Dr.G Soma Sekhar</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>15 Aug 2020</small>
                                      </div>
                                      
                                      <p>I Love My India</p>
                                      <Link class="text-uppercase" to="">Details <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                         <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/chakravyuh1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Webinar</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>B.John Benedict</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>5 july, 2020</small>
                                      </div>
                                      <h4 class="mb-3">Management Lessons
from running a student
branch </h4>

                                      <Link class="text-uppercase" to="">Details <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/chakravyuh1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Machine Learning</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Karthik ai Engineer </small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>21 june  2020</small>
                                      </div>
                                      <h4 class="mb-3">Building End to End
Machine Learning from
Scratch
</h4>

                                      <Link class="text-uppercase" to="">Details <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          {/* <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/blog-3.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">IEEE Xtreme 15.0</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Dr. G. Soma Sekhar</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>23 oct 2021</small>
                                      </div>
                                      <h4 class="mb-3">IEEE Xtreme 15.0</h4>

                                      <Link class="text-uppercase" to="">Details <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Industrial Visit</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>Dr.G.Soma Sekhar</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>27 feb, 2022</small>
                                      </div>
                                      <h4 class="mb-3">Online Industrial Visit</h4>

                                      <Link class="text-uppercase" to="">details <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div> */}
                          {/* <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/blog-2.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                      </div>
                                      <h4 class="mb-3">How to build a website</h4>
                                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                      <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/blog-3.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                      </div>
                                      <h4 class="mb-3">How to build a website</h4>
                                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                      <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                              <div class="blog-item bg-light rounded overflow-hidden">
                                  <div class="blog-img position-relative overflow-hidden">
                                      <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                      <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                  </div>
                                  <div class="p-4">
                                      <div class="d-flex mb-3">
                                          <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                          <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                      </div>
                                      <h4 class="mb-3">How to build a website</h4>
                                      <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                      <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12 wow slideInUp" data-wow-delay="0.1s">
                              <nav aria-label="Page navigation">
                                <ul class="pagination pagination-lg m-0">
                                  <li class="page-item disabled">
                                    <Link class="page-link rounded-0" to="#" aria-label="Previous">
                                      <span aria-hidden="true"><i class="bi bi-arrow-left"></i></span>
                                    </Link>
                                  </li>
                                  <li class="page-item active"><Link class="page-link" to="#">1</Link></li>
                                  <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                                  <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                                  <li class="page-item">
                                    <Link class="page-link rounded-0" to="#" aria-label="Next">
                                      <span aria-hidden="true"><i class="bi bi-arrow-right"></i></span>
                                    </Link>
                                  </li>
                                </ul>
                              </nav>
                          </div>  */}
                      </div>
                  </div>
               

                  
              </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}
