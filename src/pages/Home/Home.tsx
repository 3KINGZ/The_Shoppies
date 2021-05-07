import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies } from "../../actions/movie";
import { Movies } from "../../components";
import loading from "../../assets/loading.svg";
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
        <img
          src="../../assets/loading.svg"
          style={{ height: "150px", width: "150px" }}
          alt="loading-spinner"
        />
      ) : message ? (
        <h2>{message}</h2>
      ) : (
        <Movies data={movies} />
      )}
    </div>
  );
};
