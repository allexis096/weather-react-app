import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import logoImg from '../../assets/sunny.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  height: 100vh;
`;

const fromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-320px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;

  animation: ${fromLeft} 2s;

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
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const fromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(320px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Card = styled.div`
  background: url(${logoImg});
  background-size: 300px 500px;
  width: 300px;
  height: 500px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  animation: ${fromRight} 2s;

  h2 {
    font-size: 30px;
    margin-top: 6px;
    -webkit-text-stroke: 1px black;
  }

  > p {
    font-size: 14px;
    margin-top: 6px;
    -webkit-text-stroke: 0.1px #000;
    color: #000;
  }
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    margin-top: 40px;
    font-size: 70px;
    -webkit-text-stroke: 1px black;
  }

  > p {
    margin-top: 15px;
    font-size: 26px;
    color: #000;
  }
`;
