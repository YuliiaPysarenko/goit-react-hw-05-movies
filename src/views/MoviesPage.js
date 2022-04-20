import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Heading from '../components/Heading/Heading';
import Searchbar from '../components/Searchbar/Searchbar';
import MoviesList from '../components/MoviesList/MoviesList';
import { getMovies } from '../services/themoviedb-api';

export function MoviesPage() {
  let [request, setRequest] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState(null);

  const submitRequest = keyword => {
    setRequest(keyword);
  };

  useEffect(() => {
    const queryValue = searchParams.get("query");
    if (queryValue) {
      setRequest(queryValue);
    }
  }, [searchParams]);

  useEffect(() => {
    if (request) {
      setSearchParams({ query: request });
      getMovies(request).then(setMovies);
    }
  }, [request, setSearchParams]);

  return (
    <>
      <Heading title="Movies" />
      <Searchbar onSubmit={submitRequest} />
      {movies && (
        <Suspense fallback={<div>Loading...</div>}>
          {movies.length > 0 ? (
            <MoviesList movies={movies} />
          ) : (
            <div className="notFound__notification">
              <p className="notFound__text">
                Unfortunately, we didn't find anything.
                <br /> Try again by entering similar words
              </p>
            </div>
          )}
        </Suspense>
      )}
    </>
  );
}
