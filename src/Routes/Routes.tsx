import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home"
import BikeDetails from "../components/bike/BikeDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignUpForm from "../pages/Signup/SignUpForm";
import Login from "../pages/Login/Login";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/bike-details/:id",
                element:<BikeDetails/>
            },
            {
                path:"/about-us",
                element:<AboutUs/>
            },
            {
                path:"/signup",
                element:<SignUpForm/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])