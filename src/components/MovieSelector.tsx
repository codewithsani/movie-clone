import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const MovieSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Movies
      </MenuButton>
      <MenuList>
        <MenuItem>Now Playing</MenuItem>
        <MenuItem>Popular</MenuItem>
        <MenuItem>Top Rated</MenuItem>
        <MenuItem>Upcoming</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MovieSelector;
