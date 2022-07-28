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
  transform: translateX(-50%);
  bottom: 0%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 0 20px;
  background: rgba(189, 189, 189, 0.3);
  width: 100%;
`;

export const StyledButton = styled.button`
  font-size: 25px;
  color: white;
  cursor: pointer;
  padding: 10px 10px 0;
  &:disabled {
    opacity: 0.2;
  }
`;
