'use client';

import styled from 'styled-components';

export const MoviePageContainer = styled.div`
  padding: 0px 30px 60px 30px;
  width: 100%;
`;

export const TopSection = styled.div<{ url: string }>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  height: 400px;
  padding-top: 20px;
  padding-left: 20px;
`;

export const Poster = styled.div`
  min-width: 250px;
  height: 350px;
  position: relative;

  > *:first-child {
    border-radius: 12px;
  }
`;

export const OverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .movie-title {
    font-size: 24px;
    font-weight: 700;

    span {
      font-size: 16px;
      font-weight: 400;
      color: var(--secondary-blue);
    }
  }

  .runtime-rating-row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .rating-row {
    display: flex;
    flex-direction: row;
    align-items: center;

    .rating {
      margin-left: 3px;
      margin-right: 4px;
    }

    .vote-count {
      font-size: 14px;
      color: var(--secondary-blue);
    }
  }

  .description {
    max-width: 750px;
    width: 100%;
  }

  .directors-row,
  .writers-row {
    span {
      color: var(--secondary-blue);
    }
  }
`;

export const Detail = styled.div`
  width: max-content;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 8px;
`;
