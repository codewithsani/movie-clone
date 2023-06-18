import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import MovieGrid from "../components/MovieGrid";
import SearchMovieGrid from "../components/SearchMovieGrid";
import SortSelector from "../components/SortSelector";
import useMovieQueryStore from "../store";

const HomePage = () => {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      {searchText ? (
        <GridItem area="main">
          <SearchMovieGrid />
        </GridItem>
      ) : (
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginY={5}>
            <GenreList />
            <SortSelector />
          </HStack>
          <MovieGrid />
        </GridItem>
      )}
    </Grid>
  );
};

export default HomePage;
