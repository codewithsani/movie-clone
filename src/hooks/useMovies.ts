import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";

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
const useMovies = (selectedGenre: Genre | null) =>
  useInfiniteQuery({
    queryKey: ["movies/popular", selectedGenre],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchMovieResponse>("movie/popular", {
          params: {
            genre_ids: selectedGenre?.id,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.total_pages ? allPage.length + 1 : undefined;
    },

    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useMovies;
