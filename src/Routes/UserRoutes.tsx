import BikeDetail from "../components/dashboard/bikes/BikeDetail";
import Bikes from "../components/dashboard/bikes/Bikes";
import AdvancePayment from "../components/dashboard/payments/AdvancePayment";
import MyRentals from "../components/dashboard/rentals/MyRentals";
import Profile from "../components/dashboard/user/Profile";

export const userRoutes = [
    {
      index: true,
      element: <Profile />,
    },
    {
      path: "bikes",
      element: <Bikes />,
    },
    {
      path: "bikes/:bikeId",
      element: <BikeDetail />,
    },
      {
      path: "my-rentals",
      element: <MyRentals />,
    },
    {
      path: "payment",
      element: <AdvancePayment />,
    }
    
  ];