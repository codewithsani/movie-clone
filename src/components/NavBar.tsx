import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import MovieSelector from "./MovieSelector";
const NavBar = () => {
  return (
    <HStack justifyContent="space-Between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <MovieSelector />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
