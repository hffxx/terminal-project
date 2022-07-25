import * as styled from "styled-components";
import ClaconTTF from "../fonts/clacon2.ttf";
export default styled.createGlobalStyle`
  @font-face {
    font-family: "Clacon";
    src: url(${ClaconTTF}) format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  body {
    font-family: Clacon;
    margin: 0;
    overflow: hidden;
  }
  code {
    font-family: source-code-pro;
  }
`;
