import styled from "styled-components";

export const TerminalWrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  flex-grow: 1;
  padding: 20px 20px 0;
`;
export const TerminalBackground = styled.div`
  padding: 1px;
  width: 100%;
  height: 100%;
  background: darkgray;
  display: flex;
  flex-direction: column;
  color: white;
`;
export const TerminalTopbar = styled.div`
  background: #000180;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
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
`;
