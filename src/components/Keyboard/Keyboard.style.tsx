import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  canvas {
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -100%);
  top: 97%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const StyledButton = styled.button`
  font-size: 25px;
  color: white;
  cursor: pointer;
  padding: 10px 10px 0;
`;
