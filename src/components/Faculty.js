import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from './Topbar';
// import Navbar from './Navbar';
import Footer from './Footer';

function Faculty() {
  return (
    <>
    <Topbar />

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">Faculty members</h5>
          <h1 className="mb-0">Gcet</h1>
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
                
                <h4 className="text-primary">Neha Nandal</h4>
                <p className="text-uppercase m-0">faculty</p>
              </div>
            </div>
          </div>
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
                <h4 className="text-primary">Neha Nandal</h4>
                <p className="text-uppercase m-0">faculty</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
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
                <h4 className="text-primary">Puja Prasad</h4>
                <p className="text-uppercase m-0">Faculty incharge</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
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
                <h4 className="text-primary">Jyothirmai</h4>
                <p className="text-uppercase m-0">Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
}

export default Faculty;
