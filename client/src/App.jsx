import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tvseries from "./pages/TV_Shows";
import Trending from "./pages/Trending";
import Login from "./pages/login";
import MovieDetails from "./pages/movieDetails";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<Tvseries />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;