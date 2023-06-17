import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieQuery } from "../App";
import apiClient from "../services/api-client";

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
const useMovies = (movieQuery: MovieQuery) =>
  useInfiniteQuery({
    queryKey: ["discover/movie", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchMovieResponse>("discover/movie", {
          params: {
            with_genres: movieQuery.movieGenre?.id,
            page: pageParam,
            sort_by: movieQuery.sortOrder,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.total_pages ? allPage.length + 1 : undefined;
    },

    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useMovies;
