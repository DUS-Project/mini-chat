import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    min-width: 360px;
    height: 100vh;
    letter-spacing: -0.05rem;
    background-color: #F1F2F9;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: auto;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  button {
    outline: none;
    cursor: pointer;
    background: none;
  }

  input {
    outline: none;
  }
`;
