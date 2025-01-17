export interface MovieList {
  results: MovieListResult[];
}

export interface MovieListResult {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}
