import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import { fetchAllMovies } from './redux/movies/movieSlice';
import NavBar from './components/NavBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <main className="main-container">
      <Routes>
        <Route exact path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
