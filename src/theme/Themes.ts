import DefaultTheme, { IMediaQueries } from "./styled";

const BREAKPOINTS: IMediaQueries = {
  mobileS: "@media only screen and (min-width: 361px)",
  mobileM: "@media only screen and (min-width: 415px)",
  tablet: "@media only screen and (min-width: 769px)",
  laptopS: "@media only screen and (min-width: 1025px)",
  laptopM: "@media only screen and (min-width: 1201px)",
  laptopL: "@media only screen and (min-width: 1367px)",
  desktop: "@media only screen and (min-width: 1681px)",
  desktopL: "@media only screen and (min-width: 1921px)",
};

export const Theme: DefaultTheme = {
  sizes: {
    contentWidth: "1920px",
    mediaQueries: BREAKPOINTS,
  },
  colors: {},
};
