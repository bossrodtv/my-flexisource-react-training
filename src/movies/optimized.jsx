// OptimizedMovieApp.js
import React, { memo, useCallback, useMemo, useState } from "react";

const calculateMovieScore = (rating, reviews) => {
  console.log("🔄 Calculating movie score...");
  for (let i = 0; i < 1000000000; i++) {}
  return (rating * reviews) / 10;
};

// Memoized Movie component
const Movie = memo(({ title, rating, onLike }) => {
  console.log("🎬 Rendering Movie:", title);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>Rating: {rating}⭐</p>
      <button onClick={onLike}>Like 👍</button>
    </div>
  );
});

const OptimizedMovieApp = () => {
  const [count, setCount] = useState(0);
  const [movies] = useState([
    { id: 1, title: "The Matrix", rating: 4.8, reviews: 100 },
    { id: 2, title: "Inception", rating: 4.5, reviews: 80 },
  ]);

  // Memoized callback
  const handleLike = useCallback((movieId) => {
    console.log("👍 Liked movie:", movieId);
  }, []); // Empty dependencies since it doesn't use any external values

  // Memoized expensive calculation
  const movieScore = useMemo(
    () => calculateMovieScore(movies[0].rating, movies[0].reviews),
    [movies] // Only recalculate if movies change
  );

  return (
    <div>
      <h1>Optimized Movie App</h1>

      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <p>Movie Score: {movieScore}</p>

      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          rating={movie.rating}
          onLike={() => handleLike(movie.id)}
        />
      ))}
    </div>
  );
};

export default OptimizedMovieApp;
