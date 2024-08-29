import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: "/signup",
        method: "POST",
        body: signupData,
      }),
    }),

    login: builder.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
    }),
  })
});

export const { useLoginMutation, useSignupMutation } = authApi;

