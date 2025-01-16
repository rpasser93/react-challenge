'use client';

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  width: 100%;

  form {
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 12px;
    height: 35px;
  }

  form:focus-within {
    outline: solid thin var(--secondary-blue);
  }

  input {
    width: 100%;
    padding: 8px 12px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 60px;
    padding-top: 3px;
    background-color: var(--primary-yellow);
    border: solid thin black;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: none;
    border-top: none;
    border-right: none;
    cursor: pointer;

    &:hover :first-child {
      transform: scale(1.05);
    }
  }
`;
