import React from "react";

const AddedService = () => {
  return (
    <div>
     <div className="w-6/12 mx-auto">
     {/* service title */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Service Title" />
      </label>
     {/* service image */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Service Image" />
      </label>
     {/* Company Name */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Company Name" />
      </label>
     {/* Website */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Website" />
      </label>
     {/* Description */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Description" />
      </label>
     {/* Category */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Category" />
      </label>
     {/* Price */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Price" />
      </label>
     {/* Added date */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="date" className="grow" placeholder="Added date" />
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
        <input type="text" className="grow" placeholder="Email" />
      </label>
     </div>
    </div>
  );
};

export default AddedService;
