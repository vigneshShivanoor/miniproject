import React from 'react';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
// Make sure to import the CSS file

const GeneralExecom = () => {
  const mail1='21r11a0593@gcet.edu.in'
  const mail2='21r11a0567@gcet.edu.in'
  const mail3='21r11a0557@gcet.edu.in'
  const mail4='21r11a05A5@gcet.edu.in'
  const mail5='21r11a0597@gcet.edu.in'
  const mail6='21r11a0589@gcet.edu.in'
  return (
    <div>
      <Topbar />
      <div className="container-fluid position-relative p-0" style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(9, 30, 62, .7)',
        zIndex: 1
      }}>
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
                <Link to="/Events" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Recent" className="dropdown-item">Recent</Link>
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
                <Link to="/Priceus" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</Link>
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

        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: "90px" }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">XECOM</h1>
              <Link to="/Xecom" className="h5 text-white">Alumini OF IEEE SB year of 2023</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <h1>Computer Society</h1>
        <div className="profile-card">
          <img src="img/vardhan.jpg" alt="vardhan" className="profile-img" />
          <h2>P Vardhan Reddy</h2>
          <p>Chair</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail1}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/vardhan-reddy-49626322b/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/dhanush.jpg" alt="dhanush" className="profile-img" />
          <h2>E.DHANUSH</h2>
          <p> VICE -Chair</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail2}`}  className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/erramuri-dhanush-rajkumar-54b550265/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/vardhan.jpg" alt="Swathy Satheesan" className="profile-img" />
          <h2>Nandha Kishore</h2>
          <p>Tresureer</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail3}`} className="profile-link">Email</Link>
          <Link to="" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/vardhan.jpg" alt="Irene Alsa George" className="profile-img" />
          <h2>Naveen</h2>
          <p>Secretary</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail6}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/naveen-rampa-aa1178270/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/dhanush.jpg" alt="Irene Alsa George" className="profile-img" />
          <h2>Bhavya</h2>
          <p>Secretary</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail4}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/naveen-rampa-aa1178270/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/dhanush.jpg" alt="Irene Alsa George" className="profile-img" />
          <h2>Vignesh</h2>
          <p>Secretary</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail5}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/shivanoor-vignesh-541085270/" className="profile-link">LinkedIn</Link>
        </div>
      </div>
      <div className="main-container">
        <h1>IEEE Nano Technology</h1>
        <div className="profile-card">
          <img src="img/vardhan.jpg" alt="vardhan" className="profile-img" />
          <h2>P Vardhan Reddy</h2>
          <p>Chair</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail1}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/vardhan-reddy-49626322b/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/dhanush.jpg" alt="dhanush" className="profile-img" />
          <h2>E.DHANUSH</h2>
          <p> VICE -Chair</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail2}`}  className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/erramuri-dhanush-rajkumar-54b550265/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/vardhan.jpg" alt="Swathy Satheesan" className="profile-img" />
          <h2>Nandha Kishore</h2>
          <p>Tresureer</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail3}`} className="profile-link">Email</Link>
          <Link to="" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/vardhan.jpg" alt="Irene Alsa George" className="profile-img" />
          <h2>Naveen</h2>
          <p>Secretary</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail6}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/naveen-rampa-aa1178270/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/dhanush.jpg" alt="Irene Alsa George" className="profile-img" />
          <h2>Bhavya</h2>
          <p>Secretary</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail4}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/naveen-rampa-aa1178270/" className="profile-link">LinkedIn</Link>
        </div>
        <div className="profile-card">
          <img src="img/dhanush.jpg" alt="Irene Alsa George" className="profile-img" />
          <h2>Vignesh</h2>
          <p>Secretary</p>
          <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail5}`} className="profile-link">Email</Link>
          <Link to="https://www.linkedin.com/in/shivanoor-vignesh-541085270/" className="profile-link">LinkedIn</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GeneralExecom;
