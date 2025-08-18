import { apiSlice } from "./apiSlice";
const USER_URL = "/api/v1/users";
const AUTH_URL = "/api/v1/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/logout`,
        method: "DELETE",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    currentUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useCurrentUserMutation,
} = userApiSlice;
