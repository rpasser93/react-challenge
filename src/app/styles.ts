'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 60px 30px;
  align-items: center;

  .header {
    font-family: var(--font-syne);
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    color: var(--secondary-blue);
  }

  .subheader {
    text-align: center;
    margin-bottom: 30px;
  }
`;
