import { useState, useEffect, Suspense } from 'react';
import Heading from '../components/Heading/Heading';
import Searchbar from "../components/Searchbar/Searchbar";
import MoviesList from '../components/MoviesList/MoviesList';
import { getMovies } from '../services/themoviedb-api';

export function MoviesPage() {
  const [request, setRequest] = useState(null);
  const [movies, setMovies] = useState(null);

  const submitRequest = (keyword) => {
    setRequest(keyword);
  }

  useEffect(() => {
    getMovies(request).then(setMovies);
  }, [request]);

  return (
    <>
      <Heading title="Movies" />
      <Searchbar onSubmit={submitRequest} />
      {request && 
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList movies={movies} />
      </Suspense>}
    </>
    )
}