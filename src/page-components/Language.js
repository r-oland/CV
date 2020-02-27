// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
  color: ${({ theme: { white } }) => white};
`;

const LangSection = styled.div`
  transform: translateY(-9px);
`;

const Lang = styled.p`
  color: ${({ theme: { white } }) => white};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  font-size: 15px;
`;

const Bar1 = styled.div`
  background: ${({ theme: { gray } }) => gray.s1};
  width: 100%;
  height: 12.5px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  position: relative;
`;

const Bar2 = styled(motion.div)`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme: { primary } }) => primary.s4};
`;

export default function Language({ language, title }) {
  return (
    <Wrapper
      color="rgba(43, 43, 43, 1)"
      size={1}
      foldText={title}
      gridArea="Language"
    >
      <Title>{title}</Title>
      <LangSection>
        <Lang>{language.dutch}</Lang>
        <Bar1>
          <Bar2
            animate={{
              width: `86%`
            }}
            transition={{
              duration: 0.5
            }}
          />
        </Bar1>
        <Lang>{language.english}</Lang>
        <Bar1>
          <Bar2
            animate={{
              width: `73%`
            }}
            transition={{
              duration: 1
            }}
          />
        </Bar1>
      </LangSection>
    </Wrapper>
  );
}
