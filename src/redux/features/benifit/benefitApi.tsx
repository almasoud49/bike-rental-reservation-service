import { baseApi } from "../../api/baseApi";

const benefitApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
      getAllBenefits: builder.query({
        query:()=> ({
          url:"/benefits",
          method:"GET"
        })
      })
    })
  });


  export const {useGetAllBenefitsQuery} = benefitApi;
  