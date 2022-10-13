import styled from "styled-components";
import colors from "../../../constants/colors";

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    height: 2em;
    width: 2em;
    border: 1px solid ${colors.lightBlue};
    background: transparent;
    transition: 0.2s;

    &:hover {
      border: 1px solid ${colors.whiteBlue};
      background: ${colors.whiteBlue};
    }
  }
`;
