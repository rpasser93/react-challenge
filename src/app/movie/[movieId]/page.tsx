'use client';

import {
  OverviewBox,
  MoviePageContainer,
  Poster,
  TopSection,
  Detail,
} from './styles';
import { useQuery } from '@tanstack/react-query';
import { getMovieById } from '@/api/getMovieById';
import { usePathname } from 'next/navigation';
import { Genre, ProductionCompany } from '@/models/movie';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { getPosterImageUrl } from '@/helpers/getPosterImageUrl';
import Image from 'next/image';
import { getRoundedRating } from '@/helpers/getRoundedRating';
import { getReleaseYear } from '@/helpers/getReleaseYear';
import { formatNumber } from '@/helpers/formatNumber';
import { FaStar } from 'react-icons/fa';
import { CastBox } from '@/components/CastBox';
import { ProductionBox } from '@/components/ProductionBox';

export default function MoviePage() {
  const pathName: string = usePathname();
  const movieId: string = pathName.replace('/movie/', '');

  const { data, isLoading, isFetching, isError } = useQuery({
    queryFn: async () => await getMovieById(movieId),
    queryKey: ['movie'],
  });

  if (isLoading || isFetching) return <LoadingSpinner />;
  if (isError) return <div>Error retrieving movie data.</div>;
  if (!data) return null;

  const posterImageUrl: string = getPosterImageUrl(data.poster_path);
  const backdropImageUrl: string = getPosterImageUrl(data.backdrop_path);
  const roundedRating: string = getRoundedRating(data.vote_average);
  const releaseYear: string = getReleaseYear(data.release_date);
  const formattedVoteCount: string = formatNumber(data.vote_count);

  return (
    <MoviePageContainer>
      <TopSection url={backdropImageUrl}>
        <Poster>
          <Image src={posterImageUrl} fill alt='poster' />
        </Poster>
        <OverviewBox>
          <Detail>
            {data.title} <span>({releaseYear})</span>
          </Detail>
          <Detail className='description'>{data.overview}</Detail>
          <Detail>{data.runtime} minutes</Detail>
          <Detail className='rating-row'>
            <FaStar color='var(--primary-yellow)' size={15} />
            <div className='rating'>{roundedRating}</div>
            <div className='vote-count'>({formattedVoteCount})</div>
          </Detail>
        </OverviewBox>
      </TopSection>
      <CastBox />
      <ProductionBox />
    </MoviePageContainer>
  );
}
