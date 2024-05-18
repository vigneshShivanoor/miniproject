import React from 'react';
import { Link } from 'react-router-dom';

function Quote() {
  const mail=`naveen@gmail.com`

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">Need to Join IEEE</h5>
              <h1 className="mb-0">Any help while Joining to IEEE</h1>
            </div>
            <div className="row gx-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>ASK any question regarding Memberships</h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs</h5>
              </div>
            </div>
            {/* <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p> */}
            <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Message any Queries</h5>
                <h4 className="text-primary mb-0">+91 7738363524</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
              <form>
                <div className="row g-3">
                  <div className="col-xl-12">
                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12">
                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12">
                    <select className="form-select bg-light border-0" style={{ height: '55px' }}>
                      <option selected>Select A Community </option>
                      <option value="1">IEEE Computer Society </option>
                      <option value="2">IEEE Nano Technolgy</option>
                      <option value="3">IEEE educational Society</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                  </div>
                  <div className="col-12">
                    <Link className="btn btn-dark w-100 py-3" type="submit" to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail}`}>Submit</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
