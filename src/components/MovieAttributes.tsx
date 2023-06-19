import { List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import DefinitionItem from "./DefinitionItem";
const MovieAttributes = () => {
  const { id } = useParams();
  const { data: movie } = useMovie(id!);

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} as="dl">
      <DefinitionItem term="Movie Data">
        <List>
          <ListItem>Release Date : {movie?.release_date}</ListItem>
          <ListItem>Orginal Language : {movie?.original_language}</ListItem>
          <ListItem>popularity : {movie?.popularity.toFixed(1)}</ListItem>
          <ListItem> Vote Average : {movie?.vote_average.toFixed(1)}</ListItem>
        </List>
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
