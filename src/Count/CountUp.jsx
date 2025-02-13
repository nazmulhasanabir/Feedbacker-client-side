import axios from "axios";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import img1 from "../assets/pinterest/icons8-user-80.png"
import img2 from "../assets/pinterest/icons8-service-96.png"
import img3 from "../assets/pinterest/icons8-review-50.png"
const Count = () => {
  const [service, setService] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/feedbacks").then((response) => {
      setService(response.data);
    });

    axios.get("http://localhost:7000/user").then((response) => {
      setUsers(response.data);
    });

    axios.get("http://localhost:7000/review").then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <div className="mt-3">
    <h2 className="text-3xl text-center font-bold p-1">Our Engage</h2>
    <div className="flex flex-row items-center  justify-center gap-6 my-10 w-full">
      <div className="text-center border-cyan-600 border-2  rounded-lg p-6 shadow-md">
        <img  className="h-28" src={img2} alt="" />
        <h2 className="text-xl font-bold">Services</h2>
        <CountUp
          className="text-4xl font-semibold"
          end={service.length}
          duration={9}
        />
      </div>

      <div className="text-center border-cyan-600 border-2  rounded-lg p-6 shadow-md">
      <img src={img1} className="h-28" alt="" />
        <h2 className="text-xl font-bold">Users</h2>
        <CountUp
          className="text-4xl font-semibold"
          end={users.length}
          duration={9}
        />
      </div>

      <div className="text-center border-cyan-600 border-2   rounded-lg p-6 shadow-md">
        <img className=" h-28" src={img3} alt="" />
        <h2 className="text-xl font-bold">Reviews</h2>
        <CountUp
          className="text-4xl font-semibold"
          end={reviews.length}
          duration={9}
        />
      </div>
    </div>
    </div>
  );
};

export default Count;
