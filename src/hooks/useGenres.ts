import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  genres: Genre[];
}

const useGenres = () =>
  useQuery({
    queryKey: ["genre/movie/list"],
    queryFn: () =>
      apiClient
        .get<FetchGenreResponse>("genre/movie/list")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGenres;
