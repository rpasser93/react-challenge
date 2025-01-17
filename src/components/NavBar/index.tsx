import Link from 'next/link';
import { Container, NavItem } from './styles';
import Image from 'next/image';
import { SearchBar } from '../SearchBar';

export const NavBar = () => {
  return (
    <Container>
      <Link href='/'>
        <NavItem>
          <Image
            src='/appLogo.png'
            width={150}
            height={40}
            style={{ borderRadius: '8px' }}
            alt='MovieBuffHQ Logo'
          />
        </NavItem>
      </Link>
      <SearchBar />
      <Link href='/credits'>
        <NavItem>Credits</NavItem>
      </Link>
    </Container>
  );
};
