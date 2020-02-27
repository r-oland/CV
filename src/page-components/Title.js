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
`;

const Name = styled.h1`
  letter-spacing: 0.03em;
`;

const Bar = styled.div`
  width: 90%;
  height: 5px;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  background: ${({ theme: { primary } }) => primary.s4};
`;

const Description = styled.h3`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export default function Title() {
  return (
    <Wrapper color="white" size={1} noFold={true} id="title" gridArea="Title">
      <Flex>
        <Name>ROLAND BRANTEN</Name>
        <Bar />
        <Description>{`developer & designer`}</Description>
      </Flex>
    </Wrapper>
  );
}
