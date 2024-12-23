import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
//   const [SerDetails, setSerDetails] = useState([details]);
  console.log(details);
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
            <button className="btn btn-primary">Add Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
