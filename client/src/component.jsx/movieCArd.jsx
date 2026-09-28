export default function MovieCard({ title, language, year, rating, posterUrl }) {
    return (
        <div className="card" onClick={() => console.log(title)}
        >
            <span className="cardSpan">
                <img
                    src={posterUrl || "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=687&auto=format&fit=crop"}
                    alt={title || "Movie Poster"}
                />
                <p>title: <span>{title}</span></p>
                <p>language: <span>{language}</span></p>
                <p>year: <span>{year}</span></p>
                <p>rating: <span>{rating}</span></p>
            </span>
        </div >
    );
}
