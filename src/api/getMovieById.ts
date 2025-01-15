import { tmdbBaseUrl, tmdbOptions } from '@/constants/tmdbConstants';
import { Movie } from '@/models/movie';

export const getMovieById = async (movieId: string) => {
  const data: Movie = await fetch(
    `${tmdbBaseUrl}/movie/${movieId}?append_to_response=credits`,
    tmdbOptions
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return data;
};
