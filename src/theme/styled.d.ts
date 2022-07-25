import "styled-components";

export interface IMediaQueries {
  mobileS: string;
  mobileM: string;
  tablet: string;
  laptopS: string;
  laptopM: string;
  laptopL: string;
  desktop: string;
  desktopL: string;
}

export default interface DefaultTheme {
  sizes: {
    contentWidth: string;
    mediaQueries: IMediaQueries;
  };
  colors: {};
}
