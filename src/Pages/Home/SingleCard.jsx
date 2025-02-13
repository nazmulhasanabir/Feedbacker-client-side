import React, { useEffect } from "react";
import { animate } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";
import { Link } from "react-router-dom";
const SingleCard = ({ service }) => {
  const { title, description, price, image, _id } = service;
  useEffect(() => {
    animate(
      ".animated-card",
      { scale: [0.4, 1] },
      { ease: "circInOut", duration: 1 }
    );
  }, []);

  return (
    <div>
      <div className="card bg-[#49adc0] text-white  w-10/12 mx-auto shadow-xl animated-card">
        <figure>
          <img className="w-full h-[250px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title bg-cyan-900 p-1 text-center rounded-md font-bold">
            {title}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/feedback/${_id}`}>
              <div className="badge badge-outline btn">See Details</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
