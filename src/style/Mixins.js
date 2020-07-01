import styled from "styled-components";

// Container

export const Container = styled.div`
  margin: 0 2%;

  @media screen and (min-width: 1600px) {
    margin: 0 8%;
  }
`;

// styled underline

export const StyledUnderline = styled.a`
  cursor: pointer;
  border-bottom: 1px solid
    ${({ theme: { primary } }) => primary.replace("1)", "0.3)")};
  box-shadow: 0px -4px 0px ${({ theme: { primary } }) =>
      primary.replace("1)", "0.3)")} inset;
  transition: 0.2s;

  &:hover {
    border-bottom: 1px solid
      ${({ theme: { primary } }) => primary.replace("1)", "0)")};
    box-shadow: 0px -4px 0px ${({ theme: { primary } }) =>
        primary.replace("1)", "0)")} inset;
    background-color: ${({ theme: { primary } }) =>
      primary.replace("1)", "0.3)")};
  }
`;
