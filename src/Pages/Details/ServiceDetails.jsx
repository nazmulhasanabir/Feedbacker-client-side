import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import RatingCustome from "../../Rating/RatingCustome";

const ServiceDetails = () => {
  const details  = useLoaderData();
  const [reviews, setReviews] = useState([]);

  axios
    .get(
      `http://localhost:7000/reviewAdded?id=${details._id}`
    )
    .then((response) => {
      setReviews(response.data);
    });
  return (
    <div className=" mt-7 rounded-xl">
      <div className="card w-6/12 mx-auto shadow-xl">
        <figure>
          <img src={details.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {details.title}
          </h2>
          <h2 >Company Name:{details.company_name}</h2>
           
          <p>{details.description}</p>
          <div className="card-actions justify-end">
          <div className="badge bg-blue-500 text-white p-6">{details.category}</div>
            <div className="badge bg-sky-500 text-white p-5">Salary:{details.price}$ </div>
            <div className="badge bg-sky-500 text-white p-5">Published Date:{details.date}</div>
          </div>
          <Link to={`/addReview/${details._id}`}><button className="btn w-full bg-purple-400 text-white ">Add Review</button></Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-10/12 mx-auto mt-9">
        {reviews.map((review) => (
          <div className="card bg-blue-400 text-white w-52 shadow-xl ">
            <figure>
              <img src={review.photoURL} className="rounded-full w-14 h-14" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold">
                {review.Username}
                <div className="bg-purple-400 rounded-lg">
              <p className="font-semibold">{review.textReview}</p>
                </div>
              </h2>
                  <h2 className="flex items-center">Rating <RatingCustome rating={review.starReview}></RatingCustome></h2>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
