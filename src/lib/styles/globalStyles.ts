import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #fff;
        color: #666666;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        line-height: 1.80857;
        font-weight: normal;
    }
`;

export const theme = {
  colors: {
    primary: "#fafafa",
  },
};
