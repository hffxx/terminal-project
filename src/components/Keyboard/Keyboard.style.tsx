import styled from "styled-components";

export const KeyboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    height: 40%;
  }
  canvas {
    margin-bottom: 20px;
  }
`;
