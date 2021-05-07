import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies } from "../../actions/movie";
import { Movies } from "../../components";
import "./Home.css";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const { movies, loading, message } = useSelector(
    (state: { movies: any }) => state.movies
  );

  const _searchMovies = () => {
    dispatch(searchMovies(searchTerm));
  };

  return (
    <div className="home">
      <h1 style={{ fontWeight: "bold" }}>Movies</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(event) => (event.key === "Enter" ? _searchMovies() : null)}
      />
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : message ? (
        <h2>{message}</h2>
      ) : (
        <Movies data={movies} />
      )}
    </div>
  );
};
