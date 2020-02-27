// Components==============
import Illustrator from "assets/Illustrator.svg";
import Photoshop from "assets/Photoshop.svg";
import XD from "assets/XD.svg";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
  padding-top: ${({ theme: { spacing } }) => spacing.s5};

  #XD {
    transform: translateY(-5px);
  }
`;

export default function DesignSkills({ title }) {
  return (
    <Wrapper
      color="rgba(255, 199, 25, 1)"
      size={1}
      foldText={title}
      gridArea="DesignSkills"
    >
      <Title>{title}</Title>
      <Flex>
        <img src={Illustrator} alt="Illustrator" />
        <img src={XD} alt="XD" id="XD" />
        <img src={Photoshop} alt="Photoshop" />
      </Flex>
    </Wrapper>
  );
}
