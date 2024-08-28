import { useGetAllReviewsQuery } from "../redux/features/review/reviewApi";
import { TReviewData } from "../types/review.type";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";


const Reviews = () => {
    const {data: allReview ,isLoading} = useGetAllReviewsQuery("");
    console.log(allReview)
    console.log(isLoading)
    return (
    <div className="my-10">
      <h1 className="font-bold text-4xl text-white">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {allReview?.data?.map((review: TReviewData) => (
          <div key={review._id} className="bg-black rounded p-6 w-auto h-60">
            <div className="card-body">
            <FaQuoteLeft className="mr-2" />
                <span className="flex-grow">{review.description}</span>
                <FaQuoteRight className="ml-2" />
              <p className="text-black">{review.name}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Reviews;