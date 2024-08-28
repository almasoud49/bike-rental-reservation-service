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
      <div className="bg-black rounded shadow-xl w-auto h-auto p-4 ">
      <h1 className="font-bold text-3xl text-black mt-14 text-center">
        {selectedBike.brand} Details
      </h1>
        <p className="text-black">Name: {selectedBike.name}</p>
        <p className="text-black">Description: {selectedBike.description}</p>
        <p className="text-black">
          Price Per Hour: {selectedBike.pricePerHour}
        </p>
        <p className="text-black">Availability: {selectedBike.isAvailable}</p>
        <p className="text-black">CC: {selectedBike.cc}</p>
        <p className="text-black">Year: {selectedBike.year}</p>
        <p className="text-black">Brand: {selectedBike.brand}</p>
        <p className="text-black">Model: {selectedBike.model}</p>

        <button className="btn btn-secondary mt-4" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default BikeDetails;
