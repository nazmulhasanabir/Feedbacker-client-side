import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllService = () => {
  const services = useLoaderData();
  const [service, setService] = useState(services);
    const [filter , setFilter] = useState('')

  useEffect(() => {
    fetch(`https://review-xpert-server-side.vercel.app/feedbacks?filter=${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      }, [filter]);
  });

  
  return (
    <div className="dark:bg-cyan-900">
      <div className="w-3/12 mx-auto p-2  ">
        <select name="category" id="category" onChange={e => setFilter(e.target.value)} className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Filter By Category
          </option>
          <option>Software</option>
          <option>Restaurant</option>
          <option>Transport</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto  gap-6 text-white">
        {service.map((serv) => (
          <div key={serv._id} className="card w-96 shadow-xl rounded-lg">
            <figure>
              <img src={serv.image} />
            </figure>
            <div className="card-body bg-cyan-400 dark:bg-cyan-700 rounded-b-xl">
              <h2 className="card-title  p-1 text-center rounded-md font-bold">{serv.title}</h2>
              <p>{serv.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/feedback/${serv._id}`}>
                  <button className="btn bg-cyan-500 border-cyan-300 text-white btn-md">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllService;
