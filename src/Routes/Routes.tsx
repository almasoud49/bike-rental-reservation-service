import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home"
import AboutUs from "../pages/AboutUs/AboutUs";
import SignUpForm from "../pages/Signup/SignUpForm";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import { userRoutes } from "./UserRoutes";
import SignUp from "../pages/Signup/SignUpForm";
import ProtectedRoute from "./ProtectedRoute";
import SignUpSuccess from "../pages/Signup/SignUpSuccess";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element: <Home/>
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
    },
    {
        path:"/dashboard/user",
        element:(<ProtectedRoute role="user">
            <Dashboard/>
        </ProtectedRoute>

        ),
        children: userRoutes,
    },
    {
        path: "/dashboard/admin",
        element:(<ProtectedRoute role="admin">
            <Dashboard/>
        </ProtectedRoute>)
    },
    {
        path: "signup",
        element: <SignUp />,
      },
    {
        path: "sign-up-success",
        element: <SignUpSuccess />,
      },
])