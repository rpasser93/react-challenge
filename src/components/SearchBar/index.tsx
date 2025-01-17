'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Container } from './styles';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  const [searchedMovieTitle, setSearchedMovieTitle] = useState('');
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchedMovieTitle) {
      return;
    }
    router.push(`/search/${searchedMovieTitle}`);
    setSearchedMovieTitle('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          name='movieSearchInput'
          placeholder='Search for a movie'
          onChange={(e) => setSearchedMovieTitle(e.target.value)}
          value={searchedMovieTitle || ''}
        />
        <button type='submit'>
          <FaSearch size={15} />
        </button>
      </form>
    </Container>
  );
};
