import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";

const ServiceCard = () => {
  const {loading} = UseAuth()
  const [services, setServices] = useState([]);
  const [loadings, setLoading] = useState(true)
  useEffect(()=>{
    axios
    .get("http://localhost:7000/feedbacks")
    .then((response) => {
      setServices(response.data);
      setLoading(false)
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false)
    });
  
  },[])
        const sliceService = services.slice(0 , 6) 
  return (
    <>
      <h2 className="text-center  w-6/12 rounded-2xl m-3 mx-auto text-xl lg:text-4xl font-bold p-3 bg-cyan-300" >
        Popular Services Company
      </h2>
      {loadings ? (
        <div className="text-center my-8">
       <span className="loading loading-ring loading-lg"></span>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sliceService.map((service) => (
              <SingleCard key={service._id} service={service} />
            ))}
          </div>
          <div className="p-2 lg:p-8 w-2/12 mx-auto">
            <Link to={"/AllService"}>
              <button className="btn bg-cyan-500 text-white">See All Service</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default ServiceCard;
