import { Movie } from "../Movie/Movie";
import "./Movies.css";

export const Movies = ({ data }: { data: IMovie[] }) => {
  return (
    <div className="movies">
      {data?.map((movie: any) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};
