import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home"
import BikeDetails from "../components/bike/BikeDetails";


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
            }
        ]
    }
])