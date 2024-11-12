import { apiSlice } from "./apiSlice";
const BASE_URL = "/api/v1/company";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCompany: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    updateCompany: builder.mutation({
      query: (data, companyId) => ({
        url: `${BASE_URL}/${data.id}`,
        method: "PATCH",
      }),
    }),
    deleteCompany: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/${data.id}`,
        method: "DELETE",
        body: data,
      }),
    }),
    getCompany: builder.mutation({
      query: (id) => ({
        url: `${BASE_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
  useGetCompanyUserMutation,
} = userApiSlice;
