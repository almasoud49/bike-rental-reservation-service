import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { useAppSelector } from "../redux/hooks";

const Main = () => {
   
    const isDarkMode = useAppSelector((state) => state.theme.mode);
    
    
    return (
        <div className={isDarkMode ? 'dark' : ''}>

           <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
           
           <Navbar/>
                <Outlet/>
            
            <Footer/>
           </div>
        </div>
    );
};

export default Main;