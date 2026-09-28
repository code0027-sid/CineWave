
import { useNavigate, useParams } from "react-router-dom";
import movies from "../Data/movies";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find((movie) => movie.id === Number(id));

    if (!movie) {
        return <h1>Movie not found</h1>;
    }

    return (
        <div className="movie-details">

            
            <button
                className="back-button"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            {/* Movie Poster */}
            <div className="movie-details-poster">
                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                />
            </div>

            {/* Movie Information */}
            <div className="movie-details-info">
                <h1>{movie.title}</h1>

                <div className="movie-details-meta">
                    <span>⭐ {movie.rating}</span>
                    <span>{movie.year}</span>
                    <span>{movie.genre}</span>
                    <span>{movie.language}</span>
                </div>

                <p>{movie.description}</p>
            </div>

        </div>
    );
}

export default MovieDetails;

