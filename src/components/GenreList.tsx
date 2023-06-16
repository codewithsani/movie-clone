import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { movieGenres } = useGenres();
  return (
    <ul>
      {movieGenres.map((movieGenre) => (
        <li key={movieGenre.id}>{movieGenre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
