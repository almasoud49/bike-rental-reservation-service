
import { useGetAllBikeQuery } from "../../redux/features/bike/bikeApi";
import { setSelectedBike } from "../../redux/features/bike/bikeSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from 'react-router-dom';
import { TBikeInitialState } from "../../types/bike.types";

import yamaha from '../../assets/images/yamaha.jpg';
import honda from '../../assets/images/honda.jpg';
import suzuki from '../../assets/images/suzuki.jpg';
import tvs from '../../assets/images/tvs.jpg';
import hero from '../../assets/images/hero.jpg';


const AllBikes = () => {
  const dispatch = useAppDispatch();
  const { data: allBikes, isLoading } = useGetAllBikeQuery("");
  console.log(isLoading)
  
  const images = [yamaha, honda, suzuki, tvs, hero];

  const bikesWithImages = allBikes?.data?.map((bike: TBikeInitialState, index: number) => ({
    ...bike,
    image: images[index % images.length],
  }));

  const handleViewDetail = (bike: TBikeInitialState) => {
    dispatch(setSelectedBike(bike));
  };

  return (
    <div className="my-10">
      <h1 className="font-bold text-center py-6 text-4xl">Available Bikes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bikesWithImages?.map((bike: TBikeInitialState) => (
          <div key={bike._id} className="bg-gray-100 shadow-2xl rounded p-6 w-auto h-auto">
            <img 
              src={bike.image} 
              alt={bike.brand} 
              className="w-full h-32 object-cover mb-4" 
            />
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




