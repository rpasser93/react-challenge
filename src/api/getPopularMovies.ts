import { tmdbBaseUrl, tmdbOptions } from '@/constants/tmdbConstants';
import { MovieList } from '@/models/movieList';

export const getPopularMovies = async () => {
  const data: MovieList = await fetch(
    `${tmdbBaseUrl}/movie/popular`,
    tmdbOptions
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return data.results;
};
