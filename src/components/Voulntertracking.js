import React, { useState } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

const VolunteerTracking = () => {
    const [volunteers] = useState([
        { id: 1, name: "Vardhan Reddy", eventsConducted: 5 },
        { id: 2, name: "E. Dhanush", eventsConducted: 3 },
        { id: 3, name: "Nandha Kishore", eventsConducted: 4 },
        { id: 4, name: "Naveen", eventsConducted: 6 },
        { id: 5, name: "Bhavya", eventsConducted: 2 },
        { id: 6, name: "Vignesh", eventsConducted: 7 },
      ]);
      

  return (
    <div>
      <Topbar />
      <div
        className="container-fluid position-relative p-0"
        style={{ background: "rgba(9, 30, 62, .7)", zIndex: 1 }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <h1
            className="m-0 text-white"
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
          >
            <span>Volunteer Tracking System</span>
          </h1>
        </nav>
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                Volunteers & Events
              </h1>
              <p className="text-white">
                Track the volunteers and their contribution in terms of events
                conducted.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Volunteer Event Tracking</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Volunteer ID</th>
                <th>Volunteer Name</th>
                <th>Number of Events Conducted</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer) => (
                <tr key={volunteer.id}>
                  <td>{volunteer.id}</td>
                  <td>{volunteer.name}</td>
                  <td>{volunteer.eventsConducted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VolunteerTracking;
