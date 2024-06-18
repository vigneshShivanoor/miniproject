import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
        
            <h1 className="mb-0">Awards</h1>
          </div>
          </div>
          </div>

        <div className="slider">
            <div className="slider-track">
                <div className="card">
                    <img src="img/award4.jpg" alt="Congratulations 1" />
                </div>
                <div className="card">
                    <img src="img/charry.jpg" alt="Congratulations 2" />
                </div>
                <div className="card">
                    <img src="img/award2.jpg" alt="Congratulations 3" />
                </div>
                <div className="card">
                    <img src="img/award3.jpg" alt="Congratulations 4" />
                </div>
                <div className="card">
                    <img src="img/award4.jpg" alt="Congratulations 5" />
                </div>
                {/* Repeat cards to create a continuous effect */}
                <div className="card">
                    <img src="img/charry.jpg" alt="Congratulations 2" />
                </div>
                <div className="card">
                    <img src="img/award2.jpg" alt="Congratulations 3" />
                </div>
                <div className="card">
                    <img src="img/award3.jpg" alt="Congratulations 4" />
                </div>
                <div className="card">
                    <img src="img/award4.jpg" alt="Congratulations 5" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Slider;
