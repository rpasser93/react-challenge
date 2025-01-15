'use client';

import { useQuery } from '@tanstack/react-query';
import { Container, MovieCard } from './styles';
import Link from 'next/link';
import { MovieListResult } from '@/models/movieList';
import { useState } from 'react';
import { getMoviesByTitle } from '@/api/getMoviesByTitle';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function SearchPage() {
  const [searchedMovie, setSearchedMovie] = useState('batman');

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMoviesByTitle(searchedMovie),
    queryKey: ['searchedMovies'],
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error retrieving movies.</div>;
  if (!data) return <div>No movies matching your search were found.</div>;

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
      <div>RESULTS</div>
      {renderMovies()}
    </Container>
  );
}
