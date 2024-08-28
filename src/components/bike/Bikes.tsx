import { useGetAllBikeQuery } from "../../redux/features/bike/bikeApi";
import { setSelectedBike } from "../../redux/features/bike/bikeSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from 'react-router-dom';
import { TBikeInitialState } from "../../types/bike.types";

const AllBikes = () => {
  const dispatch = useAppDispatch();
  const { data: allBikes, isLoading } = useGetAllBikeQuery("");
  console.log(allBikes);
  console.log(isLoading);

  const handleViewDetail = (bike: TBikeInitialState) => {
    dispatch(setSelectedBike(bike));
  };

  return (
    <div className="my-10">
      <h1 className="font-bold text-4xl text-white">Available Bikes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {allBikes?.data?.map((bike: TBikeInitialState) => (
          <div key={bike._id} className="bg-black rounded p-6 w-auto h-60">
            <div className="card-body">
              <h2 className="card-title text-black">{bike.brand}</h2>
              <p className="text-black">{bike.cc}</p>
              <div className="card-actions">
              <Link to={`/bike-details/${bike._id}`}>
                  <button
                    className="btn bg-custom-teal text-xl mx-auto my-auto"
                    onClick={() => handleViewDetail(bike)}
                  >
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBikes;
