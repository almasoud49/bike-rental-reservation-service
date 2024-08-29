import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { useAppSelector } from "../redux/hooks";

const Main = () => {
    // const location = useLocation();
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div className={isDarkMode ? 'dark' : ''}>

           <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
           {/* {noHeaderFooter || <Navbar/>} */}
           <Navbar/>
                <Outlet/>
            {/* {noHeaderFooter || <Footer/>} */}
            <Footer/>
           </div>
        </div>
    );
};

export default Main;