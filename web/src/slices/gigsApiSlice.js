import { apiSlice } from './apiSlice';
const BASE_URL = '/api/v1/gigs';

export const gigsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGigs: builder.query({
      query: (params = {}) => {
        const url = new URL(`${BASE_URL}/`);
        Object.keys(params).forEach((key) =>
          url.searchParams.append(key, params[key])
        );
        return { url: url.toString() };
      },
    }),
    createGig: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetGigsQuery, useCreateGigMutation } = gigsApiSlice;
