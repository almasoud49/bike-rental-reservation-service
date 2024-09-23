import { baseApi } from "../../api/baseApi";


const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeam: builder.query({
      query: () => ({
        url: "/teams",
        method: "GET"
      }),
      providesTags: ["team"]
    }),
 
  })
});


export const {useGetAllTeamQuery} = teamApi