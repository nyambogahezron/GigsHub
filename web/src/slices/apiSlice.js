import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: ' http://localhost:5000' });
// const baseQuery = fetchBaseQuery({ baseUrl: 'https://gigshub-api.onrender.com' });
// https://gigshub-api.onrender.com
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
