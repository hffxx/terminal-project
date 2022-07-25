import * as styled from "styled-components";
import ClaconTTF from "../fonts/clacon2.ttf";
import { ITheme } from "../theme/styled";

export default styled.createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: "Clacon";
    src: url(${ClaconTTF}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  * {
    box-sizing: border-box;
    font-family: Clacon;
  }
  body {
    margin: 0;
    background: black;
    color: green;
    overflow: hidden;
  }
  code {
    font-family: source-code-pro;
  }
  .app {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: ${(props) => props.theme.sizes.contentWidth};
    margin: 0 auto;
  }
  button {
    background: none repeat scroll 0 0 transparent;
    border: medium none;
    border-spacing: 0;
    font-size: 16px;
    font-weight: normal;
    list-style: none outside none;
    margin: 0;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
  }
  .test {
    border: 1px solid red;
    max-width: 1400px;
    width: 100%;
    height: 50%;
    margin-top: 20px;
    ${({ theme }) => theme.sizes.mediaQueries.tablet} {
      height: 60%;
    }
  }
`;
