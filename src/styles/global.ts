import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input, button {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;    
    border-radius: 10px;
    border: 0;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
  }
`;
