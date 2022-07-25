import styled, { keyframes } from "styled-components";

export const TerminalWrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 50%;
  padding: 20px 20px 0;
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
  padding: 4px 10px;
  color: white;
`;
export const TerminalCloseButton = styled.button`
  width: 18px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f9faff;
  background: #bdc0bf;
  font-size: 16px;
`;
export const TerminalBody = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
  p {
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 120%;
    &:before {
      content: ">: ";
    }
  }
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
export const InitText = styled.p``;
export const AnimatedDot = styled.span`
  animation: ${dots} 1s linear infinite;
`;
