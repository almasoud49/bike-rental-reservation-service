import BikesManagement from "../components/dashboard/bikes/BikesManagement";
import Rentals from "../components/dashboard/rentals/Rentals";
import Profile from "../components/dashboard/user/Profile";

export const adminRoutes = [
    {
      index: true,
      element: <Profile />,
    },
    {
      path: "manage-bikes",
      element: <BikesManagement />,
    },
    // {
    //   path: "manage-users",
    //   element: <UserManagement />,
    // },
    {
      path: "rentals",
      element: <Rentals />,
    },
    // {
    //   path: "users",
    //   element: <Users />,
    // },
    // {
    //   path: "coupons",
    //   element: <Coupons />,
    // },
  ];