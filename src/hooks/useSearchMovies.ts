import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import useMovieQueryStore from "../store";
import { FetchMovieResponse } from "./useMovies";

const useSearchMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);
  return useInfiniteQuery({
    queryKey: ["search/movie", movieQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchMovieResponse>("search/movie", {
          params: {
            page: pageParam,
            query: movieQuery.searchText,
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
