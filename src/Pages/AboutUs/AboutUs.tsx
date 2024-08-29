import Contact from "../../components/about-us/Contact";
import Milestone from "../../components/about-us/Milestone";
import Mission from "../../components/about-us/Mission";
import Team from "../../components/about-us/Team";


const AboutUs = () => {
    return (
        <div className="py-28">
            <h1 className="text-center font-bold text-3xl">About Us</h1>
           <Mission/>
           <Team/>
           <Milestone/>
           <Contact/>
        </div>
    );
};

export default AboutUs;