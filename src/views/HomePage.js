import { useState, useEffect, Suspense } from 'react';
import { getTrendingMovies } from '../services/themoviedb-api';
import Heading from '../components/Heading/Heading';
import MoviesList from '../components/MoviesList/MoviesList';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Heading title="Trending movies" />
      <MoviesList movies={movies} />
    </Suspense>
  );
}
