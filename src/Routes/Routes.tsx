import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home"
import BikeDetails from "../components/bike/BikeDetails";
import AboutUs from "../pages/AboutUs/AboutUs";


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
            }
        ]
    }
])