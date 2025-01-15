import { tmdbBaseUrl, tmdbOptions } from '@/constants/tmdbConstants';
import { MovieList } from '@/models/movieList';

export const getMoviesByTitle = async (title: string) => {
  const data: MovieList = await fetch(
    `${tmdbBaseUrl}/search/movie?query=${title}`,
    tmdbOptions
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return data.results;
};
