'use client';

import Link from 'next/link';
import { MovieListResult } from '@/models/movieList';
import { FC } from 'react';
import { Container, MovieCard, Poster, DetailsRow } from './styles';
import { getRoundedRating } from '@/helpers/getRoundedRating';
import { getReleaseYear } from '@/helpers/getReleaseYear';
import { formatNumber } from '@/helpers/formatNumber';
import { FaStar } from 'react-icons/fa';
import { getPosterImageUrl } from '@/helpers/getPosterImageUrl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  movieListData: MovieListResult[];
}

export const MovieCardList: FC<Props> = ({ movieListData }) => {
  const router = useRouter();

  const handleMovieClick = (id: number) => {
    router.push(`movie/${id}`);
  };

  const renderMovies = () => {
    return movieListData.map((movie: MovieListResult, index) => {
      const posterImageUrl: string = getPosterImageUrl(movie.poster_path);
      const roundedRating: string = getRoundedRating(movie.vote_average);
      const releaseYear: string = getReleaseYear(movie.release_date);
      const formattedVoteCount: string = formatNumber(movie.vote_count);

      return (
        <MovieCard key={index}>
          <Poster onClick={() => handleMovieClick(movie.id)}>
            <Image src={posterImageUrl} width={198} height={273} alt='poster' />
          </Poster>
          <div
            className='movie-title'
            onClick={() => handleMovieClick(movie.id)}
          >
            {movie.title}
          </div>
          <DetailsRow>
            <div className='release-year'>{releaseYear}</div>
            <FaStar color='var(--primary-yellow)' size={15} />
            <div className='rating'>{roundedRating}</div>
            <div className='vote-count'>{`(${formattedVoteCount})`}</div>
          </DetailsRow>
        </MovieCard>
      );
    });
  };

  return <Container>{renderMovies()}</Container>;
};
