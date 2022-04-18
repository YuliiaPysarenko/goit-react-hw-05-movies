import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'd01b93f6037a4d1c509361675c1b2760';

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?page=1&api_key=${API_KEY}`);
  return results;
};

export const getMovies = async query => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
  );
  return results;
};

export const getMovieDetails = async movieId => {
  const { data: results } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}`
  );
  return results;
};

export const getCast = async movieId => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return cast;
};

export const getReviews = async movieId => {
  const {
    data: { results },
  } = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return results;
};
