import React, { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import { data, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CountUp from "react-countup";
import axios from "axios";
import useAxiosSecure from "../Hook/useAxiosSecure";

const MyService = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch ] = useState('')
  const { user } = UseAuth();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    // fetch(`https://review-xpert-server-side.vercel.app/feedback?email=${user.email}&search=${search}`)
    //   .then((res) => res.json())
    //   .then((data) => setServices(data));
    // axios.get(`https://review-xpert-server-side.vercel.app/feedback?email=${user.email}&search=${search}`,{
    //   withCredentials:true
    // })
    //   .then(res => setServices(res.data))

    axiosSecure.get(`/feedback?email=${user.email}&search=${search}`)
      .then(res => setServices(res.data))
  },
   [user.email, search]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://review-xpert-server-side.vercel.app/feedback/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = services.filter(
                (service) => service._id !== _id
              );
              setServices(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/AllService");
            }
          });
      }
    });
  };

  return (
    <div className="dark:bg-cyan-600 dark:text-white">
      <div className="w-6/12 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input onChange={e => e.target.value.trim() && setSearch(e.target.value)} type="text" name="search" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service Details</th>
                <th>Details</th>
                <th>Customize Service</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id}>
                  {/* <th>
                              <label>
                                <input type="checkbox" className="checkbox" />
                              </label>
                            </th> */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={service.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{service.company_name}</div>
                        <div className="text-sm opacity-50">
                          {service.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {service.description}
                    <br />
                  </td>
                  <div className="flex justify-between w-3/4 mx-auto">
                    <Link to={`/updateService/${service._id}`}>
                      <button className="btn btn-active">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-active"
                    >
                      Delete
                    </button>
                  </div>
                  <th></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyService;
