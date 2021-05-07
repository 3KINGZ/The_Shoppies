import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToNomination, removeFromNomination } from "../../actions";
import imgPlaceholder from "../../logo.svg";
import "./Movie.css";

export const Movie = ({ movie }: any) => {
  const { imdbID, Poster, Title, Year } = movie;
  const dispatch = useDispatch();

  const { nominations, nominationMap } = useSelector(
    (state: any) => state.nominations
  );

  useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(nominations));
    localStorage.setItem("nominationMap", JSON.stringify(nominationMap));
  });

  const _addToNomination = () => {
    dispatch(addToNomination(movie));
  };

  const _removeFromNomination = () => {
    dispatch(removeFromNomination(imdbID));
  };

  return (
    <div className="movie">
      {Poster ? (
        <img src={Poster} alt={Title} className="poster" width={200} />
      ) : (
        <img
          src={imgPlaceholder}
          alt="Placeholder"
          className="poster"
          width={200}
        />
      )}
      <p className="title-container">{Title}</p>
      <p>{Year}</p>
      {nominationMap?.[imdbID] ? (
        <button className="button" onClick={_removeFromNomination}>
          Nominated
        </button>
      ) : (
        <button className="button" onClick={_addToNomination}>
          Nominate!
        </button>
      )}
    </div>
  );
};
