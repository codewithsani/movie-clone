import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchTrailer } from "../entities/Trailer";

const useTrailers = (movieId: number) =>
  useQuery({
    queryKey: [`movie/${movieId}/videos`, movieId],
    queryFn: () =>
      apiClient
        .get<FetchTrailer>(`movie/${movieId}/videos`)
        .then((res) => res.data),
  });

export default useTrailers;
