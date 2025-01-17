'use client';

import { useQuery } from '@tanstack/react-query';
import { SearchPageContainer } from './styles';
import { getMoviesByTitle } from '@/api/getMoviesByTitle';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { usePathname } from 'next/navigation';
import { MovieCardList } from '@/components/MovieCardList';

export default function SearchPage() {
  const pathName: string = usePathname();
  const movieTitle: string = pathName
    .replace('/search/', '')
    .replaceAll('%20', ' ');

  const { data, isLoading, isFetching, isError } = useQuery({
    queryFn: async () => await getMoviesByTitle(movieTitle),
    queryKey: ['searchedMovies'],
  });

  if (isLoading || isFetching) return <LoadingSpinner />;
  if (isError) return <div>Error retrieving movies.</div>;
  if (!data) return null;

  return (
    <SearchPageContainer>
      <div className='header'>
        {`${data.length > 0 ? 'Top results' : 'No results found'} for`}{' '}
        <span>{`${movieTitle}`}</span>:
      </div>
      <MovieCardList movieListData={data} />
    </SearchPageContainer>
  );
}
