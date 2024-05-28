import React from 'react';
import { Link } from 'react-router-dom';
function AboutUs() {
  const mail=`naveen@gmail.com`
  return (
    <>
   
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">Geetanjali College of  Engineering and Technology</h1>
            </div>
            <p className="mb-4" style={{ textAlign: 'justify'}}>Geethanjali College of Engineering and Technology stands as a beacon of quality education in Hyderabad, Telangana, India. With a strong belief in the transformative power of education, the college is dedicated to nurturing well-rounded individuals who are not just academically proficient but also possess a strong character and a compassionate heart.The college's commitment to excellence is evident in its state-of-the-art infrastructure, which includes well-equipped laboratories, modern classrooms, and a well-stocked library. This, coupled with a team of experienced and dedicated faculty members, ensures that students receive a world-class education that is on par with the latest advances in their field.One of the key strengths of Geethanjali College of Engineering and Technology is its focus on holistic development. The college not only provides a strong academic foundation but also encourages students to participate in extracurricular activities, sports, and community service initiatives. This helps in shaping students into well-rounded individuals who are not just technically proficient but also socially responsible. the college understands that education is a lifelong process. As such, it places a strong emphasis on developing competencies in students that will serve them well in the future. Whether it's through industry collaborations, workshops, seminars, or internships, Geethanjali College of Engineering and Technology ensures that students are well-prepared to meet the challenges of the ever-evolving field of engineering and technology.</p>
            {/* <div className="row g-0 mb-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis in tenetur quae iusto quo reprehenderit maiores harum ab. Nesciunt possimus consequuntur id! Quasi tempora harum voluptates corrupti, enim cum, ullam, quia fugiat recusandae vel eligendi corporis illo.
                </p>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
              </div>
            </div> */}
            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
              <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">For any Quieres</h5>
                <h4 className="text-primary mb-0">+91 7738363524</h4>
              </div>
            </div>
            <Link to={`https://mail.google.com/mail/u/0/?view=cm&to=${mail}`} className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Suggestion </Link>
          </div>
          <div className="col-lg-5" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about1.jpg" style={{ objectFit: 'cover' }} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  );
}

export default AboutUs;
