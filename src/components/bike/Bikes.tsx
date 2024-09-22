import { useGetAllBikesQuery } from "../../redux/api/bikeApi";
import { TBike } from "../../types/bike.types";
import BNoData from "../ui/BNoData";
import BSpinner from "../ui/BSpinner";
import BikeCard from "./BikeCard";



const Bikes = () => {
  const { data, isFetching } = useGetAllBikesQuery(undefined);
  console.log(data?.data?.result)

  return (
    // <div className="my-10">
    //   <h1 className="font-bold text-center py-6 text-4xl">Available Bikes</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {bikesWithImages?.map((bike: TBike) => (
    //       <div key={bike._id} className="bg-gray-100 shadow-2xl rounded p-6 w-auto h-auto">
    //         <img 
    //           src={bike.image} 
    //           alt={bike.brand} 
    //           className="w-full h-32 object-cover mb-4" 
    //         />
    //         <div className="card-body">
    //           <h2 className="card-title text-black">{bike.brand}</h2>
    //           <p className="text-black">{bike.cc}</p>
    //           <div className="card-actions">
    //             <Link to={`/bike-details/${bike._id}`}>
    //               <button
    //                 className="btn bg-custom-teal text-xl mx-auto my-auto"
    //                 onClick={() => handleViewDetail(bike)}
    //               >
    //                 View Detail
    //               </button>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    
    //2//
    <div className="lg:py-24 md:py-20 py-16">
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

export default Bikes;




