import styled from "styled-components";
import colors from "../../../constants/colors";

export const StyledButton = styled.button`
  padding: 8px 24px;
  text-transform: uppercase;

  background-color: ${colors.lightBlue};
  color: ${colors.white};

  border-radius: 8px;
  border: none;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.5;
  }

  ${(props) =>
    props.disabled &&
    `
    cursor: default;
    opacity: .2;
    &:hover {
      opacity: .2; 
    }

`}
`;
