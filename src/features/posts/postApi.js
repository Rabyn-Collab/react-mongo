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
          id: user.id
        }
      }),
      providesTags: (res, err, user) => {
        return [{ type: 'UserPost', id: user.id }];
      }

    }),

    addUserPost: builder.mutation({
      query: (user) => ({
        url: '/posts',
        method: 'POST',
        body: {
          userId: user.id,
          title: faker.music.songName()
        }
      }),
      invalidatesTags: (res, err, user) => {
        return [{ type: 'UserPost', id: user.id }];
      }
    }),





  }),

});



export const { useGetUserPostQuery, useAddUserPostMutation } = postApi;