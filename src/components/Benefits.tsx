import { useGetAllBenefitsQuery } from "../redux/features/benifit/benefitApi";
import { TBenefitData } from "../types/benefit.types";

const Benefits = () => {
  const { data: allBenefits, isLoading } = useGetAllBenefitsQuery("");

  console.log(allBenefits);
  console.log(isLoading);

  return (
    <div className="my-10">
      <h1 className="font-bold text-4xl text-center py-6 ">Why Choose Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {allBenefits?.data?.map((benefit: TBenefitData) => (
          <div key={benefit._id} className="bg-gray-100 rounded p-6 w-auto shadow-2xl h-60">
            <div className="card-body">
              <h2 className="text-black">{benefit.title}</h2>
              <p className="flex-grow text-black">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
