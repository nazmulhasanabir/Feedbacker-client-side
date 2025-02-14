import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hook/UseAuth";
import { useEffect, useState } from "react";
import img from '../../assets/logo/peer-review-icon-2888794_1280.webp'
const Navbar = () => {
  const { user, signOutUser } = UseAuth({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
 const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const link = (
    <>
      <li>
        <Link className="  border-cyan-500 btn" to={"/"}>Home</Link>
      </li>
      <li>
        <Link  className="  border-cyan-500 btn"to={"/AllService"}>Services</Link>
      </li>
      <li>
        <Link className="  border-cyan-500 btn" to={"/about"}>About</Link>
      </li>
    </>
  );

  const UserLink = (
    <>
             <li >
        <Link to={"/"}  className="   border-cyan-500  ">Home</Link>
      </li>
      <li>
        <Link to={"/AllService"} className="   border-cyan-500  ">All Services</Link>
      </li>
      <li>
        <Link to={"/addedService"} className="   border-cyan-500  ">Add Service</Link>
      </li>
      <li>
        <Link to={"/myService"} className="   border-cyan-500  ">My Service</Link>
      </li>
      <li>
        <Link to={"/myReview"} className="   border-cyan-500  ">My Reviews</Link>
      </li>
      <li>
        <Link to={"/about"} className="   border-cyan-500  ">About</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Sign-Out!",
          text: "Sign-Out successful!",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "SignOut Error",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };


  return (
    <nav className=" bg-cyan-200 dark:bg-cyan-600 dark:text-white  bg-opacity-90 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <img
            className="w-12 h-12 rounded-full ml-2"
            src={img}
            alt="Logo"
          />
          <span className="ml-2 text-xl font-bold hidden lg:block">
            FeedBacker
          </span>
        </div>

        <ul className="hidden lg:flex justify-center items-center w-6/12  mx-auto space-x-6 font-medium  ">
          {user ? UserLink : link}
        </ul>



        
        {/* dark */}
         
       <div className="absolute left-96 sm:[400px]  lg:left-[1340px]   ">
    <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={darkModeHandler} className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
        </div> 
       
         
        {/*  */}
        
        
        
        
        
        <div className="dropdown dropdown-end ">

          <div tabIndex={0} role="" className=" relative m-1 right-3">
            {user && user?.email ? (
              <div className="group relative w-12 h-12 ">
                <img className="w-12 h-12 rounded-full" src={user.photoURL} />
              
              </div>
            ) : (
              <Link to={"/signIn"}>
                <button className="btn">Login</button>
              </Link>
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[url('https://i.pinimg.com/474x/70/76/74/707674868b11a1d4cdb92e681b37b279.jpg')] bg-cover rounded-box  z-[10] w-56 p-1  shadow"
          >
            {user && user?.email ? (
              <div className="flex items-center  flex-col">
                <img
                  className="w-9 h-9 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <div className="text-xs text-center">
                  <p className="text-white   lg:block">{user.displayName}</p>
                  <p className="text-white   lg:block">{user.email}</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="dark:bg-red-600 bg-red-800 p-1  rounded-xl text-white "
                >
                  Log-out
                </button>
              </div>
            ) : (
              <Link to={"/signIn"}>
                <button className="btn">Login</button>
              </Link>
            )}
          </ul>
        </div>
      </div>

      {menuOpen && (
        <ul className="lg:hidden bg-blue-600 p-4 space-y-4 font-medium ">
          {user ? UserLink : link}
          {user && user?.email && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 w-full py-2 rounded-lg text-white"
              >
                Log-Out
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;