import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genre, error, isLoading } = useGenres();

  return (
    <ul>
      {genre.map((g) => {
        return <li key={g.id}>{g.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
