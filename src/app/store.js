import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../features/movies/movieSlice";
import { userSlice } from "../features/users/useSlice";




export const store = configureStore({
  reducer: {
    [movieSlice.name]: movieSlice.reducer,
    [userSlice.name]: userSlice.reducer
  }
});

// store.dispatch({
//   type: 'movieSlice/addMovies',
//   payload: { n: 90 }
// });
// console.log(store.getState());
