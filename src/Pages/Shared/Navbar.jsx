import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hook/UseAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, signOutUser } = UseAuth({});
  const [menuOpen, setMenuOpen] = useState(false);

  const link = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/AllService"}>Services</Link>
      </li>
    </>
  );

  const UserLink = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/AllService"}>All Services</Link>
      </li>
      <li>
        <Link to={"/addedService"}>Add Service</Link>
      </li>
      <li>
        <Link to={"/myService"}>My Services</Link>
      </li>
      <li>
        <Link to={"/myReview"}>My Reviews</Link>
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
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "SignOut Error",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };


  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <button
            className="lg:hidden text-white focus:outline-none"
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
            src={'https://i.ibb.co.com/hDy0f3j/e4jgbyjh8qwannrkevavx04jv0-image.jpg'}
            alt="Logo"
          />
          <span className="ml-2 text-xl font-bold hidden lg:block">
            FeedBacker
          </span>
        </div>

        <ul className="hidden lg:flex space-x-6 font-medium">
          {user ? UserLink : link}
        </ul>

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
        <ul className="lg:hidden bg-blue-600 p-4 space-y-4 font-medium">
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
