import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (movieGenre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { movieGenres } = useGenres();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Movie Genres
      </MenuButton>
      <MenuList>
        {movieGenres.map((movieGenre) => (
          <MenuItem
            onClick={() => onSelectGenre(movieGenre)}
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
