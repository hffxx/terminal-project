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
  body {
    font-family: Clacon;
    margin: 0;
  }
  code {
    font-family: source-code-pro;
  }
  .app {
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    max-width: ${(props) => props.theme.sizes.contentWidth};
    margin: 0 auto;
    padding: 0 20px;
  }
`;
