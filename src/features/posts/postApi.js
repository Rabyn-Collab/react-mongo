import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constants/constants';
import { faker } from '@faker-js/faker';



export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({


    getUserPost: builder.query({
      query: (user) => ({
        url: '/posts',
        method: 'GET',
        params: {
          userId: user.id
        }
      }),

      providesTags: ['UserPost']


    }),

    addPost: builder.mutation({
      query: (user) => ({
        url: '/posts',
        body: {
          title: faker.music.songName(),
          userId: user.id
        },
        method: 'POST'
      }),
      invalidatesTags: ['UserPost']
    })



  }),





});



export const { useGetUserPostQuery, useAddPostMutation } = postApi;