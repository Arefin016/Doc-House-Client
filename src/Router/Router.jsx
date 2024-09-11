import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
import About from "../pages/About/About"
import Appointment from "../pages/Appointment/Appointment"
import Login from "../pages/Login/Login"
import Reviews from "../pages/Reviews/Reviews"
import ContactUs from "../pages/ContactUs/ContactUs"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import SignUp from "../pages/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute"
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/doctorDetailsPage/:id",
        element: <DoctorDetails></DoctorDetails>,
      },
    ],
  },
])
