import React, { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyService = () => {
  const [services, setServices] = useState([]);
  const { user } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:7000/feedback?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [user.email]);

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
        fetch(`http://localhost:7000/feedback/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = services.filter((service) => service._id !== _id)
              setServices(remaining)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate('/AllService')
            }
          });
      }
    });
  };

  return (
    <div>
      setvice {services.length}
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
