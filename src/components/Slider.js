import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div className="slider">
            <div className="slider-track">
                <div className="card">
                    <img src="img/chakravyuh1.jpg" alt="Congratulations 1" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+2" alt="Congratulations 2" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+3" alt="Congratulations 3" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+4" alt="Congratulations 4" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+5" alt="Congratulations 5" />
                </div>
                {/* Repeat cards to create a continuous effect */}
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+1" alt="Congratulations 1" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+2" alt="Congratulations 2" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+3" alt="Congratulations 3" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+4" alt="Congratulations 4" />
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x150.png?text=Congratulations+5" alt="Congratulations 5" />
                </div>
            </div>
        </div>
    );
};

export default Slider;
