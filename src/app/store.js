import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../features/movies/movieSlice";




export const store = configureStore({
  reducer: {
    [movieSlice.name]: movieSlice.reducer
  }
});

