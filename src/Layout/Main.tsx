import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { useAppSelector } from "../redux/hooks";
import { useGetCurrentMode } from "../redux/features/themeSlice";

const Main = () => {
  const mode = useAppSelector(useGetCurrentMode);

  return (
    <div className={`${mode || "light"} bg-white dark:bg-primaryColor`}>
      <div>
        <Navbar />
        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Main;
