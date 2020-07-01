// Components==============
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const Flex = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 15px;

  ${({ theme: { mediaQ } }) => mediaQ.custom(720)} {
    margin-top: 0;
  }
`;

const Name = styled.h1`
  letter-spacing: 0.03em;
`;

const Bar = styled.div`
  width: 90%;
  height: 3px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { primary } }) => primary};
`;

const Description = styled.h3`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin-top: ${({ theme: { spacing } }) => spacing[0]};
`;

export default function Title({ content }) {
  return (
    <Wrapper color="white" noFold gridArea="Title">
      <Flex>
        <Name>ROLAND BRANTEN</Name>
        <Bar />
        <Description>{content}</Description>
      </Flex>
    </Wrapper>
  );
}
