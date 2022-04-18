import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import { Layout } from './Layout/Layout';
import { createAsyncView } from 'helpers';

const HomePage = createAsyncView('HomePage');
const MoviesPage = createAsyncView('MoviesPage');
const MovieDetailsPage = createAsyncView('MovieDetailsPage');
const CastSubpage = createAsyncView('CastSubpage');
const ReviewsSubpage = createAsyncView('ReviewsSubpage');
const NotFoundView = createAsyncView('NotFoundView');

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastSubpage />} />
            <Route path="reviews" element={<ReviewsSubpage />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </>
  );
};
