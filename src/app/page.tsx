'use client';

import { PopularMoviesPageContainer } from './styles';
import { getPopularMovies } from '@/api/getPopularMovies';
import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { MovieCardList } from '@/components/MovieCardList';

export default function HomePage() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getPopularMovies(),
    queryKey: ['popularMovies'],
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error retrieving movies.</div>;
  if (!data) return null;

  return (
    <PopularMoviesPageContainer>
      <div className='header'>Today&#39;s Top 20</div>
      <div className='subheader'>
        The most popular movies being watched right now.
      </div>
      <MovieCardList movieListData={data} />
    </PopularMoviesPageContainer>
  );
}
