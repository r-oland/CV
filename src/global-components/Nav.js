// Components==============
import React from "react";
import styled from "styled-components";
import LanguageSwitch from "../single-components/LanguageSwitch";
import PdfConverter from "../single-components/PdfConverter";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme: { spacing } }) => `${spacing[4]} 0${spacing[4]}`};
  grid-area: Nav;
  justify-self: end;
  align-items: center;

  ${({ theme: { mediaQ } }) => mediaQ.custom(720)} {
    margin: 0;
  }
`;

export default function Nav() {
  return (
    <Wrapper>
      <PdfConverter />
      <LanguageSwitch />
    </Wrapper>
  );
}
