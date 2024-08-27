import { baseApi } from "../../api/baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBike: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET"
      }),
      providesTags: ["bikes"]
    })
  })
});


export const {useGetAllBikeQuery} = bikeApi