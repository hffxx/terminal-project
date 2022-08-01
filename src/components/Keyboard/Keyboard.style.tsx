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
  position: fixed;
  transform: translateX(-50%);
  bottom: 0;
  left: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background: rgba(189, 189, 189, 0.3);
  width: 100%;
  border-radius: 0;
  ${({ theme }) => theme.sizes.mediaQueries.laptopS} {
    max-width: 1500px;
    border-radius: 10px;
    margin-bottom: 25px;
  }
`;

export const StyledButton = styled.button`
  font-size: 25px;
  color: white;
  cursor: pointer;
  padding: 10px;
  &:disabled {
    opacity: 0.2;
  }
`;
