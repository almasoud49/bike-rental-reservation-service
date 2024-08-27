import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBike: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET"
      }),
      providesTags: ["bikes"]
    }),
    getSingleBike : builder.query({
      query: (id: string)=> ({
        url:`/bikes/${id}`,
        method:"GET"
      })
    })
  })
});


export const {useGetAllBikeQuery, useGetSingleBikeQuery} = bikeApi