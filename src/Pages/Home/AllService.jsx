import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllService = () => {
  const services = useLoaderData();
  const [service, setService] = useState(services);
    const [filter , setFilter] = useState('')

  useEffect(() => {
    fetch(`http://localhost:7000/feedback?filter=${filter}`)
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
      <div className="grid grid-cols-3 gap-6">
        {service.map((serv) => (
          <div key={serv._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={serv.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{serv.title}</h2>
              <p>{serv.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/feedback/${serv._id}`}>
                  <button className="btn btn-primary">See Details</button>
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
