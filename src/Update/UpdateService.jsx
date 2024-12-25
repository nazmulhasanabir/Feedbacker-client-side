import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { format } from "date-fns";
import UseAuth from '../Hook/UseAuth';

const UpdateService = () => {
    const service = useLoaderData()
    const {price, category, description ,website ,company_name ,image,title , _id} = service
    const { user } = UseAuth();
    const formattedDate = new Date();
    const date = format(formattedDate, "yyyy-MM-dd");
    const navigate = useNavigate()


    //   const handleUpdateService = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const initialData = Object.fromEntries(formData.entries());
    //     const serviceData = {
    //       ...initialData,
    //       date,
    //     };
    //     fetch(`http://localhost:7000/feedback/${_id}`, {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(serviceData),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //           if(data.modifiedCount > 0){
    //             Swal.fire({
    //               icon: "success",
    //               title: "Service Updated",
    //               text: "Your Service Updated!",
    //             })
    //             // navigate('/AllService')
    //           }
    //       });
    //   };
    const handleUpdateService = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const serviceData = {
          ...initialData,
          date,
        };
      
        fetch(`http://localhost:7000/updateService/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(serviceData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Response from Server:", data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Service Updated",
                text: "Your Service has been updated!",
              });
              navigate('/AllService');
            } else {
              Swal.fire({
                icon: "info",
                title: "No Changes Detected",
                text: "No updates were made to the service.",
              });
            }
          })
          .catch((error) => {
            console.error("Error updating service:", error);
            Swal.fire({
              icon: "error",
              title: "Update Failed",
              text: "Something went wrong. Please try again.",
            });
          });
      };
      

    return (
        <div>
               <form onSubmit={handleUpdateService} className="card-body">
                <h2>Update Your Service </h2>
        <div className="form-control">
          {/* service title */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              name="title"
              defaultValue={title}
              type="text"
              className="grow"
              placeholder="Service Title"
            />
          </label>
        </div>
        <div className="form-control">
          {/* service image */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              name="image"
              defaultValue={image}
              type="url"
              className="grow"
              placeholder="Service Image URL"
            />
          </label>
          {/* Company Name */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              name="company_name"
              defaultValue={company_name}
              type="text"
              className="grow"
              placeholder="Company Name"
            />
          </label>
          {/* Website */}
          <label className="input input-bordered flex items-center gap-2">
            <input
            defaultValue={website}
              name="website"
              type="text"
              className="grow"
              placeholder="Website"
            />
          </label>
          {/* Description */}
          <label className="input input-bordered flex items-center gap-2">
            <input
            defaultValue={description}
              name="description"
              type="text"
              className="grow"
              placeholder="Description"
            />
          </label>
          {/* Category */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              name="category"
              defaultValue={category}
              type="text"
              className="grow"
              placeholder="Category"
            />
          </label>
          {/* Price */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              name="price"
              defaultValue={price}
              type="text"
              className="grow"
              placeholder="Price"
            />
          </label>
          {/* Added date */}
          <label className="input input-bordered flex items-center gap-2">
            <h2>{date}</h2>
          </label>
          {/* user email */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              name="email"
              value={user.email}
              type="text"
              className="grow"
              placeholder="Email"
            />
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Service</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateService;