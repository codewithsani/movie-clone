import { useInfiniteQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";
import useMovieQueryStore from "../store";

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  original_language: string;
  release_date: string;
}
interface FetchMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}
const useSearchMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  useInfiniteQuery({
    queryKey: ["search/movie", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchMovieResponse>("search/movie", {
          params: {
            page: pageParam,
            query: movieQuery?.searchText,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.total_pages ? allPage.length + 1 : undefined;
    },

    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useSearchMovies;
