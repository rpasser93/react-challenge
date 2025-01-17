'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  justify-items: center;
  align-items: flex-start;
  width: 100%;

  @media only screen and (max-width: 905px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  padding: 5px;

  .movie-title {
    font-weight: 700;
    margin-top: 8px;
    cursor: pointer;

    &:hover {
      transform: scale(1.025);
    }
  }
`;

export const Poster = styled.div`
  width: 200px;
  height: 275px;
  cursor: pointer;
  border: solid thin white;
  border-radius: 12px;

  &:hover {
    transform: scale(1.05);
  }

  > *:first-child {
    border-radius: 12px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;

  .release-year {
    margin-right: 20px;
  }

  .rating {
    margin-left: 3px;
    margin-right: 4px;
  }

  .vote-count {
    font-size: 14px;
    color: var(--secondary-blue);
  }
`;
