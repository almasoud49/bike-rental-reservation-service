import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home"
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/Error/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import { userRoutes } from "./UserRoutes";
import SignUp from "../pages/Signup/SignUpForm";
import ProtectedRoute from "./ProtectedRoute";
import SignUpSuccess from "../pages/Signup/SignUpSuccess";
import { adminRoutes } from "./AdminRoutes";
import Login from "../pages/Login/Login";
import PaymentSuccess from "../components/dashboard/payments/PaymentSuccess";
import AdvancePaymentFailure from "../components/dashboard/payments/AdvancePaymentFailure";
import PaymentFailure from "../components/dashboard/payments/PaymentFailure";


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
        </ProtectedRoute>),
        children: adminRoutes,
    },
    {
        path: "login",
        element: <Login />,
      },
    {
        path: "signup",
        element: <SignUp />,
      },
    {
        path: "sign-up-success",
        element: <SignUpSuccess />,
      },
      {
        path: "payment-success/:transactionId",
        element: <PaymentSuccess />,
      },
      {
        path: "advance-payment-failure",
        element: <AdvancePaymentFailure />,
      },
      {
        path: "payment-failure",
        element: <PaymentFailure />,
      },
])