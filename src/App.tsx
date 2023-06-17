import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GenreList from "./components/GenreList";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import SortSelector from "./components/SortSelector";

export interface MovieQuery {
  genreId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

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
        <NavBar
          onSearch={(searchText) =>
            setMovieQuery({ ...movieQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginY={5}>
          <GenreList
            selectedGenreId={movieQuery.genreId}
            onSelectGenre={(movieGenre) =>
              setMovieQuery({ ...movieQuery, genreId: movieGenre.id })
            }
          />
          <SortSelector
            sortOrder={movieQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setMovieQuery({ ...movieQuery, sortOrder })
            }
          />
        </HStack>
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
