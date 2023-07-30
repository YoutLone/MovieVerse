import '../styles/Movie.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ Movie, backgroundColor }) {
  const navigate = useNavigate();

  const handleMovieDetails = () => {
    const movieId = Movie.id;
    navigate(`/MovieDetails/${movieId}`);
  };

  return (
    <div className="movie-item" style={{ backgroundColor }}>
      <button
        type="button"
        onClick={handleMovieDetails}
        aria-label="View more info"
        className="details-btn"
      >
        <BsArrowRightCircle />
      </button>
      <img className="movie-image" src={Movie.image.medium} alt="" />
      <h3 className="movie-name">{Movie.name}</h3>
      <h3 className="movie-rating">{Movie.rating.average}</h3>
    </div>
  );
}

Movie.propTypes = {
  Movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      average: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Movie;
