
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const BikeDetails = () => {
  const selectedBike = useAppSelector((state) => state.bike.selectedBike);
  const navigate = useNavigate();

  if (!selectedBike) {
    navigate("/");
    return null;
  }

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="mb-20">
      <div className="rounded shadow-2xl w-auto h-auto p-4">
        <h1 className="font-bold  py-6 text-4xl mt-14 text-center">
          {selectedBike.brand} Details
        </h1>
        <img 
          src={selectedBike.image} 
          alt={selectedBike.brand} 
          className="w-full h-64 object-cover mb-4" 
        />
        <p className="">Name: {selectedBike.name}</p>
        <p className="">Description: {selectedBike.description}</p>
        <p className="">
          Price Per Hour: {selectedBike.pricePerHour}
        </p>
        <p className="">Availability: {selectedBike.isAvailable ? 'Available' : 'Not Available'}</p>
        <p className="">CC: {selectedBike.cc}</p>
        <p className="">Year: {selectedBike.year}</p>
        <p className="">Brand: {selectedBike.brand}</p>
        <p className="">Model: {selectedBike.model}</p>

        <button className="btn btn-outline btn-secondary mt-4" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BikeDetails;

// import { useAppSelector } from "../../redux/hooks";
// import { useNavigate } from "react-router-dom";

// const BikeDetails = () => {
//   const selectedBike = useAppSelector((state) => state.bike.selectedBike);
//   const navigate = useNavigate();

//   if (!selectedBike) {
//     navigate("/");
//     return null;
//   }

//   const handleClose = () => {
//     navigate("/");
//   };

//   return (
//     <div className="mb-20">
//       <div className=" rounded shadow-2xl w-auto h-auto p-4 ">
//       <h1 className="font-bold text-3xl  mt-14 text-center">
//         {selectedBike.brand} Details
//       </h1>
//         <p className="">Name: {selectedBike.name}</p>
//         <p className="">Description: {selectedBike.description}</p>
//         <p className="">
//           Price Per Hour: {selectedBike.pricePerHour}
//         </p>
//         <p className="">Availability: {selectedBike.isAvailable}</p>
//         <p className="">CC: {selectedBike.cc}</p>
//         <p className="">Year: {selectedBike.year}</p>
//         <p className="">Brand: {selectedBike.brand}</p>
//         <p className="">Model: {selectedBike.model}</p>

//         <button className="btn btn-secondary mt-4" onClick={handleClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BikeDetails;
