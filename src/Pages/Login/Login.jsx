import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContex";
import Swal from "sweetalert2";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || '/'
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your Login Successfull!",
          });
        }
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          Swal.fire({
            title: "Error!",
            text: "Email/Password is incorrect",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();

  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     console.log("Google sign-in successful:", result.user);

  //     const newUser = {
  //       name: result.user.displayName,
  //       email: result.user.email,
  //       photoURL: result.user.photoURL,
  //     };

  //     // Save Google user to database
  //     const response = await fetch("https://assignment-server-side-eight.vercel.app/users", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newUser),
  //     });
  //     const data = await response.json();

  //     if (data.insertedId) {
  //       Swal.fire({
  //         title: "Success!",
  //         text: "Google sign-In successful!",
  //         icon: "success",
  //         confirmButtonText: "OK",
  //       });
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     console.error("Error during Google sign-in:", err);
  //     Swal.fire({
  //       title: "Error!",
  //       text: "An error occurred during Google sign-in. Please try again.",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   }
  // };
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        if (result) {
          Swal.fire({
            title: "Success!",
            text: "Google sign-In successful!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        navigate(location?.state ? location.state : "/");
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Error!",
            text: "An error occurred during Google sign-in. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center font-bold text-3xl">Login</h2>
          <form onSubmit={handleSignIn} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <img
                onClick={handleGoogle}
                className="rounded-full cursor-pointer h-10 w-10 mx-auto"
                src={"https://i.ibb.co.com/vYyWjVq/images.png"}
                alt="Google Sign-In"
              />
              <p className="mt-2 text-center ">
                New here? Create an account and join us today!
                <Link to={"/register"}>
                  <button className="text-purple-900 font-semibold text-base">
                    Register
                  </button>
                </Link>
              </p>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
