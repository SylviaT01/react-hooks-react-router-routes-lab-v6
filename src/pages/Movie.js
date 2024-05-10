import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movies, setMovies] = useState({});
  const params = useParams();
  const movieId = params.id;
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((r) => r.json())
      .then((data) => {
        setMovies(data);
      });
  }, [movieId]);
  const genres = movies.genres
    ? movies.genres.map((genre) => <span key={genre}>{genre}</span>)
    : null;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time}</p>
        <p>{genres}</p>
      </main>
    </>
  );
}

export default Movie;