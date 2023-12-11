"use client";

import { useState } from "react";
import YouTube from "react-youtube";
import { fetchTrailer } from "../actions/movie";

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: number;
  };
};

type Props = {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
};

export const Row = ({ title, movies, isLargeRow }: Props) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [trailer, setTrailer] = useState<string>("");

  const opts: Options = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      const trailer = await fetchTrailer(movie.id);
      setTrailer(trailer);
    }
  };

  return (
    <div className="ml-5">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5">
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`object-contain w-full max-h-24 m-2 transition-transform
            ${isLargeRow && "max-h-60"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts} className="my-10 h-80" />}
    </div>
  );
};
