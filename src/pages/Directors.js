import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/directors")
    .then(response => response.json())
    .then(data => setDirectors(data))
  }, [])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <Link to="/">Home</Link>
        <h1>Directors Page</h1>
      </header>
      <main>
        {/* Director info here! */}
        {directors.map(director => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movieTitle => (
                <li key={movieTitle}>{movieTitle}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
