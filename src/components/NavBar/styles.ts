'use client';

import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  align-items: center;
  padding: 12px 20px;
  border-bottom: solid thin var(--primary-yellow);
  background-color: var(--tertiary-gray);

  @media only screen and (max-width: 500px) {
    flex-wrap: wrap;

    > *:first-child {
      order: 1;
    }

    > *:nth-child(2) {
      order: 3;
    }

    > *:nth-child(3) {
      order: 2;
    }
  }
`;

export const NavItem = styled.div`
  height: 100%;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    transform: scale(1.025);
  }
`;
