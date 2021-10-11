import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    body {
        background-color: #f2f2f2;
        color: #32393A;
        margin: 0;
        padding: 0;
        font-family: 'Comfortaa', cursive;
        font-size: 14px;
    }
    input, button {
        font-family: 'Comfortaa', cursive;
    }
    button {
        cursor: pointer;
        border: none;
        padding: 12px 24px;
        border-radius: 24px;
        font-weight: 700;
        font-size: 14px;
        &:active {
            outline: none;
            opacity: .4;
        }
        &:focus-visible {
            outline: none;
        }
    }
    a {
        text-decoration: none;
        color: #9a6aff;
    }
    * {
        box-sizing: border-box;
    }
`

export default GlobalStyled