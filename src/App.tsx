import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginY={5}>
          <GenreList />
          <SortSelector />
        </HStack>
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
