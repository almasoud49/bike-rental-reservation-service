import Bikes from "../../components/bike/Bikes";
import Reviews from "../../components/Reviews";
import Benefits from "../../components/Benefits";
import Coupon from "../../components/Coupon";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <>
      <Banner />
      <Bikes />
      <Reviews />
      <Benefits />
      <Coupon />
      <ContactForm/>
    </>
  );
};

export default Home;
