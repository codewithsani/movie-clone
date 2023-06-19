interface Trailer {
  id: string;
  key: string;
}

export interface FetchTrailer {
  id: number;
  results: Trailer[];
}
