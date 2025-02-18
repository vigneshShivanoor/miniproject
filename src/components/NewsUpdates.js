import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsUpdates.css"; // Your custom CSS file for styling
import { Link } from "react-router-dom";

const NewsUpdates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of news items to show at once
    slidesToScroll: 1, // Number of news items to scroll at once
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const newsItems = [
    {
      id: 1,
      title: "Capture the flag",
      date: "Apr 5 ,2024",
      category: "Hackthon",
      image: "../img/chakravyuh.jpg",
    },
    {
      id: 2,
      title: "IEEE XTREME 17.0",
      date: "October 12, 2025",
      category: "GLOBAL CONTEST",
      image: "../img/Xtreme.jpg",
    },
    {
      id: 3,
      title: "CodeQuizz",
      date: "April 21 , 2024",
      category: "Bhaswara",
      image: "../img/codequizz.jpg",
    },
    {
      id: 4,
      title: "online webinar",
      date: "Jan 01, 2022",
      category: "Webinar",
      image: "../img/logocomputer.png",
    },
    {
      id: 5,
      title: "Code Buzz",
      date: "Jan 01, 2022",
      category: "Contest",
      image: "../img/logocomputer.png",
    },
  ];

  return (
    <>
      <div
        className="container-fluid position-relative p-0"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(9, 30, 62, .7)",
          zIndex: 1,
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1
              className="m-0"
              style={{ filter: "drop-shadow(2px 4px 6px black)" }}
            >
              <img
                src="img/ieee.png"
                alt="logo"
                style={{ padding: "0.3rem 1rem" }}
              />
              <span>IEEE GCET SB</span>
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link ">
                Home
              </Link>
              <Link to="/Aboutus" className="nav-item nav-link">
                About
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="/Events"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  Events
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Serviceus" className="dropdown-item ">
                    Recent
                  </Link>
                  <Link to="/Event2023" className="dropdown-item ">
                    Events 2023-2024
                  </Link>

                  <Link to="/Events1" className="dropdown-item">
                    Events 2020
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="/Xecom"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  excom
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Xecom" className="dropdown-item">
                    excom 2023
                  </Link>
                  <Link to="/Xecom1" className="dropdown-item">
                    excom 2024
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  to="Aboutus"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  More
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Priceus" className="dropdown-item">
                    Pricing Plan
                  </Link>
                  {/* <Link to="/Featureus" className="dropdown-item">Our features</Link> */}
                  <Link to="/Teamus" className="dropdown-item">
                    Team Members
                  </Link>
                  <Link to="/Faculty" className="dropdown-item">
                    Faculty
                  </Link>
                </div>
              </div>
            </div>
            {/* <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
            <Link
              to="https://www.ieee.org/profile/public/createwebaccount/showRegister.html"
              className="btn btn-primary py-2 px-4 ms-3"
            >
              Join IEEE
            </Link>
          </div>
        </nav>

        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                Important Announcements!
              </h1>

              <Link to="/" className="h5 text-white">
                IEEE SB GCET
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="news-updates">
        <h2>Featured News</h2>
        <Slider {...settings}>
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <span className="category">{item.category}</span>
                <span className="date">{item.date}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewsUpdates;
