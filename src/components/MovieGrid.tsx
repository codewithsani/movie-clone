import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const fetchedMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="20px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
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
