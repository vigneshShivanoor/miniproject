import React from 'react'

import { Link } from 'react-router-dom'
import Topbar from './Topbar'
import Footer from './Footer'

export default function CodeQuizz() {
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
                          <h1 className="display-4 text-white animated zoomIn">CODEQUIZZ: ML Edition</h1>
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
                        <img className="img-fluid w-100 rounded mb-5" src="img/codequizz.jpg" alt=""/>
                        <h1 className="mb-4">CODEQUIZZ: ML Edition</h1>
                        <p>CodeQuizz: ML Edition" is related to the field of Machine Learning, an exciting event for enthusiasts of this dynamic field. With a maximum of 25 participants in 5 teams, each comprising 5 members, this competition featured three engaging rounds. 
In round one, teams collaboratively tackled thought-provoking questions to showcase their comprehension and application of Machine Learning principles. Top performers advanced to round two, facing a team challenge on problem statements provided to them. 1 team sent to round three where 5 individuals will face cross word challenge to demonstrate mastery of concepts, and speakers came together to mark the success of "TECHNO SPARKZ" and the spirit of IEEE.
</p>
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
                    <img className="img-fluid w-100 rounded" src="img/cq1.jpg" alt="Gallery1"/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <img className="img-fluid w-100 rounded" src="img/cq2.jpg" alt="Gallery1"/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <img className="img-fluid w-100 rounded" src="img/cq3.jpg" alt="Gallery 2"/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <img className="img-fluid w-100 rounded" src="img/cq4.jpg" alt="Gallery 3"/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <img className="img-fluid w-100 rounded" src="img/cq5.jpg" alt="Gallery 4"/>
                </div>
                <div className="col-lg-4 col-md-6">
                    <img className="img-fluid w-100 rounded" src="img/cq7.jpg" alt="Gallery 5"/>
                </div>
             
            </div>
        </div>
    </div>







    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">Team Organizers</h5>
        
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/vignesh.jpg" alt="" />
                <div className="team-social">
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-twitter fw-normal"></i></Link>
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-facebook-f fw-normal"></i></Link>
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-instagram fw-normal"></i></Link>
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">K Shruthi</h4>
                <p className="text-uppercase m-0"> (Secretary- IEEE CS)</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="team-item bg-light rounded overflow-hidden">
              <div className="team-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/anish.jpg" alt="" />
                <div className="team-social">
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-twitter fw-normal"></i></Link>
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-facebook-f fw-normal"></i></Link>
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-instagram fw-normal"></i></Link>
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded" to="/Aboutus"><i className="fab fa-linkedin-in fw-normal"></i></Link>
                </div>
              </div>
              <div className="text-center py-4">
                <h4 className="text-primary">D Chaitra</h4>
                <p className="text-uppercase m-0"> (Excom member, IEEE CS)</p>
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
