// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../pages/index";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  color: ${({ theme: { white } }) => white};
`;

const Project = styled.div`
  h3 {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
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
  margin: ${({ theme: { spacing } }) => spacing[3]} 0;
`;

export default function SideProjects({ content }) {
  const lang = useContext(LangContext);

  const projects = content.map((e, index) => {
    return (
      <>
        <Project key={index}>
          <h3>{e.name}</h3>
          <p>{e.description[lang]}</p>
          <Flex>
            <a href={e.url} target="_blank" rel="noopener noreferrer">
              {lang === "en" ? "Visit site" : "Bezoek site"}
            </a>
            <div />
            <a
              href={`https://rolandbranten.nl/work#${e.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "en" ? "More info" : "Meer info"}
            </a>
          </Flex>
        </Project>
        {index !== 1 && <Bar />}
      </>
    );
  });

  return (
    <Wrapper color="black" gridArea="SideProjects">
      <Title>Side projects</Title>
      {projects}
    </Wrapper>
  );
}
