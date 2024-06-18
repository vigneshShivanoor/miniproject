import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>

      <div className="container-fluid position-relative p-0" style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(9, 30, 62, .7)',
        zIndex: 1
      }} >
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
              <Link to="/" className="nav-item nav-link ">Home</Link>
              <Link to="/Aboutus" className="nav-item nav-link">About</Link>
              <div className="nav-item dropdown">
                <Link to="/Events" className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Events</Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Recent" className="dropdown-item ">Recent</Link>
                  <Link to="/Events" className="dropdown-item active">Events 21-22</Link>
                  <Link to="/Events1" className="dropdown-item">Events 2020</Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link to="/Xecom" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Xecom </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Xecom" className="dropdown-item">Xecom 2023</Link>
                  <Link to="/Xecom1" className="dropdown-item">Xecom 2024</Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link to="Aboutus" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"> More</Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Priceus" className="dropdown-item">Pricing Plan</Link>
                  {/* <Link to="/Featureus" className="dropdown-item">Our features</Link> */}
                  <Link to="/Teamus" className="dropdown-item">Team Members</Link>
                  <Link to="/Faculty" className="dropdown-item">Faculty</Link>


                </div>
              </div>

            </div>
            {/* <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
            <Link to="https://www.ieee.org/profile/public/createwebaccount/showRegister.html" className="btn btn-primary py-2 px-4 ms-3">Join IEEE</Link>
          </div>
        </nav>

        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/img/gctc3.jpg" alt="" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(9, 30, 62, .7)',
                zIndex: 1
              }} >
                <div className="p-3" style={{ maxWidth: '900px' }}>

                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative</h1>
                  <Link to="https://www.instagram.com/shivanoor_vignesh12/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Join us</Link>
                  <Link to="/Aboutus" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/gctc3.jpg" alt="" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(9, 30, 62, .7)',
                zIndex: 1
              }} >
                <div className="p-3" style={{ maxWidth: '900px' }}>

                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Try & Test</h1>
                  <Link to="https://www.ieee.org/profile/public/createwebaccount/showRegister.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Join us</Link>
                  <Link to="/Aboutus" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



    </>
  );
}

export default Navbar;
