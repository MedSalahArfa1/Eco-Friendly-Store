import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../interfaces/Product';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (builder) => ({
        products: builder.query<Product[], void>({
            query: () => '/products',
        })
    })
})

export const { useProductsQuery } = productApi;