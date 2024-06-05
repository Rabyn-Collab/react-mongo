import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../../hooks/localStorage";




export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal()
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      setUserToLocal(state.users);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user);
      setUserToLocal(state.users);

    },
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
    }
  }
});

export const { addUser, updateUser, removeUser } = userSlice.actions;