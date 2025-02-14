import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: url(${Montserrat}) format(truetype);
}

html {
  display: flex;
  align-items: center;
}

  body {
    background-color: #302C42;
  }

   * {
    font-family: "Montserrat";
  }
  
  
  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`;
