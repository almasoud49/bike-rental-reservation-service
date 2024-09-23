import BikesManagement from "../components/dashboard/bikes/BikesManagement";
import Coupons from "../components/dashboard/coupon/Coupons";
import Rentals from "../components/dashboard/rentals/Rentals";
import Profile from "../components/dashboard/user/Profile";
import UserManagement from "../components/dashboard/user/UserManagement";
import Users from "../components/dashboard/user/Users";

export const adminRoutes = [
    {
      index: true,
      element: <Profile />,
    },
    {
      path: "manage-bikes",
      element: <BikesManagement />,
    },
    {
      path: "manage-users",
      element: <UserManagement />,
    },
    {
      path: "rentals",
      element: <Rentals />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "coupons",
      element: <Coupons />,
    },
  ];