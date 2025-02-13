import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../404/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regester/Register";
import About from "../Pages/Shared/About";
import AddedService from "../Pages/Service/AddedService";
import AllService from "../Pages/Home/AllService";
import ServiceDetails from "../Pages/Details/ServiceDetails";
import AddReview from "../Review/AddReview";
import PrivateRoute from "./PrivateRoute";
import MyReview from "../Pages/My review/MyReview";
import MyService from "../Pages/MyService";
import UpdateService from "../Update/UpdateService";
import UpdateReview from "../Update/UpdateReview";

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
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "myService",
        element: (
          <PrivateRoute>
            <MyService></MyService>
          </PrivateRoute>
        ),
      },
      {
        path: "myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "addedService",
        element: (
          <PrivateRoute>
            <AddedService></AddedService>
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "updateService/:id",
        element:<PrivateRoute>
          <UpdateService></UpdateService>
        </PrivateRoute>,
        loader: ({params}) => 
          fetch(`http://localhost:7000/updateService/${params.id}`)
        // .then((res) => res.json())
        // .catch((error) => console.error("Error fetching movie:", error)),
      },

      {
        path: "/feedback/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/feedback/${params.id}`),
      },
      {
        path: 'updateReview/:id',
        element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
        loader:({params}) => 
        fetch(`http://localhost:7000/UpdateReview/${params.id}`)
      },
      {
        path: "AllService",
        element: <AllService></AllService>,
        loader: () => fetch("http://localhost:7000/feedbacks"),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
