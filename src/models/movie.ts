export interface Movie {
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  runtime: number;
  budget: number;
  revenue: number;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  credits: Credits;
}

export interface Genre {
  name: string;
}

interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

interface CastMember {
  name: string;
  character: string;
  profile_path: string;
}

export interface CrewMember {
  name: string;
  job: string;
}
