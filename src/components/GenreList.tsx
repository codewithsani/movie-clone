import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (movieGenre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data } = useGenres();
  const selectedGenre = data?.genres.find((g) => g.id === selectedGenreId);
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
