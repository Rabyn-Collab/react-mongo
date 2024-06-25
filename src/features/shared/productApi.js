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
      }),
      providesTags: ['Product']
    }),

    getTopProducts: builder.query({
      query: () => ({
        url: '/top_products',
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    getProductById: builder.query({
      query: (query) => ({
        url: `/${query}`,
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/${query.id}`,
        body: query.body,
        method: 'PATCH',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/',
        body: query.body,
        method: 'POST',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),

    removeProduct: builder.mutation({
      query: (query) => ({
        url: `/${query.id}`,
        params: {
          imagePath: query.imagePath
        },
        method: 'DELETE',
        headers: {
          Authorization: query.token
        }
      }),
      invalidatesTags: ['Product']
    }),




  }),
});


export const { useGetProductsQuery, useGetProductByIdQuery, useGetTopProductsQuery, useAddProductMutation, useUpdateProductMutation, useRemoveProductMutation } = productApi;