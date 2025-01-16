'use client';

import { Container, MovieCard } from './styles';
import { getPopularMovies } from '@/api/getPopularMovies';
import Link from 'next/link';
import { MovieListResult } from '@/models/movieList';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getPopularMovies(),
    queryKey: ['popularMovies'],
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error retrieving movies.</div>;
  if (!data) return <div>No movies retrieved.</div>;

  const renderMovies = () => {
    return data.map((movie: MovieListResult, index) => {
      return (
        <Link href={`movie/${movie.id}`} key={index}>
          <MovieCard>
            <div>{movie.title}</div>
            <div>{movie.poster_path}</div>
            <div>{movie.release_date}</div>
            <div>{movie.vote_average}</div>
            <div>{movie.vote_count}</div>
          </MovieCard>
        </Link>
      );
    });
  };

  return (
    <Container>
      <div>MOST POPULAR MOVIES</div>
      {renderMovies()}
    </Container>
  );
}
