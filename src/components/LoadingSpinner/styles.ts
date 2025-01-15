'use client';

import styled from 'styled-components';

export const Container = styled.div`
  svg {
    animation: rotate 1s ease infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
