import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie]= useState({})
  const params = useParams()
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(response => response.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error));
  }, [movieId]);

  
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        {Object.keys(movie).length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1>{movie.title}</h1>
            <p>Duration: {movie.time} minutes</p>
            <div>
              Genres:
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Movie;
