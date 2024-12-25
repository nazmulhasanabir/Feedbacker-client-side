import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import RatingCustome from "../../Rating/RatingCustome";

const ServiceDetails = () => {
  const details = useLoaderData();
  const [reviews , setReviews] = useState([])
  axios
  .get(`http://localhost:7000/reviewAdded?id=${details._id}`)
  .then((response)=> {
    setReviews(response.data)
  })
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={details.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{details.title}</h1>
            <p className="py-6">
              {details.description}
            </p>
          <Link to={`/addReview/${details._id}`}><button className="btn btn-primary">Add Review</button></Link>
          </div>
        </div>
      </div>
    <div className="grid grid-cols-3">
    {
              reviews.map((review)=>
                <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={review.photoURL}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                 {review.Username}
                  <div className="badge badge-secondary"><RatingCustome rating={review.starReview}></RatingCustome></div>
                </h2>
                <p>{review.textReview}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
              )
            }
    </div>
    </div>
  );
};

export default ServiceDetails;
