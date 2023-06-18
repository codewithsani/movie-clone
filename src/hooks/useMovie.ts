import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Movie } from "../entities/Movie";

const useMovie = (id: number | string) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      apiClient.get<Movie>("movie" + "/" + id).then((res) => res.data),
  });

export default useMovie;
