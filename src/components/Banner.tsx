import banner from "../assets/images/banner.jpg"



const Banner = () => {
    return (
<div
  className="hero min-h-96 mb-10"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
  <div className="hero-overlay bg-opacity-40 "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md ">
    <div className="form-control my-14 " >
   
      <input type="text" placeholder="Search"  className="input input-bordered  w-24 md:w-auto"  />
    </div>
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
      Bike rental reservations provide a convenient and efficient way to ensure access to bikes when needed, promoting healthier lifestyles and supporting sustainable transportation.
      </p>
      <button className="btn bg-custom-teal  text-xl">Rent Now</button>
    </div>
    
  </div>
</div>
    );
};

export default Banner;