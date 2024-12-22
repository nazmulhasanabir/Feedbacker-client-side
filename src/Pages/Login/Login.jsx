import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContex';
import Swal from 'sweetalert2';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    
    const handleSignIn = e =>{
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value
      

      signInUser(email , password)
      .then(result => {
        console.log(result.user);
        if(result.user){
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your Login Successfull!",
          })
        }
      })
      .catch(error => {
        console.log(error);
      if(error){
        Swal.fire({
          title: "Error!",
          text: "Email/Password is incorrect",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
      })

    } 



    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
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