import { SERVER_URL } from '@env'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



// Create an instance of the RTK Query API
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  endpoints: (builder) => ({
    getRecommendations: builder.query({
      query: (code) => `recommendations?code=${code}`,
    }),
    getRecentlyPlayed: builder.query({
      query: (code) => `recently-played?code=${code}`,
    }),
  }),
});

// Export hooks for using the defined endpoints
export const { useGetRecommendationsQuery, useGetRecentlyPlayedQuery } = apiSlice;
