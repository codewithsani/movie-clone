import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import useMovieQueryStore from "../store";

const GenreList = () => {
  const { data } = useGenres();
  const setSelectedGenreId = useMovieQueryStore((s) => s.setGenreId);
  const selectedGenreId = useMovieQueryStore((s) => s.movieQuery.genreId);
  const selectedGenre = data?.genres.find((g) => g.id === selectedGenreId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Movie Genre"}
      </MenuButton>
      <MenuList>
        {data?.genres.map((movieGenre) => (
          <MenuItem
            onClick={() => setSelectedGenreId(movieGenre.id)}
            key={movieGenre.id}
          >
            {movieGenre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreList;
