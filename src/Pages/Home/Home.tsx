import Bikes from "../../components/bike/Bikes";
import banner from "../../assets/images/bannar.jpg"
import Reviews from "../../components/Reviews";



const Home = () => {
    return (
        <>
<div
  className="hero min-h-96 mb-10"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
  <div className="hero-overlay bg-opacity-40 "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary text-xl">Get Started</button>
    </div>
  </div>
</div>
<Bikes/>
<Reviews/>

</>)
};

export default Home;