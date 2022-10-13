import styled from "styled-components";
import colors from "../../../constants/colors";

export const StyledListCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  padding: 1em;
  margin-bottom: 1.5rem;

  max-width: 30em;
  width: 100%;
  border-radius: 8px;

  background-color: ${colors.whiteBlue};
  color: ${colors.lightBlue};

  -webkit-box-shadow: 3px 2px 5px 2px ${colors.blue}44;
  -moz-box-shadow: 3px 2px 5px 2px ${colors.blue}44;
  box-shadow: 3px 2px 5px 2px ${colors.blue}44;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;
