import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocal, clearFromLocal, getUserFromLocal } from "../shared/localstorage";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      addUserToLocal(state.user);
    },
    userLogOut: (state, action) => {
      state.user = null;
      clearFromLocal();
    }
  }
});


export const { setUser, userLogOut } = userSlice.actions;