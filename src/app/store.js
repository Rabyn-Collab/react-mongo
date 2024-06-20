import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/auth/userApi";
import { userSlice } from "../features/auth/userSlice";
import { productApi } from "../features/shared/productApi";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      productApi.middleware
    ]),

});



