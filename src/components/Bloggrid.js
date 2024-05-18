import React from 'react'
import Topbar from './Topbar';
import { Link } from 'react-router-dom';

function Bloggrid() {
  return (
  <>
  <Topbar/>
  
  <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <Link to="index.html" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Startup</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="index.html" className="nav-item nav-link">Home</Link>
                        <Link to="about.html" className="nav-item nav-link">About</Link>
                        <Link to="service.html" className="nav-item nav-link">Services</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Blog</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="blog.html" className="dropdown-item active">Blog Grid</Link>
                                <Link to="detail.html" className="dropdown-item">Blog Detail</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="price.html" className="dropdown-item">Pricing Plan</Link>
                                <Link to="feature.html" className="dropdown-item">Our features</Link>
                                <Link to="team.html" className="dropdown-item">Team Members</Link>
                                <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                <Link to="quote.html" className="dropdown-item">Free Quote</Link>
                            </div>
                        </div>
                        <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                    </div>
                    <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                    <Link to="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</Link>
                </div>
            </nav>

            <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                <div className="row py-5">
                    <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-4 text-white animated zoomIn">Blog Grid</h1>
                        <Link to="" className="h5 text-white">Home</Link>
                        <i className="far fa-circle text-white px-2"></i>
                        <Link to="" className="h5 text-white">Blog Grid</Link>
                    </div>
                </div>
            </div>
        </div>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
           
                <div class="col-lg-8">
                    <div class="row g-5">
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-2.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-3.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                            <div class="blog-item bg-light rounded overflow-hidden">
                                <div class="blog-img position-relative overflow-hidden">
                                    <img class="img-fluid" src="img/blog-1.jpg" alt=""/>
                                    <Link class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">Web Design</Link>
                                </div>
                                <div class="p-4">
                                    <div class="d-flex mb-3">
                                        <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                    </div>
                                    <h4 class="mb-3">How to build a website</h4>
                                    <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                    <Link class="text-uppercase" to="">Read More <i class="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 wow slideInUp" data-wow-delay="0.1s">
                            <nav aria-label="Page navigation">
                              <ul class="pagination pagination-lg m-0">
                                <li class="page-item disabled">
                                  <Link class="page-link rounded-0" to="#" aria-label="Previous">
                                    <span aria-hidden="true"><i class="bi bi-arrow-left"></i></span>
                                  </Link>
                                </li>
                                <li class="page-item active"><Link class="page-link" to="#">1</Link></li>
                                <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                                <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                                <li class="page-item">
                                  <Link class="page-link rounded-0" to="#" aria-label="Next">
                                    <span aria-hidden="true"><i class="bi bi-arrow-right"></i></span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                        </div>
                    </div>
                </div>
             
                <div class="col-lg-4">
                  
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="input-group">
                            <input type="text" class="form-control p-3" placeholder="Keyword"/>
                            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                    
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Categories</h3>
                        </div>
                        <div class="link-animated d-flex flex-column justify-content-start">
                            <Link class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i class="bi bi-arrow-right me-2"></i>Web Design</Link>
                            <Link class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i class="bi bi-arrow-right me-2"></i>Web Development</Link>
                            <Link class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i class="bi bi-arrow-right me-2"></i>Web Development</Link>
                            <Link class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i class="bi bi-arrow-right me-2"></i>Keyword Research</Link>
                            <Link class="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" to="#"><i class="bi bi-arrow-right me-2"></i>Email Marketing</Link>
                        </div>
                    </div>
              
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Recent Post</h3>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <Link to="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-2.jpg"  style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <Link to="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-3.jpg"  style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <Link to="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-1.jpg"  style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <Link to="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-2.jpg"  style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <Link to="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                        <div class="d-flex rounded overflow-hidden mb-3">
                            <img class="img-fluid" src="img/blog-3.jpg"  style={{width: '100px', height: '100px', objectFit: 'cover'}} alt=""/>
                            <Link to="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                            </Link>
                        </div>
                    </div>
               
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <img src="img/blog-1.jpg" alt="" class="img-fluid rounded"/>
                    </div>
                
                    <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Tag Cloud</h3>
                        </div>
                        <div class="d-flex flex-wrap m-n1">
                            <Link to="" class="btn btn-light m-1">Design</Link>
                            <Link to="" class="btn btn-light m-1">Development</Link>
                            <Link to="" class="btn btn-light m-1">Marketing</Link>
                            <Link to="" class="btn btn-light m-1">SEO</Link>
                            <Link to="" class="btn btn-light m-1">Writing</Link>
                            <Link to="" class="btn btn-light m-1">Consulting</Link>
                            <Link to="" class="btn btn-light m-1">Design</Link>
                            <Link to="" class="btn btn-light m-1">Development</Link>
                            <Link to="" class="btn btn-light m-1">Marketing</Link>
                            <Link to="" class="btn btn-light m-1">SEO</Link>
                            <Link to="" class="btn btn-light m-1">Writing</Link>
                            <Link to="" class="btn btn-light m-1">Consulting</Link>
                        </div>
                    </div>
                  
                    <div class="wow slideInUp" data-wow-delay="0.1s">
                        <div class="section-title section-title-sm position-relative pb-3 mb-4">
                            <h3 class="mb-0">Plain Text</h3>
                        </div>
                        <div class="bg-light text-center" style={{padding: '30px'}}>
                            <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                            <Link to="" class="btn btn-primary py-2 px-4">Read More</Link>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  </>
  )
};
export default Bloggrid;