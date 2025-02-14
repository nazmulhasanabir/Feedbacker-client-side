import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import RatingCustome from "../../Rating/RatingCustome";

const ServiceDetails = () => {
  const details = useLoaderData();
  const [reviews, setReviews] = useState([]);

  // Fetch reviews when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:7000/reviewAdded?id=${details._id}`)
      .then((response) => {
        setReviews(response.data);
      });
  }, [details._id]);

  return (
    <div className="container mx-auto p-4 dark:bg-cyan-600 text-black dark:text-white" >
      {/* Service Details Card */}
      <div className="card dark:bg-[#49adc0]  shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto">
        <figure className="relative h-64">
          <img
            src={details.image}
            alt={details.title}
            className=" h-full rounded-2xl object-cover"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-bold ">
            {details.title}
          </h2>
          <p className="mt-2">{details.description}</p>
          <div className="mt-4 space-y-2">
            <p className="">
              <span className="font-semibold">Company Name:</span>{" "}
              {details.company_name}
            </p>
            <p className="">
              <span className="font-semibold">Salary:</span> {details.price}$
            </p>
            <p className="">
              <span className="font-semibold">Published Date:</span>{" "}
              {details.date}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="badge bg-blue-500  px-4 py-2 rounded-full">
              {details.category}
            </div>
          </div>
          <div className="mt-6">
            <Link to={`/addReview/${details._id}`}>
              <button className="btn w-full bg-cyan-500  border-cyan-600 text-white hover:text-black transition-colors">
                Add Review
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 ">
        <h2 className="text-3xl font-bold  text-center mb-8">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="card dark:bg-blue-400 shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={review.photoURL}
                    alt={review.Username}
                    className="w-12 h-12 rounded-full"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.Username}
                  </h3>
                </div>
                <div className="mt-4 bg-purple-50 p-4 rounded-lg">
                  <p className="text-gray-700">{review.textReview}</p>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-700 mr-2">Rating:</span>
                  <RatingCustome rating={review.starReview} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;