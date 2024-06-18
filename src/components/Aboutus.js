import React from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import Team from './Team';
import About from './About';
import { Link } from 'react-router-dom';
export default function Aboutus() {
  const mail="vigneshshivanoor@gmail.com"
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
            <Link to="/Aboutus" className="nav-item nav-link ">About</Link>
            <div className="nav-item dropdown">
                              <Link to="/Events" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Events</Link>
                              <div className="dropdown-menu m-0">
                              <Link to="/Recent" className="dropdown-item ">Recent</Link>
                                  <Link to="/Events" className="dropdown-item ">Events 21-22</Link>
                                  <Link to="/Events1" className="dropdown-item">Events 2020</Link>
                              </div>
                          </div>
            <div className="nav-item dropdown">
              <Link to="/Xecom" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">XECOM</Link>
              <div className="dropdown-menu m-0">
                <Link to="/Xecom" className="dropdown-item">Xecom 2022</Link>
                <Link to="/Bloggrid" className="dropdown-item">Xecom 2023</Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link to="/Priceus" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">More</Link>
              <div className="dropdown-menu m-0">
                <Link to="/Priceus" className="dropdown-item active">Pricing Plan</Link>
            
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
            <h1 className="display-4 text-white animated zoomIn">About us</h1>

            <Link to="/" className="h5 text-white">IEEE SB GCET</Link>
          </div>
        </div>
      </div>
    </div>
    <About/>
    

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-5" style={{minHeight: '500px'}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/ieeeAbout1.jpg"  alt="" style={{objectFit: 'cover'}} />
                </div>
            </div>
            <div className="col-lg-7">
                <div className="section-title position-relative pb-3 mb-5">
                 
                    <h1 className="mb-0">About IEEE SB GCET</h1>
                </div>
                <p className="mb-4">Welcome to the IEEE Student Branch at Geethanjali College of Engineering and Technology! We are a vibrant community of students and faculty dedicated to fostering innovation, knowledge sharing, and professional development in the field of engineering and technology.</p>
                <div className="row g-0 mb-3">
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Vision and mission</h5>
                        <p>Our mission is to provide a platform for students to explore their interests in various technical fields, enhance their skills through workshops and seminars, and connect with industry professionals to stay updated with the latest trends and technologies.</p>
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Technical Workshops</h5>
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Guest Lectures</h5>
                        
                    </div>
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Projects and Competitions</h5>
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Carrer Development</h5>
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i> Community Outreach</h5>
                      
                        <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Join us</h5>
                        <p>Whether you're a first-year student exploring your interests or a senior looking to enhance your skills, the IEEE Student Branch is the perfect platform for you. Join us to be a part of a dynamic community that is passionate about technology and innovation.</p>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                    <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                        <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <div className="ps-4">
                        <h5 className="mb-2">IF you want to join ?</h5>
                        <h4 className="text-primary mb-0">+91 7738363524</h4>
                    </div>
                </div>
                <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail}`} className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A  sugestion</Link>
            </div>
        </div>
    </div>
</div>

<Team/>
<Footer/>
    </>
  )
}
