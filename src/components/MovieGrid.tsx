import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Genre } from "../hooks/useGenres";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";

interface Props {
  selectedGenre: Genre | null;
}

const MovieGrid = ({ selectedGenre }: Props) => {
  const { data, fetchNextPage, hasNextPage } = useMovies(selectedGenre);
  const fetchedMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding="10px">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <MovieCardContainer key={movie.id}>
                <MovieCard movie={movie} />
              </MovieCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default MovieGrid;
