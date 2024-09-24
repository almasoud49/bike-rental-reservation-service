import { baseApi } from "./baseApi";


const reviewApi = baseApi.injectEndpoints({
  endpoints:(builder) => ({
    getAllReviews: builder.query({
      query:()=> ({
        url:"/reviews",
        method:"GET"
      })
    })
  })
});

export const {useGetAllReviewsQuery} = reviewApi;