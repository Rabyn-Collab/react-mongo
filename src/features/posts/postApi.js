import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/constants';


export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({


    getUserPost: builder.query({
      query: (user) => ({
        url: '/posts',
        method: 'GET',
        params: {
          id: user.id
        }
      }),

    }),





  }),





});



export const { useGetUserPostQuery } = postApi;