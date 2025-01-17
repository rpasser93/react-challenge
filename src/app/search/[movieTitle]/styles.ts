'use client';

import styled from 'styled-components';

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 0px 30px 60px 30px;

  .header {
    font-size: 20px;
    margin-bottom: 30px;
    span {
      font-family: var(--font-syne);
      font-weight: 700;
      color: var(--secondary-blue);
    }
  }
`;
