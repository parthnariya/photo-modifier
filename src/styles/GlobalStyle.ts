import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      font-family: "Open Sans", sans-serif;
      font-size: 1.25vw;
      background-color: ${(props) => props.theme.background};
      overflow: hidden;
    }
    h1, h2, h3, h4, h5, h6 {
      color: ${(props) => props.theme.primary};
      margin: 0;
    }
    p {
      margin: 0;
    }
    
    button {
        cursor: pointer;
        background: 0;
        border: 0;
        padding: 0;
        &:focus {
          outline: none;
        }
    }
    svg {
      fill: ${(props) => props.theme.primary};
    }
`;
