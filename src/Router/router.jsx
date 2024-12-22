import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../404/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regester/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signIn",
        element:<Login></Login>
      },
      {
        path: 'register',
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
