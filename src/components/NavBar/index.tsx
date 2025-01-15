import Link from 'next/link';
import { Container, NavItem } from './styles';

export const NavBar = () => {
  return (
    <Container>
      <Link href={'/'}>
        <NavItem>MovieBuff HQ</NavItem>
      </Link>
      <Link href={'/search'}>
        <NavItem>Search</NavItem>
      </Link>
      <Link href={'/credits'}>
        <NavItem>Credits</NavItem>
      </Link>
    </Container>
  );
};
