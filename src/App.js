import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import MovieSearchHomePage from './pages/MovieSearchHomePage/MovieSearchHomePage';
import PopularMoviesPage from './pages/Movies/PopularMoviesPage/PopularMoviesPage'
import CardMoviePage from './pages/Movies/CardMoviePage/CardMoviePage';
import CardTVShowPage from './pages/TVShows/CardTVShowPage/CardTVShowPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MovieSearchHomePage />} />
            <Route path="/popular-movies" element={<PopularMoviesPage />} />
            <Route path="/card-movie/:id" element={<CardMoviePage />} />
            <Route path="/card-tv-show/:id" element={<CardTVShowPage />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
