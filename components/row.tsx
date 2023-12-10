type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Props = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
};

export const Row = ({ title, movies, isLargeRow }: Props) => {
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div className="ml-5">
      <h2>{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5">
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`object-contain w-full max-h-24 m-2 transition-transform
            ${isLargeRow && "max-h-60"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
