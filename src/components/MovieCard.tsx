import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import CriticScore from "./CriticScore";
import MovieData from "./MovieData";
import noImage from "../assets/no-image-placeholder.webp";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <Card>
      {movie.backdrop_path == null ? (
        <Image src={noImage} />
      ) : (
        <Image src={IMAGE_BASE_URL + movie.backdrop_path} />
      )}

      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <HStack justifyContent="space-between" paddingY={4}>
          <MovieData
            release_date={movie.release_date}
            original_language={movie.original_language}
          />
          <CriticScore score={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
