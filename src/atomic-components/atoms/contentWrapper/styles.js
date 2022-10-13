import styled from "styled-components";

export const StyledContentWrapper = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding: 2em;
    max-width: 800px;
    margin: auto;
  }

  ${(props) =>
    props.$center &&
    `
    align-items: center;
    justify-content: center;
  `}
`;
