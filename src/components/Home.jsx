import React, { useState } from 'react';
import '../styles/Home.css';
import { useSelector } from 'react-redux';
import Movie from './Movie';

function Home() {
  const categories = useSelector((state) => state.movies.categories);
  const allCategories = ['All', ...categories];
  const movies = useSelector((state) => state.movies.Movies);
  const [filteredCategory, setFilteredCategory] = useState('All');

  const filteredMovies = filteredCategory === 'All'
    ? movies
    : movies.filter((movie) => movie.category.includes(filteredCategory));

  const handleCategory = (event) => {
    setFilteredCategory(event.target.value);
  };

  return (
    <>
      <div className="movies">
        <h1>Movies List</h1>
        <div className="filter">
          <span>Categories</span>
          <select onChange={handleCategory}>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="movies-container">
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <Movie
              key={movie.id}
              Movie={movie}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
