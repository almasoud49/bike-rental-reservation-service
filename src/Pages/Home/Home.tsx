import Bikes from "../../components/bike/Bikes";
import Reviews from "../../components/Reviews";
import Benefits from "../../components/Benefits";
import Coupon from "../../components/Coupon";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";
import { useAppSelector } from "../../redux/hooks";
import { useGetCurrentMode } from "../../redux/features/themeSlice";

const Home = () => {
  const mode = useAppSelector(useGetCurrentMode);
  return (
    <div className={`${mode || "light"} bg-white dark:bg-primaryColor`}>
      <Banner />
      <Bikes />
      <Reviews />
      <Benefits />
      <Coupon />
      <ContactForm/>
    </div>
  );
};

export default Home;
