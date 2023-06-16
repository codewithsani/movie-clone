import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  original_language: string;
  release_date: string;
}
interface FetchResponse {
  page: number;
  results: Movie[];
}
const useMovies = (endpoint: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse>(endpoint, { signal: controller.signal })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { movies, error, isLoading };
};

export default useMovies;
