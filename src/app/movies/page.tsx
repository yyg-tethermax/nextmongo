// find movies from mongodb
import Movies from "@/views/movies/movies";

const MoviesPage = async () => {
  return (
    <div>
      <h1>MoviesPage</h1>
      <Movies />
    </div>
  );
};

export default MoviesPage;
