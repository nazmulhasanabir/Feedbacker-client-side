import { useContext } from "react"
import AuthContext from "../Context/AuthContex"

const UseAuth = () =>{
    const context = useContext(AuthContext)
    return context
}

export default UseAuth;