import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={IMAGE_BASE_URL + movie.backdrop_path} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
