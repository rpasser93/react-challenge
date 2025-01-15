'use client';

import Link from 'next/link';
import { Container } from './styles';
import { useQuery } from '@tanstack/react-query';
import { getMovieById } from '@/api/getMovieById';
import { usePathname } from 'next/navigation';
import { Genre, ProductionCompany } from '@/models/movie';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function MoviePage() {
  const pathName: string = usePathname();
  const movieId: string = pathName.replace('/movie/', '');

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovieById(movieId),
    queryKey: ['movie'],
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error retrieving movie data.</div>;
  if (!data) return <div>No movie data retrieved.</div>;

  const renderGenres = () => {
    return data.genres.map((genre: Genre, index) => {
      return <div key={index}>{genre.name}</div>;
    });
  };

  const renderProductionCompanies = () => {
    return data.production_companies.map(
      (company: ProductionCompany, index) => {
        return (
          <div key={index}>
            <div>{company.name}</div>
            <div>{company.logo_path}</div>
          </div>
        );
      }
    );
  };

  const renderCredits = () => {
    return (
      <div>
        <div>{`${data.credits.cast[0].name} - ${data.credits.cast[0].character} - ${data.credits.cast[0].profile_path}`}</div>
        <div>{`${data.credits.crew[0].name} - ${data.credits.crew[0].job} - ${data.credits.cast[0].profile_path}`}</div>
      </div>
    );
  };

  const renderMovieDetails = () => {
    return (
      <div>
        <div>{data.title}</div>
        <div>{data.poster_path}</div>
        <div>{data.backdrop_path}</div>
        <div>{data.budget}</div>
        {renderCredits()}
        <div>{data.overview}</div>
        {renderProductionCompanies()}
        {renderGenres()}
        <div>{data.release_date}</div>
        <div>{data.revenue}</div>
        <div>{data.runtime}</div>
        <div>{data.vote_average}</div>
        <div>{data.vote_count}</div>
      </div>
    );
  };

  return (
    <Container>
      {renderMovieDetails()}
      <Link href={'/'}>Go To Home</Link>
    </Container>
  );
}
