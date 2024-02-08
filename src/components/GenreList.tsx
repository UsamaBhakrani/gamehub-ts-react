import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <ul>
      {data.map((g) => {
        return <li key={g.id}>{g.name}</li>;
      })}
    </ul>
  );
};

export default GenreList;
