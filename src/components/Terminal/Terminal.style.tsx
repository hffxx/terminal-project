import styled, { keyframes } from "styled-components";

export const TerminalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 950px;
  width: 100%;
  height: 50%;
  padding: 20px 20px 0;
  ${({ theme }) => theme.sizes.mediaQueries.desktopL} {
    max-width: 1250px;
  } ;
`;
export const TerminalBackground = styled.div`
  padding: 1px;
  width: 100%;
  height: 100%;
  background: darkgray;
  display: flex;
  flex-direction: column;
`;
export const TerminalTopbar = styled.div`
  background: #000180;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  color: white;
  margin-bottom: 1px;
`;
export const TerminalButton = styled.button<{ padding?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f9faff;
  background: #bdc0bf;
  font-size: 16px;
  cursor: pointer;
  padding: ${({ padding }) => (padding ? padding : "0")};
`;
export const TerminalBody = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const dots = keyframes`
0% {
  color: rgba(0,0,0,0)
}
20% {
  color: green;
  text-shadow:
    .25em 0 0 rgba(0,0,0,0),
    .5em 0 0 rgba(0,0,0,0);}
40% {
  color: green;
  text-shadow:
    .25em 0 0 rgba(0,0,0,0),
    .5em 0 0 rgba(0,0,0,0);}
60% {
  text-shadow:
    .25em 0 0 green,
    .5em 0 0 rgba(0,0,0,0);}
80%, 100% {
  text-shadow:
    .25em 0 0 green,
    .5em 0 0 green;}}
`;

const blink = keyframes`
to {
  visibility: hidden;
}
`;

export const TerminalText = styled.div<{ noPrefix?: boolean }>`
  margin-top: 8px;
  font-size: 18px;
  line-height: 120%;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  ${({ noPrefix }) =>
    noPrefix
      ? ""
      : `&:before {
    content: ">:";
    margin-right: 10px;
  }`}
  .cursor {
    background: green;
    width: 1px;
    height: 18px;
    margin-left: 2px;
    display: inline-block;
    opacity: 1;
    animation: ${blink} 1s steps(3, start) infinite;
  }
  .highlighted {
    color: rgb(63, 212, 13);
  }
`;

export const AnimatedDot = styled.span`
  animation: ${dots} 1s linear infinite;
`;
