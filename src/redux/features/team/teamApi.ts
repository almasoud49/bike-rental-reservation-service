import { baseApi } from "../../api/baseApi";


const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeam: builder.query({
      query: () => ({
        url: "/teams",
        method: "GET"
      }),
      providesTags: ["teams"]
    }),
 
  })
});


export const {useGetAllTeamQuery} = teamApi