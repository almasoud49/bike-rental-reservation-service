import { useGetAllBikeQuery } from "../../redux/features/bike/bikeApi";
import { TBikeInitialState } from "../../types/bike.types";

const AllBikes = () => {
  const { data: allBikes, isLoading } = useGetAllBikeQuery("");
  console.log(allBikes);
  console.log(isLoading);
  return (
    <div className="my-10">
      <h1 className="font-bold text-4xl text-white">Available Bikes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {allBikes?.data?.map((bike: TBikeInitialState) => (
          <div className="bg-slate-100 shadow-xl w-auto h-60">
            <div className="card-body">
              <h2 className="card-title text-black">{bike.name}</h2>
              <p className="text-black">{bike.cc}</p>
              <div className="card-actions">
                <button className="btn btn-primary text-xl">View Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AllBikes;
