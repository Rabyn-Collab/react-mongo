import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: []
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
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