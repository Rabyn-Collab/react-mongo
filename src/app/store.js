import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/auth/userApi";
import { userSlice } from "../features/auth/userSlice";
import { productApi } from "../features/shared/productApi";
import { cartSlice } from "../features/carts/cartSlice";
import { orderApi } from "../features/orders/orderApi";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
    [orderApi.reducerPath]: orderApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      productApi.middleware,
      orderApi.middleware
    ]),

});



