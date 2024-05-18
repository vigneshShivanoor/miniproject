import React from 'react';
import Topbar from './Topbar';
import Features from './Features';
import Footer from './Footer';

function Featureus() {
    return (
        <>
        <Topbar/>
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                <h1 className="m-0"><img   src='img/logo.jpg' alt="logo" />IEEE GCET SB</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.html" className="nav-item nav-link">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Services</a>
                        <div className="nav-item dropdown">
                            <a href="index.html" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                            <div className="dropdown-menu m-0">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="detail.html" className="dropdown-item">Blog Detail</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="index.html" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                <a href="feature.html" className="dropdown-item active">Our features</a>
                                <a href="team.html" className="dropdown-item">Team Members</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="quote.html" className="dropdown-item">Free Quote</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a>
                </div>
            </nav>

            <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: "90px" }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Features</h1>
                        <a href="index.html" className="h5 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="index.html" className="h5 text-white">Features</a>
                    </div>
                </div>
            </div>
        </div>
        <Features/>
        <Footer/>
        </>
    );
}

export default Featureus;
