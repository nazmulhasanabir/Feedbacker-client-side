import axios from "axios";
import React, { useState } from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  axios
    .get("http://localhost:7000/feedback")
    .then((response) => {
      setServices(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
        const sliceService = services.slice(0 , 6) 
  return (
    <>
      <h2 className="text-center text-4xl font-bold p-3" >
        Popular Services Company
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sliceService.map((service) =>  <SingleCard key={service._id} service={service} ></SingleCard> )}
      </div>
   <div className="p-8 w-2/12  mx-auto">
   <Link to={'/AllService'}><button className="btn">See All Service</button></Link>
   </div>
    </>
  );
};

export default ServiceCard;
