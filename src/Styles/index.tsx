import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  :root{
    --color-primary: #061121;

    --color-gray: #D9D9D9;
    --color-white: #FFFFFF;
    --color-black: #000000;
    
    --color-sucess: #168821;
    --color-warning: #ffcf07;
    --color-negative: #e60000;
    --color-information: #155bcb;
  }
`