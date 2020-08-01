import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
`;

export const Card = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 30px;

    input {
      width: 250px;
      height: 50px;

      text-align: center;

      &::placeholder {
        color: #aaa;
      }
    }

    button {
      width: 250px;
      height: 50px;

      margin-top: 5px;

      border: none;
      border-radius: 6px;

      color: #fff;
      font-size: 24px;

      background-color: #0b8a2d;
      transition: background 0.2s;

      &:hover {
        background-color: ${darken(0.1, '#0b8a2d')};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
