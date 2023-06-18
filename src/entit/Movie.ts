import { Genre } from "../hooks/useGenres";
import { ProductionCompanies } from "./ProductionCompanies";
import { ProductionCountries } from "./ProductionCountries";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  genres: Genre[];
  popularity: number;
  backdrop_path: string;
  poster_path: string;
  production_companies: ProductionCompanies[];
  productionCountries: ProductionCountries[];
  vote_average: number;
  original_language: string;
  release_date: string;
}
