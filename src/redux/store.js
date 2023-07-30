import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './movies/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export default store;
