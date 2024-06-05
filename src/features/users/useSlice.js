import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocal, getUserFromLocal } from "../../hooks/localStorage";




export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal()
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      addUserToLocal(state.users);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
    },
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
    }
  }
});

export const { addUser } = userSlice.actions;