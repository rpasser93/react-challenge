import { CgSpinner } from 'react-icons/cg';
import { Container } from './styles';

export const LoadingSpinner = () => {
  return (
    <Container>
      <CgSpinner size={40} />
    </Container>
  );
};
