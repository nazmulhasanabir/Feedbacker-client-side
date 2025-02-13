import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllService = () => {
  const services = useLoaderData();
  const [service, setService] = useState(services);
    const [filter , setFilter] = useState('')

  useEffect(() => {
    fetch(`http://localhost:7000/feedbacks?filter=${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      }, [filter]);
  });

  
  return (
    <div>
      <div className="w-6/12 mx-auto my-6">
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
            <div className="card-body bg-blue-400  rounded-b-xl">
              <h2 className="card-title bg-cyan-900 p-1 text-center rounded-md font-bold">{serv.title}</h2>
              <p>{serv.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/feedback/${serv._id}`}>
                  <button className="btn bg-blue-500 border-cyan-300 text-white btn-md">See Details</button>
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
