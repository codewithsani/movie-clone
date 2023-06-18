import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";
import SearchMovieGrid from "./components/SearchMovieGrid";
import useMovieQueryStore from "./store";

function App() {
  const searchText = useMovieQueryStore((s) => s.movieQuery.searchText);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav " "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

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
}

export default App;
