import React, {  useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import axios from "axios";
import RatingCustome from "../../Rating/RatingCustome";

const MyReview = () => {
  const { user } = UseAuth();
  const [reviews, setReviews] = useState([]);

  // useEffect(() =>{
  //         fetch(`http://localhost:7000/reviewAdd?email=${user.email}`)
  // }, [])
  axios
    .get(`http://localhost:7000/reviewAdd?email=${user.email}`)
    .then((response) => {
      // console.log(response);
      setReviews(response.data);
    });
  return (
    <div>
      My review{reviews.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Company Details</th>
              <th>My Review</th>
              <th>Customize Your Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
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
                          src={review.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{review.company_name}</div>
                      <div className="text-sm opacity-50">{review.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                    {review.textReview}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                  {review.starReview}
                  <RatingCustome rating={review.starReview} ></RatingCustome>
                  </span>
                </td>
              <div className="flex justify-between w-3/4 mx-auto">
              <button className="btn btn-active">Update</button>
              <button className="btn btn-active">Delete</button>
                </div>              
                <th>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
