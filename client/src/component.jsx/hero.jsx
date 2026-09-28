import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Hero({ movie }) {
    if (!movie) return null;
    const [showVideo, setShowVideo] = useState(false);
    const handlePlay = () => {
        if (showVideo == true) {
            setShowVideo(false);
        }
        else {
            setShowVideo(true);
        }
    }
    return (

        <div className="hero-banner">
            <div className="hero-backdrop-container">
                <img
                    className="hero-backdrop"
                    src={movie.posterUrl}
                    alt={movie.title}
                />
                <div className="hero-vignette-left" />
                <div className="hero-vignette-bottom" />
            </div>

            <div className="hero-content">
                <div className="hero-meta">
                    <span className="hero-badge">SERIES</span>
                    <span className="hero-rating">★ {movie.rating}</span>
                    <span className="hero-year">{movie.year}</span>
                    <span className="hero-genre">{movie.genre}</span>
                </div>

                <h1 className="hero-title">{movie.title}</h1>

                <p className="hero-description">
                    Set in post-World War I Birmingham, Peaky Blinders follows Thomas Shelby and
                    his family as they build their criminal empire while facing rival gangs,
                    powerful enemies, and the pressures of ambition and loyalty.
                </p>

                <div className="hero-actions">
                    <button onClick={(event) => { handlePlay() }} className="hero-btn hero-btn-play">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                    </button>
                    <Link to={`/movie/${movie.id}`} className="hero-btn hero-btn-info">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                        More Info
                    </Link>

                </div>

                {showVideo && (
                    <div className="iframeAlign">
                        <button
                            className="close-video"
                            onClick={() => setShowVideo(false)}
                        >
                            ✕
                        </button>
                        <iframe
                            src="https://www.youtube.com/embed/lcvUGs3xaDM?autoplay=1"
                            title="Peaky Blinders Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                )}
            </div>
        </div >
    );
}

export default Hero;