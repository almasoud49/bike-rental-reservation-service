import { TBike } from "../../types/bike.types";


import { useGetAllBikesQuery } from "../../redux/api/bikeApi";
// import ProductCard from "../ui/ProductCard";


const AllBikes = () => {
  // const dispatch = useAppDispatch();
  const { data } = useGetAllBikesQuery("");
  console.log(data?.data)

  // const handleViewDetail = (bike: TBike) => {
  //   dispatch(setSelectedBike(bike));
  // };

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
      <div>
        {/* {
           data?.data?.result && (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-5">
              {data?.data?.result
                ?.slice(0, 6)
                ?.map((item: TBike, idx: number) => (
                  <div key={idx}> <ProductCard details={item}/></div>
                ))}
            </div>
           )} */}
      </div>
    </div>
  );
};

export default AllBikes;




