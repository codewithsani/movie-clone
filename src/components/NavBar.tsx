import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useMovieQueryStore from "../store";

const NavBar = () => {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  return (
    <HStack padding="20px">
      {searchText ? (
        <Link to="/" onClick={() => location.reload()}>
          <Image src={logo} boxSize="70px" />
        </Link>
      ) : (
        <Link to="/">
          <Image src={logo} boxSize="70px" />
        </Link>
      )}

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
