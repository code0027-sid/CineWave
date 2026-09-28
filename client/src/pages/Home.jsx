import React, { useState } from "react";
import MovieCard from "../component.jsx/movieCArd";
import Hero from "../component.jsx/hero";
import movies from "../Data/movies";

function Home() {
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("All");



    const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesGenre =
            genre === "All" || movie.genre === genre;

        return matchesSearch && matchesGenre;
    });

    return (
        <>
            <Hero movie={movies[0]} />
            <div className="search">

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter movie/series name"
                />

                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={{ padding: "10px" }}
                >
                    <option value="All">All</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select>

            </div>

            <div style={{ padding: "20px" }}>
                <div className="movies-grid">

                    {filteredMovies.length === 0 ? (
                        <p>Movie not found</p>
                    ) : (
                        filteredMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                title={movie.title}
                                language={movie.language}
                                year={movie.year}
                                rating={movie.rating}
                                posterUrl={movie.posterUrl}
                            />
                        ))
                    )}

                </div>

            </div>
        </>
    );
}

export default Home;