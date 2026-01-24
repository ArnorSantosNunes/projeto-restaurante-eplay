import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Loja } from '../pages/Home'

type Products = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Products[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood',
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<Loja[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteId: builder.query<Loja, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<{ orderId: string }, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantesQuery,
  useGetRestauranteIdQuery,
  usePurchaseMutation
} = api
