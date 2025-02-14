import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContex";

import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

const Register = () => {
  const { createUser, UpdateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [Error, setError] = useState("");
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const name = form.name.value;
  //   const photoUrl = form.photoUrl.value;
  //   const password = form.password.value;

  //   // password validation

  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  //   if (password.length < 6) {
  //     setError("Password Should be 6 Characters and longers");
  //     return;
  //   }

  //   if (!passwordRegex.test(password)) {
  //     setError(
  //       "At Least one uppercase,one lowerCase,one number,one special character"
  //     );
  //     return;
  //   }
  //   fetch('http://localhost:7000/user', {
  //     method: "POST",
  //     headers:{
  //       'content-type': 'application/json'
  //     },
  //     body:JSON.stringify(name,email,photoUrl,password)
  //   })
  //   .then(res => res.json())
  //   .then(data=> {
  //     console.log(data);
  //   })

  //   createUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       if (result.user) {
  //         Swal.fire({
  //           icon: "success",
  //           title: "Success!",
  //           text: "Your Registerd Successfull!",
  //         });
  //       }
  //       UpdateUserProfile({ displayName: name, photoURL: photoUrl })
  //         .then(() => {
  //           // navigate("/");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });

  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         title: "Error!",
  //         text: "The account has been used already.",
  //         icon: "error",
  //         confirmButtonText: "OK",
  //       });
  //       console.log(error.message);
  //     });
  // };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must include at least one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }

    fetch("http://localhost:7000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        photoUrl,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User saved successfully:", data);
      })
      .catch((error) => {
        console.error("Error saving user:", error);
      });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have registered successfully!",
          });
        }
        UpdateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "The account has already been used.",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      // eslint-disable-next-line no-unused-var
      .then((result) => {
        fetch("http://localhost:7000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           result
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User saved successfully:", data);
          })
          .catch((error) => {
            console.error("Error saving user:", error);
          });
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
    <div className="hero dark:bg-cyan-800 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-cyan-600 text-white  w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                name="photoUrl"
                type="url"
                placeholder="PhotoUrl"
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
              <img
                onClick={handleGoogle}
                className="rounded-full cursor-pointer h-10 w-10 mx-auto"
                src={"https://i.ibb.co.com/vYyWjVq/images.png"}
                alt="Google Sign-In"
              />
              <p className="mt-2 text-center ">
                You have already a account?
                <Link to={"/signIn"}>
                  <button className="text-white font-semibold text-base">
                    Log-In
                  </button>
                </Link>
              </p>
              {Error && <p className="text-red-500  text-base ">{Error}</p>}
              <button className="btn bg-cyan-500 border-cyan-600">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
