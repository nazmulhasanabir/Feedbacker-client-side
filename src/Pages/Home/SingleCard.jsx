import React, { useEffect } from 'react';
import { animate } from "https://cdn.jsdelivr.net/npm/framer-motion@11.11.11/dom/+esm";
const SingleCard = ({service}) => {
    const {title,description,price,image} = service;
    useEffect(() => {
        animate(".animated-card", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 });
      }, []);
    
    return (
         <div>
            
            <div className="card bg-base-100 w-96 shadow-xl animated-card">
  <figure>
    <img
        className='w-full h-[250px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{price}$</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline btn">See Details</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCard;