import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

const AddReview = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value < 0) value = 0;
    if (value > 5) value = 5;
    e.target.value = value;
  };
  return (
    <div>
      <div className="w-6/12 mx-auto">
        {/* text review */}
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Text Your FeedBack"
        ></textarea>
        {/* rating section */}
        <label className="input input-bordered flex items-center gap-2">
          rating star
          <input
            type="number"
            className="grow"
            placeholder="Rating star"
            min="0"
            max="5"
            step="1"
            onChange={handleInputChange}
          />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </label>

        {/* review posted date */}
        <label className="input input-bordered flex items-center gap-2">
          Date
          <input type="date" className="grow" placeholder="Date" />
        </label>
        {/* user info  */}
        <label className="input input-bordered flex items-center gap-2">
          User Info
          <input type="text" className="grow" placeholder="User Info" />
        </label>
      </div>
    </div>
  );
};

export default AddReview;
