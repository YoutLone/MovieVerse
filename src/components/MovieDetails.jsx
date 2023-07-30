import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const movies = useSelector((state) => state.movies.Movies);

  const movie = movies.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  const {
    name, rating, category, summary, image, official, language,
  } = movie;
  const Summary = summary
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '');

  return (
    <div className="movie-details">
      <Link className="back-button" to="/">
        <i className="fa-solid fa-arrow-left" />
        Back
      </Link>
      <div className="details-container">
        <div className="headings">
          <h2>{name}</h2>
          <div className="rating">
            <h3>
              Rating:
              {rating.average}
            </h3>
          </div>
        </div>
        <div className="movie-main">
          <img src={image.medium} alt="" />
          <div className="summary-section">
            <p className="summary">{Summary}</p>
            <div className="movie-categories">
              {category.map((categorys) => (
                <span key={categorys}>
                  <b>{categorys}</b>
                </span>
              ))}
            </div>
            <p className="lang">
              Language:
              {language}
            </p>
            <div className="official-website">
              <a href={official} target="_blank" rel="noreferrer">
                <p>Visit Official Website </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
