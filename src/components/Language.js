// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../pages/index";
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
  margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
  font-size: 15px;
`;

const Bar1 = styled.div`
  background: ${({ theme: { notWhite } }) => notWhite};
  width: 100%;
  height: 12.5px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  position: relative;
`;

const Bar2 = styled(motion.div)`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme: { primary } }) => primary};
`;

export default function Language() {
  const lang = useContext(LangContext);

  const title = lang === "en" ? "Language" : "Taal";
  const dutch = lang === "en" ? "Dutch" : "Nederlands";
  const english = lang === "en" ? "English" : "Engels";

  return (
    <Wrapper color="black" gridArea="Language">
      <Title>{title}</Title>
      <LangSection>
        <Lang>{dutch}</Lang>
        <Bar1>
          <Bar2
            animate={{
              width: `86%`,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </Bar1>
        <Lang>{english}</Lang>
        <Bar1>
          <Bar2
            animate={{
              width: `73%`,
            }}
            transition={{
              duration: 1,
            }}
          />
        </Bar1>
      </LangSection>
    </Wrapper>
  );
}
