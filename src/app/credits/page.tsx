import { Container } from './styles';
import Image from 'next/image';

export default function CreditsPage() {
  return (
    <Container>
      <Image src={'./tmdbLogo.svg'} width={100} height={100} alt='TMDB Logo' />
      <div>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </div>
    </Container>
  );
}
