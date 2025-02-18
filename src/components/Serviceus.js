import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Serviceus() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setJsonData(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setJsonData([]); // Fallback to an empty array
      });
  }, []);

  return (
    <>
      <Topbar />

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
                  excom{" "}
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
                  <Link to="/NewsUpdates" className="dropdown-item">
                    News Annoucements
                  </Link>
                  <Link to="/Teamus" className="dropdown-item">
                    Team Members
                  </Link>
                  <Link to="/Faculty" className="dropdown-item">
                    Faculty
                  </Link>
                  <Link to="/Login" className="dropdown-item">
                    Login
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
                  Login
                </Link>
                <div className="dropdown-menu m-0">
                  <Link to="/Login" className="dropdown-item">
                    Admin Login
                  </Link>
                  <Link to="/signup" className="dropdown-item">
                    signup
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
      </div>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="row g-7">
            <div class="col-lg-11">
              <div class="row g-5">
                {jsonData ? (
                  jsonData.map((item) => (
                    <EventCard key={item.id} cardDetails={item} />
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
