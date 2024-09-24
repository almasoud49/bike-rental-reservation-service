import { useGetAllBikesQuery } from "../../redux/api/bikeApi";
import { TBike } from "../../types/bike.types";
import BNoData from "../ui/BNoData";
import BSpinner from "../ui/BSpinner";
import BikeCard from "./BikeCard";



const AllBikes = () => {
  const { data, isFetching } = useGetAllBikesQuery(undefined);
  
  return (
 
    <div className="lg:py-5 md:py-20 py-16">
      <h1 className="font-bold text-center py-6 text-4xl">Available Bikes</h1>
      <div>
      {isFetching ? (
            <BSpinner />
          ) : data?.data?.result?.length ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-5">
              {data?.data?.result                
                ?.map((item: TBike, idx: number) => (
                  <div key={idx}>
                    <BikeCard details={item} />
                  </div>
                ))}
            </div>
          ) : (
            <BNoData />
          )}
      </div>
    </div>
  );
};

export default AllBikes;




