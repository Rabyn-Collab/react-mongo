import { createSlice } from "@reduxjs/toolkit";








export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    movies: [
      {
        "Title": "Doctor Strange",
        "Year": "2016",
        "Runtime": "115 min",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
      },
      {
        "Title": "John Wick",
        "Year": "2014",
        "Runtime": "101 min",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
      }
    ]
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies.push(action.payload);
    }
  }
});


export const { addMovies } = movieSlice.actions;
