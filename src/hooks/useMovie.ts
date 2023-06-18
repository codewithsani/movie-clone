import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useMovie = (id: number | string) =>
  useQuery({
    queryKey: ["movie", id],
    queryFn: () => apiClient.get("movie" + "/" + id).then((res) => res.data),
  });

export default useMovie;
