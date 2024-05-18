import React from 'react';

function Features() {
  return (
    <>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h5 className="fw-bold text-primary text-uppercase">Communities</h5>
          <h1 className="mb-0">Meet Our Communities</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                 <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '160px', height: '60px' }}>
                  <img src="img/logocomputer.png" alt="computer" />
                </div> 
                
                <h4>IEEE Computer Society</h4>
                <p className="mb-0">Empowering Computer Science and Engineering Professionals to Fuel Continued Advancement</p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '160px', height: '92px' }}>
                <img src="img/images.jpg" alt="computer" />
                </div>
                <h4>IEEE Nano Technology</h4>
                <p className="mb-0">The IEEE Nanotechnology Council (NTC) is a multi-disciplinary group whose purpose is to advance and coordinate work in the field of Nanotechnology carried out throughout the IEEE in scientific, literary and educational areas</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{ objectFit: 'cover' }} alt="Feature" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '160px', height: '60px' }}>
                <img src="img/logocomputer.png" alt="computer" />
                </div>
                <h4>IEEE Computer Society</h4>
                <p className="mb-0">The IEEE Nanotechnology Council (NTC) is a multi-disciplinary group whose purpose is to advance and coordinate work in the field of Nanotechnology carried out throughout the IEEE in scientific, literary and educational areas</p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '160px', height: '60px' }}>
                <img src="img/logocomputer.png" alt="computer" />
                </div>
                <h4>IEEE Computer Society</h4>
                <p className="mb-0">The IEEE Nanotechnology Council (NTC) is a multi-disciplinary group whose purpose is to advance and coordinate work in the field of Nanotechnology carried out throughout the IEEE in scientific, literary and educational areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
}

export default Features;
