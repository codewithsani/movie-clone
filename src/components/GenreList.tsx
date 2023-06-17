import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (movieGenre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Movie Genre"}
      </MenuButton>
      <MenuList>
        {data?.genres.map((movieGenre) => (
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
