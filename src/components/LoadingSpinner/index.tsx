import { ImSpinner8 } from 'react-icons/im';
import { LoadingSpinnerContainer } from './styles';

export const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <ImSpinner8 size={50} color='white' />
    </LoadingSpinnerContainer>
  );
};
