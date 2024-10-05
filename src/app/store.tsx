import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/ProductApi";
import shopReducer from "../features/shopSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    shop: shopReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>