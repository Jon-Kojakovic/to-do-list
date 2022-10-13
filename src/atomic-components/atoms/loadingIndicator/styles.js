import styled, { keyframes } from "styled-components";
import colors from "../../../constants/colors";

export const StyledLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 200px;
  width: 200px;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledLoadingIndicator = styled.div`
  border-radius: 100%;
  border: 16px solid ${colors.white};
  border-top: 16px solid ${colors.blue};
  width: 100px;
  height: 100px;
  animation: ${spinAnimation} 2s linear infinite;
`;
