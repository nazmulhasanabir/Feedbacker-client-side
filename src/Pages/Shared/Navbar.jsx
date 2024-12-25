import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hook/UseAuth";
const Navbar = () =>{
  const {user , signOutUser , loading} = UseAuth({})
  console.log(user);
  const link = 
  <>
      <Link to={'/'}><li><a>Home</a></li></Link>
        <Link to={'/AllService'}><li><a>Services</a></li></Link>
  </>
  const UserLink = 
  <>
      <Link to={'/'}><li><a>Home</a></li></Link>
        <Link to={'/AllService'}><li><a>Services</a></li></Link>
        <Link to={'/addedService'}><li><a>Add Service</a></li></Link>
        <Link to={'/myService'}><li><a>My Services</a></li></Link>
        <Link to={'/myReview'}><li><a>My Reviews</a></li></Link>

  </>


  const handleSignOut = ()=>{
    signOutUser()
    .then(()=> {
      Swal.fire({
        icon: "success",
        title: "SignOUt!",
        text: "Sign-Out successfull!",
      })
    })
    .catch((error)=> {
      Swal.fire({
        title: "Error!",
        text: "SignOut Error",
        icon: "error",
        confirmButtonText: "OK",
      });
    })

  }

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner
  }


    return(
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {
      user ? <>{UserLink}</> : <>{link} </>
      }
      </ul>
    </div>
    <div className="flex">
      <img className=" w-28 " src="/src/assets/logo/e4jgbyjh8qwannrkevavx04jv0_image.jpg" alt="" />
      {/* <a className="btn btn-ghost text-xl">FeedBacker</a> */}
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
      user ? <>{UserLink}</> : <>{link} </>
      }
    </ul>
  </div>
  <div className="navbar-end">
      {
        user ?
         <>
            <p>{user.displayName}</p>
            <img className="w-10 h-10" src={user.photoURL} />
          <button  onClick={handleSignOut} className="btn " >Log-Out</button>
        </> :
         <>
         <Link to={'signIn'}> <a className="btn">Login</a></Link>
         </>
      }



  </div>
</div>

    )
}
export default Navbar;
