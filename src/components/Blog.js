import React from 'react';
import { Link } from 'react-router-dom';
function Blog() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">Latest Events</h5>
          <h1 className="mb-0">IEE Sponsered Events</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/chakravyuh.jpg" alt="" />
                <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="/Chakravyuh">Chakravuyh</Link>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3"><i className="far fa-user text-primary me-2"></i>P.Vardhan Reddy</small>
                  <small><i className="far fa-calendar-alt text-primary me-2"></i>04 march, 2024</small>
                </div>
                <h4 className="mb-3">Chakravuyuh</h4>
                <p>Once falls never comes back  into your life </p>
                <Link className="text-uppercase" to="/">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/Xtreme.jpg" alt="" />
                <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="/Ieeextreme">IEEE Xtreme17.0</Link>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3"><i className="far fa-user text-primary me-2"></i>Neha Nandal</small>
                  <small><i className="far fa-calendar-alt text-primary me-2"></i>4 May, 2023</small>
                </div>
                <h4 className="mb-3">IEEE Xtreme17.0</h4>
                <p>International level coding  all the players should do the Code</p>
                <Link className="text-uppercase" to="/Ieeextreme">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/codebuz1.jpg" alt="" />
                <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="/">CodeBuzz</Link>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3"><i className="far fa-user text-primary me-2"></i>Vardhan Reddy</small>
                  <small><i className="far fa-calendar-alt text-primary me-2"></i>22 March, 2023</small>
                </div>
                <h4 className="mb-3">CodeBuzz</h4>
                <p>Code for the Fun</p>
                <Link className="text-uppercase" to="/">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
