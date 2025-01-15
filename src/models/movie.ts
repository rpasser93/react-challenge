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
  production_companies: ProductionCompany[];
  credits: Credits;
}

export interface Genre {
  name: string;
}

export interface ProductionCompany {
  name: string;
  logo_path: string;
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

interface CrewMember {
  name: string;
  job: string;
  profile_path: string;
}
