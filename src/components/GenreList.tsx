import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

const GenreList = () => {
  const { movieGenres } = useGenres();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Movie Genres
      </MenuButton>
      <MenuList>
        {movieGenres.map((movieGenre) => (
          <MenuItem key={movieGenre.id}>{movieGenre.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreList;
