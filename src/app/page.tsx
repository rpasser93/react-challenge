import { Container } from './styles';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <div>Home Page</div>
      <Link href={'/details'}>Go To Details</Link>
    </Container>
  );
}
