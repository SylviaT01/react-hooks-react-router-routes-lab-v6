import {Link} from 'react-router-dom';

function MovieCard({title, movieId}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${movieId}`}>View Movie</Link>
    </article>
  );
};

export default MovieCard;