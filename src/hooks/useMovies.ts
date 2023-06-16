import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  original_language: string;
  release_date: string;
}

const useMovies = () => {
  useData<Movie>("/popular");
};
export default useMovies;
