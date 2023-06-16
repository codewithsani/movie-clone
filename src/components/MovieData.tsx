import { HStack, Text } from "@chakra-ui/react";

interface Props {
  original_language: string;
  release_date: string;
}

const MovieData = ({ original_language, release_date }: Props) => {
  return (
    <HStack>
      <Text>{original_language}</Text>
      <Text>{release_date}</Text>
    </HStack>
  );
};

export default MovieData;
