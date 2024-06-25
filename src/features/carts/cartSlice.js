import { createSlice } from "@reduxjs/toolkit";
import { clearCartsFromLocal, setCartsToLocal } from "../shared/localstorage";






export const userSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },
  reducers: {
    setToCart: (state, action) => {
      const isExist = state.carts.find((cart) => cart.id === action.payload.id);
      if (isExist) {
        state.carts = state.carts.map((cart) => cart.id === action.payload.id ? action.payload : cart);
        setCartsToLocal(state.carts);
      } else {
        state.carts.push(action.payload);
        setCartsToLocal(state.carts);
      }

    },
    removeFromCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      setCartsToLocal([...state.carts]);
    },
    clearCart: (state, action) => {
      state.carts = [];
      clearCartsFromLocal();
    }
  }
});


export const { addUser, userLogOut } = userSlice.actions;