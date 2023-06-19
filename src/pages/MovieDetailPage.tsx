import {
  Heading,
  Spinner,
  Text,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import noImage from "../assets/no-image-placeholder.webp";
import DefinitionItem from "../components/DefinitionItem";
import MovieAttributes from "../components/MovieAttributes";
import MovieTrailer from "../components/MovieTrailer";
import useMovie from "../hooks/useMovie";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovie(id!);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  if (isLoading) return <Spinner />;
  if (error || !movie) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <GridItem>
        <Heading>{movie.title}</Heading>
        <Text>{movie.overview}</Text>

        <MovieAttributes />
      </GridItem>
      <GridItem>
        <MovieTrailer movieId={movie.id} />
        <DefinitionItem term="Movie Poster">
          {movie?.poster_path == null ? (
            <Image src={noImage} />
          ) : (
            <Image src={IMAGE_BASE_URL + movie.poster_path} />
          )}
        </DefinitionItem>
      </GridItem>
    </SimpleGrid>
  );
};

export default MovieDetailPage;
