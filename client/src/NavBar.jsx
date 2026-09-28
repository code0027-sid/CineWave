import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <div className="navbar">

                <span className="Channel">
                    <h2>CineWave</h2>
                </span>

                <span className="tags">

                    <Link to="/">
                        <h2>Home</h2>
                    </Link>

                    <Link to="/movies">
                        <h2>Movies</h2>
                    </Link>

                    <Link to="/tv-shows">
                        <h2>TV Shows</h2>
                    </Link>

                    <Link to="/trending">
                        <h2>Trending</h2>
                    </Link>

                </span>

            </div>
        </div>
    );
}

export default NavBar;