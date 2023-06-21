import { SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import DefinitionItem from "./DefinitionItem";
const MovieAttributes = () => {
  const { id } = useParams();
  const { data: movie } = useMovie(id!);

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} as="dl">
      <DefinitionItem term="Release Date">
        <Text>{movie?.release_date}</Text>
      </DefinitionItem>
      <DefinitionItem term="Orginal Language">
        <Text>{movie?.original_language}</Text>
      </DefinitionItem>

      <DefinitionItem term="popularity">
        <Text>{movie?.popularity.toFixed(1)}</Text>
      </DefinitionItem>
      <DefinitionItem term="Vote Average">
        <Text>{movie?.vote_average.toFixed(1)}</Text>
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {movie?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="companies">
        {movie?.production_companies?.map((company) => (
          <Text key={company.id}>
            {company.name} {company.origin_country}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default MovieAttributes;
