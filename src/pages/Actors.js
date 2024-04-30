import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Actors() {
  const [actors, setActors]= useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(response => response.json())
    .then(data =>setActors(data))
  }, [])
  return (
    <>
      <header>
      <Link to="/">Home</Link>
        {/* What component should go here? */}
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {actors.map(actor => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
