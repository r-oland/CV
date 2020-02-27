import styled from "styled-components";

// Container

export const Container = styled.div`
  margin: 0 2%;

  @media screen and (min-width: 1600px) {
    margin: 0 8%;
  }
`;

// Font sizes

export const Xs = styled.p`
  font-size: 14px;
`;

export const S = styled.p`
  font-size: 15px;
`;

export const M = styled.p`
  font-size: 16px;
`;

export const L = styled.p`
  font-size: 17px;
`;

// styled underline

export const StyledUnderline = styled.a`
  cursor: pointer;
  border-bottom: 1px solid
    ${({ theme: { primary } }) => primary.s4.replace("1)", "0.3)")};
  box-shadow: 0px -4px 0px ${({ theme: { primary } }) =>
      primary.s4.replace("1)", "0.3)")} inset;
  transition: 0.2s;

  &:hover {
    border-bottom: 1px solid
      ${({ theme: { primary } }) => primary.s4.replace("1)", "0)")};
    box-shadow: 0px -4px 0px ${({ theme: { primary } }) =>
        primary.s4.replace("1)", "0)")} inset;
    background-color: ${({ theme: { primary } }) =>
      primary.s4.replace("1)", "0.3)")};
  }
`;
