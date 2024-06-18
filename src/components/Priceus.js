import React from 'react'
import Topbar from './Topbar'
import Quote from './Quote'
import Footer from './Footer'
import Price from './Price'
import { Link } from 'react-router-dom'
export default function Priceus() {
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
        <Link to="index.html" className="navbar-brand p-0">
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
            <Link to="/Aboutus" className="nav-item nav-link active">About</Link>
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
              <Link to="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
              <div className="dropdown-menu m-0">
                <Link to="/Priceus" className="dropdown-item">Pricing Plan</Link>
                
                <Link to="/Teamus" className="dropdown-item">Team Members</Link>
                <Link to="/Faculty" className="dropdown-item">Faculty</Link>
                
              </div>
            </div>
           
          </div>
       
          <Link to="https://www.ieee.org/profile/public/createwebaccount/showRegister.html" className="btn btn-primary py-2 px-4 ms-3">JOIN IEEE</Link>
        </div>
      </nav>

      <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">About Us</h1>

            <Link to="/" className="h5 text-white">IEEE SB GCET</Link>
          </div>
        </div>
      </div>
    </div>
        <Price/>
        <Quote/>
        <Footer/>
</>
  )
}
