import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContex';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className='w-1/12 mx-auto flex items-center justify-center'>
            (<span className="loading loading-spinner loading-lg "></span>)
        </div>
    }


    if(user){
        return(children)
    }
    return (
        <Navigate to={'/signIn'} state={location?.pathname} ></Navigate>
    )
};

export default PrivateRoute;