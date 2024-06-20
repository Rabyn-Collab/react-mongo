import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { productUrl } from '../../constants/constants';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: productUrl
  }),


  endpoints: (builder) => ({

    getProducts: builder.query({
      query: (query) => ({
        url: '/',
        method: 'GET'
      })
    }),

    getTopProducts: builder.query({
      query: () => ({
        url: '/top_products',
        method: 'GET'
      })
    }),

    getProductById: builder.query({
      query: (query) => ({
        url: `/${query}`,
        method: 'GET'
      })
    }),



  }),
});


export const { useGetProductsQuery, useGetProductByIdQuery, useGetTopProductsQuery } = productApi;