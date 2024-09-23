import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["user","bike", "rental" ,"team"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-rental-reservation-system-backend-six.vercel.app/api",
    credentials: "include",
    mode: 'cors', 
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

            if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  
  endpoints: () => ({}),
});
