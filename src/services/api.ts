import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Loja } from '../pages/Home'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Loja[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteId: builder.query<Loja, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteIdQuery } = api
