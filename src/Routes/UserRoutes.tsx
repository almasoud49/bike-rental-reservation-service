import Bikes from "../components/bike/Bikes";
import BikeDetail from "../components/dashboard/bikes/BikeDetail";

export const userRoutes = [
    // {
    //   index: true,
    //   element: <Profile />,
    // },
    {
      path: "bikes",
      element: <Bikes />,
    },
    {
      path: "bikes/:bikeId",
      element: <BikeDetail />,
    },
    // {
    //   path: "payment",
    //   element: <AdvancePayment />,
    // },
    // {
    //   path: "my-rentals",
    //   element: <MyRentals />,
    // },
  ];