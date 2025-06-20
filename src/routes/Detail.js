import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const getMovie = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(response.data.movie);
    setLoading(false);
    console.log(response.data.movie); // For debugging purposes
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
