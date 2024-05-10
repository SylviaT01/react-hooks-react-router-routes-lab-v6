import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {data.map((items) => (
          <MovieCard key={items.id} title={items.title} id={items.id} />
        ))}
      </main>
    </>
  );
}

export default Home;