import { apiSlice } from "./apiSlice";
const BASE_URL = "/api/v1/gigs";

export const gigsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGigs: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/`,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useGetGigsMutation } = gigsApiSlice;
