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

  .description {
    max-width: 400px;
  }

  .rating-row {
    display: flex;
    flex-direction: row;
  }
`;

export const Poster = styled.div`
  width: 250px;
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
`;

export const Detail = styled.div`
  width: max-content;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 4px;
`;
