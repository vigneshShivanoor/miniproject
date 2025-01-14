import { Link } from 'react-router-dom';

function EventCard({cardDetails}) {
    const path = 'http://localhost:5000/public'
    return (
        <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
            <div className="blog-item bg-light rounded overflow-hidden">
                <div className="blog-img position-relative overflow-hidden">
                    {/* <img className="img-fluid" src="img/chakravyuh1.jpg" alt="" /> */}
                    <img className="img-fluid" src={`${path}${cardDetails.imageUrl}`} alt="" />
                    <Link className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" to="">{cardDetails.Link}</Link>
                </div>
                <div className="p-4">
                    <div className="d-flex mb-3">
                        <small className="me-3"><i className="far fa-user text-primary me-2"></i>{cardDetails.AuthorName}</small>
                        <small><i className="far fa-calendar-alt text-primary me-2"></i>{cardDetails.Date}</small>
                    </div>
                    <h4 className="mb-3">{cardDetails.title}</h4>
                    <Link className="text-uppercase" to="">Details<i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default EventCard;