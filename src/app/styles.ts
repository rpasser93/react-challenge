'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 0px 30px;
`;

export const MovieCard = styled.div`
  border: solid thin var(--primary-yellow);
  padding: 5px;
  width: max-content;
  cursor: pointer;
`;
