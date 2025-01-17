'use client';

import { Container } from './styles';
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
  if (!data) return <div>No movies retrieved.</div>;

  return (
    <Container>
      <div className='header'>What&#39;s Popular</div>
      <div className='subheader'>
        The hottest movies being watched right now.
      </div>
      <MovieCardList movieListData={data} />
    </Container>
  );
}
