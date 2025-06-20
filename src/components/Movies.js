import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movies({ id, mediumCoverImage, title, year, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title}({year})
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre} style={{ marginRight: '5px' }}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
