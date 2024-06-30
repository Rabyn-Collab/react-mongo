import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { orderUrl } from '../../constants/constants';


export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: orderUrl
  }),


  endpoints: (builder) => ({



    getOrderById: builder.query({
      query: (query) => ({
        url: `/${query.id}`,
        method: 'GET',
        headers: {
          Authorization: query.token
        }
      }),
      providesTags: ['Order']
    }),

    getOrders: builder.query({
      query: (query) => {

        return {
          url: query?.isAdmin ? '/' : '/user',
          method: 'GET',
          headers: {
            Authorization: query.token
          }
        };
      },
      providesTags: ['Order']
    }),

    addOrder: builder.mutation({
      query: (query) => ({
        url: '/',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Order']
    }),


  }),
});


export const { useAddOrderMutation, useGetAllOrdersQuery, useGetOrderByIdQuery, useGetOrdersQuery } = orderApi;