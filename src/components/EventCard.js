import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ cardDetails }) {
  return (
    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
      <div className="blog-item bg-light rounded overflow-hidden">
        <div className="blog-img position-relative overflow-hidden">
          <img
            className="img-fluid"
            src={cardDetails.imageUrl}
            alt={cardDetails.title}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
            onError={(e) => {
              e.target.src = "/img/placeholder.jpg";
            }} // Fallback image
          />
          <Link
            className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
            to={`/event/${cardDetails.id}`} // Dynamic event page
          >
            {cardDetails.title}
          </Link>
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2"></i>{" "}
              {cardDetails.AuthorName}
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2"></i>
              {Array.isArray(cardDetails.Date)
                ? cardDetails.Date.join(" - ")
                : cardDetails.Date}
            </small>
          </div>
          <p>{cardDetails.details || "No additional details available."}</p>
          <a
            className="text-uppercase"
            href={cardDetails.id} // Open the Google Form link
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // For security reasons
          >
            Register Here <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
