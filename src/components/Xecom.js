import React from 'react';
import Topbar from './Topbar';
import {Link} from 'react-router-dom'
import Footer from './Footer';
const GeneralExecom = () => {
  return (
    <div>
      <Topbar/>
      
      <div className="container-fluid position-relative p-0"  style={{
        top: 0 ,
        left: 0,
        right: 0,
        bottom: 0,
        background:'rgba(9, 30, 62, .7)',
        zIndex:1 }} >
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <Link to="index.html" className="navbar-brand p-0">
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
                              <Link to="/Recent" className="dropdown-item ">Recent</Link>
                                  <Link to="/Events1" className="dropdown-item active">Events 21-22</Link>
                                  <Link to="/Xecom" className="dropdown-item">Events 22-23</Link>
                              </div>
                          </div>
                        <div className="nav-item dropdown">
                            <Link to="/xecom" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Xecom</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/Xecom" className="dropdown-item">Xecom 2023</Link>
                                <Link to="/Xecom1" className="dropdown-item">Xecom 2024</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/Priceus" className="dropdown-item">Pricing Plan</Link>
                              
                                <Link to="/Teamus" className="dropdown-item">Team Members</Link>
                              
                            </div>
                        </div>
                        <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                    </div>
                    <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <Link to="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Join IEEE</Link>
                </div>
            </nav>

            <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: "90px" }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">XECOM</h1>
                       
       
                        <Link to="index.html" className="h5 text-white">Alumini OF IEEE SB year of 2023</Link>
                    </div>
                </div>
            </div>
        </div>

      <div style={mainContainerStyle}>
        <h1>General Execom</h1>
        <div style={profileCardStyle}>
          <img src="img/testimonial-1.jpg" alt="Dr Jayachandran E S" style={profileImgStyle} />
          <h2>P Vardhan Reddy</h2>
          <p>Chair</p>
          <Link to="mailto:email@example.com" style={profileLinkStyle}>Email</Link>
          <Link to="https://linkedin.com/in/username" style={profileLinkStyle}>LinkedIn</Link>
        </div>
        <div style={profileCardStyle}>
          <img src="img/testimonial-2.jpg" alt="Sujith Kumar A" style={profileImgStyle} />
          <h2>E.DHANUSH</h2>
          <p> VICE -Chair</p>
          <Link to="mailto:email@example.com" style={profileLinkStyle}>Email</Link>
          <Link to="https://linkedin.com/in/username" style={profileLinkStyle}>LinkedIn</Link>
        </div>
        <div style={profileCardStyle}>
          <img src="img/testimonial-3.jpg" alt="Swathy Satheesan" style={profileImgStyle} />
          <h2>Nandha Kishore</h2>
          <p>Tresureer</p>
          <Link to="mailto:email@example.com" style={profileLinkStyle}>Email</Link>
          <Link to="https://linkedin.com/in/username" style={profileLinkStyle}>LinkedIn</Link>
        </div>
        <div style={profileCardStyle}>
          <img src="img/testimonial-4.jpg" alt="Irene Alsa George" style={profileImgStyle} />
          <h2>Naveen</h2>
          <p>Secretary</p>
          <Link to="mailto:email@example.com" style={profileLinkStyle}>Email</Link>
          <Link to="https://linkedin.com/in/username" style={profileLinkStyle}>LinkedIn</Link>
        </div>
        <div style={profileCardStyle}>
          <img src="img/testimonial-4.jpg" alt="Irene Alsa George" style={profileImgStyle} />
          <h2>Bhavya</h2>
          <p>Secretary</p>
          <Link to="mailto:email@example.com" style={profileLinkStyle}>Email</Link>
          <Link to="https://linkedin.com/in/username" style={profileLinkStyle}>LinkedIn</Link>
        </div>
        <div style={profileCardStyle}>
          <img src="img/testimonial-4.jpg" alt="Irene Alsa George" style={profileImgStyle} />
          <h2>Vignesh</h2>
          <p>Secretary</p>
          <Link to="mailto:email@example.com" style={profileLinkStyle}>Email</Link>
          <Link to="https://linkedin.com/in/username" style={profileLinkStyle}>LinkedIn</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};




const mainContainerStyle = {
  padding: '20px',
  margin: '20px 0',
  background: '#fff',
};

const profileCardStyle = {
  display: 'inline-block',
  width: '22%',
  margin: '1%',
  background: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  textAlign: 'center',
};

const profileImgStyle = {
  width: '100%',
  height: 'auto',
};

const profileLinkStyle = {
  display: 'inline-block',
  margin: '10px',
  color: '#333',
  textDecoration: 'none',
  border: '1px solid #333',
  padding: '5px 10px',
  borderRadius: '5px',
};

export default GeneralExecom;
