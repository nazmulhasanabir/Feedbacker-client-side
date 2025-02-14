import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://review-xpert-server-side.vercel.app',  
    withCredentials: true
})


const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {signOutUser} = UseAuth()
    useEffect(()=> {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            console.log("error caought in interceptor", error)
            if(error.status === 401 || error.status === 403){
                console.log('neet to logout');
                signOutUser()
                .then(()=>{
                    Swal.fire({
                        title: "Error!",
                        text: "Request failed with status code 401",
                        icon: "error",
                        confirmButtonText: "OK",
                      });
                      navigate('/signIn')
                })
                .catch(error => {
                    console.log(error);
                })
            }
            return Promise.reject(error)
        })
    },[])


    return axiosInstance
};

export default useAxiosSecure;