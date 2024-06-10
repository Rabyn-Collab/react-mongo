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
      providesTags: (res, err, user) => {
        return [{ type: 'UserPost', id: user.id }]
      }
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
      invalidatesTags: (res, err, user) => {
        return [{ type: 'UserPost', id: user.id }]
      }
    }),

    removePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (res, err, user) => {
        return [{ type: 'UserPost', id: res.userId }]
      }
    })



  }),





});



export const { useGetUserPostQuery, useAddPostMutation } = postApi;