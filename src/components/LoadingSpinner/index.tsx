import { ImSpinner8 } from 'react-icons/im';
import { Container } from './styles';

export const LoadingSpinner = () => {
  return (
    <Container>
      <ImSpinner8 size={50} color='white' />
    </Container>
  );
};
