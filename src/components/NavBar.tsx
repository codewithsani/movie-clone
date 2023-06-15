import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Item1</Text>
      <Text>Item2</Text>
      <Text>Item3</Text>
      <Text>Item4</Text>
    </HStack>
  );
};

export default NavBar;
