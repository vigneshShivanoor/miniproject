import React from 'react';
import { Link } from 'react-router-dom';

function Price() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">Membership Plans</h5>
          <h1 className="mb-0">Happy Students</h1>
        </div>
        <div className="row g-0">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="bg-light rounded">
              <div className="border-bottom py-4 px-5 mb-4">
                <h4 className="text-primary mb-1">IEEE Nano Technology</h4>
                <small className="text-uppercase">Yearly Membership</small>
              </div>
              <div className="p-5 pt-0">
                <h1 className="display-5 mb-3">
                  <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$US</small>0.00<small
                    className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Yearly</small>
                </h1>
                <div className="d-flex justify-content-between mb-3"><span>IEEE MEMBER </span>US $ 0.00</div>
                <div className="d-flex justify-content-between mb-3"><span>IEEE Student Member</span>US $0.00</div>
                <div className="d-flex justify-content-between mb-3"><span>Non-IEEE Member</span>US $0.00</div>
                {/* <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div> */}
                <Link to="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMC016&searchResults=Y" className="btn btn-primary py-2 px-4 mt-4">Join IEEE</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="bg-white rounded shadow position-relative" >
              <div className="border-bottom py-4 px-5 mb-4">
                <h4 className="text-primary mb-1">IEEE Computer Society</h4>
                <small className="text-uppercase">Yearly Membership</small>
              </div>
              <div className="p-5 pt-0">
                <h1 className="display-5 mb-3">
                  <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$US</small>30.00<small
                    className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Yearly</small>
                </h1>
                <div className="d-flex justify-content-between mb-3"><span>IEEE Member</span>US $ 30.00</div>
                <div className="d-flex justify-content-between mb-3"><span>IEEE Student Member</span>US $4.00</div>
                <div className="d-flex justify-content-between mb-3"><span>Non-IEEE Member</span>US $70.50</div>
                {/* <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span></div> */}
                <Link to="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMC016&searchResults=Y"  className="btn btn-primary py-2 px-4 mt-4">Join IEEE</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
            <div className="bg-light rounded">
              <div className="border-bottom py-4 px-5 mb-4">
                <h4 className="text-primary mb-1"> IEEE Women in Engineering </h4>
                <small className="text-uppercase"> </small>
              </div>
              <div className="p-5 pt-0">
                <h1 className="display-5 mb-3">
                  <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>25.00<small
                    className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ Yearly</small>
                </h1>
                <div className="d-flex justify-content-between mb-3"><span>IEEE Member</span>US $25.00</div>
                <div className="d-flex justify-content-between mb-3"><span>IEEE Student Member</span>US $25.00</div>
                <div className="d-flex justify-content-between mb-3"><span>Non-IEEE Member</span>US $25.00</div>
                {/* <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span></div> */}
                <Link to="https://www.ieee.org/membership/join/index.html" className="btn btn-primary py-2 px-4 mt-4">JOIN IEEE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
