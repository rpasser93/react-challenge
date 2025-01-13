import { Container } from './styles';
import Link from 'next/link';

export default function Details() {
  return (
    <Container>
      <div>Details Page!</div>
      <Link href={'/'}>Go To Home</Link>
    </Container>
  );
}
