// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import { LangContext } from "../pages/index";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  color: ${({ theme: { white } }) => white};
`;

const Project = styled.div`
  strong {
    display: block;
    color: ${({ theme: { primary } }) => primary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }

  h3 {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
  }

  p {
    ${({ theme: { fontSize } }) => fontSize.s}
    opacity: 0.9;
    line-height: 1.4;
    margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
  }

  a {
    color: ${({ theme: { primary } }) => primary};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }

  * {
    color: ${({ theme: { white } }) => white};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  div {
    height: 17px;
    width: 1px;
    background: ${({ theme: { white } }) => white};
    margin: 0 ${({ theme: { spacing } }) => spacing[2]};
  }
`;

const Bar = styled.div`
  height: 1px;
  width: 70%;
  background: ${({ theme: { white } }) => white};
  margin: ${({ theme: { spacing } }) => spacing[5]} 0;
`;

const Button = styled(motion.a)`
  display: block;
  width: 120px;
  background: ${({ theme: { primary } }) => primary};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[2]}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  margin: ${({ theme: { spacing } }) => spacing[5]} auto;
`;

export default function Work({ content }) {
  const lang = useContext(LangContext);

  const projects = content.map((e, index) => {
    return (
      <div key={index}>
        <Project>
          <strong>{e.period}</strong>
          <h3>{e.name}</h3>
          <p>{e.description[lang]}</p>
          <Flex>
            <a href={e.url} target="_blank" rel="noopener noreferrer">
              {lang === "en" ? "Visit site" : "Bezoek site"}
            </a>
            <div />
            <a
              href={`https://rolandbranten.nl/work#${e.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "en" ? "More info" : "Meer info"}
            </a>
          </Flex>
        </Project>
        {index !== 2 && <Bar />}
      </div>
    );
  });

  const title = lang === "en" ? "Work" : "Werk";

  return (
    <Wrapper color="black" gridArea="Work">
      <Title>{title}</Title>
      {projects}
      <Button
        href="https://rolandbranten.nl/work"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {lang === "en" ? "View more" : "Bekijk meer"}
      </Button>
    </Wrapper>
  );
}
