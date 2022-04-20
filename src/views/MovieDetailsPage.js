import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/themoviedb-api';
import Heading from '../components/Heading/Heading';
import MoviePage from '../components/MoviePage/MoviePage';
import GoBackButton from 'components/Buttons/GoBackButton';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <GoBackButton />
          <Heading title={movie.original_title} />
          <MoviePage movie={movie} />
        </>
      )}
      <hr />
      <Outlet />
    </>
  );
}
