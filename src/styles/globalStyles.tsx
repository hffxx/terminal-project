import * as styled from "styled-components";
import ClaconTTF from "fonts/clacon2.ttf";
import { ITheme } from "theme/styled";

export default styled.createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: "Clacon";
    src: url(${ClaconTTF}) format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    font-smooth: auto;
  }
  * {
    box-sizing: border-box;
    font-family: Clacon;
    margin: 0;
  }
  body {
    background: black;
    color: green;
    overflow: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #000000;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #000000;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bdc0bf;
  }
  code {
    font-family: source-code-pro;
  }
  a {
    color: #00b300;
  }
  .app {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: ${({ theme }) => theme.sizes.contentWidth};
    margin: 0 auto;
  }
  button {
    background: none repeat scroll 0 0 transparent;
    border: medium none;
    border-spacing: 0;
    font-weight: normal;
    list-style: none outside none;
    margin: 0;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
  }
`;
