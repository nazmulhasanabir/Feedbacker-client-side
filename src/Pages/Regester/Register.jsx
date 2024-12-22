import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContex";
import Swal from "sweetalert2";

const Regster = () => {
  const { createUser } = useContext(AuthContext);
  const [Error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // password validation

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (password.length < 6) {
      setError("Password Should be 6 Characters and longers");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "At Least one uppercase,one lowerCase,one number,one special character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "The account has been used already.",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            
            </div>
            <div className="form-control mt-6">
              <p className="mt-2 text-center ">
                You have already a account?
                <Link to={"/signIn"}>
                  <button className="text-purple-900 font-semibold text-base">
                    Log-In
                  </button>
                </Link>
              </p>
              {Error && <p className="text-red-500  text-base ">{Error}</p>}
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Regster;
