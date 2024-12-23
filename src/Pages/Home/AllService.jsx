import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllService = () => {

    const services = useLoaderData()
    const [service , setService] = useState(services)

    useEffect(() => {
        fetch('http://localhost:7000/feedback')
          .then((res) => res.json())
          .then(
            (data) => {
              setService(data);
            },
            []
          );
      
      });

    return (
        <div className='grid grid-cols-3 gap-6'>
        {service.map((serv)=> (
            <div key={serv._id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={serv.image}
                />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{serv.title}</h2>
              <p>{serv.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/feedback/${serv._id}`}><button className="btn btn-primary">See Details</button></Link>
              </div>
            </div>
          </div>

        ))}            
        </div>
    );
};

export default AllService;