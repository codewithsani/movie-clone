import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import "../index.css";

const NavBar = () => {
  return (
    <HStack padding="20px" className="navbar-layout">
      <Link to="/">
        <Image src={logo} boxSize="70px" />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
