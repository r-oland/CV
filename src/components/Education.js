// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../pages/index";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr;
  margin-top: ${({ theme: { spacing } }) => spacing[2]};
`;

const Place = styled.p`
  font-size: 14px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  grid-row: 2;
  grid-column: 1;
`;

const Year = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: 19px;
  grid-row: 1;
  grid-column: 1;
  justify-self: end;
  transform: translateY(1px);
`;

const School = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  ${({ theme: { fontSize } }) => fontSize.l};
  grid-row: 1;
  grid-column: 1;
`;

const Level = styled.p`
  font-size: 14px;
`;

const Educ = styled.p`
  font-size: 19px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  grid-row: 3;
  grid-column: 1;
  align-self: center;
  margin-top: ${({ theme: { spacing } }) => spacing[0]};
`;

const LocAndLevel = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 1;
  width: 95px;
  align-items: center;
  justify-content: space-between;
`;

const Bar = styled.div`
  width: 70%;
  height: 2px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { primary } }) => primary};
  grid-row: 4;
  margin-top: ${({ theme: { spacing } }) => spacing[3]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
`;

const Bar2 = styled.div`
  width: 2px;
  height: 17px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { primary } }) => primary};
`;

export default function Education({ content }) {
  const lang = useContext(LangContext);

  const educationSection = content.map((edge, index) => {
    const place = edge.place;
    const year = edge.year;
    const school = edge.school;
    const level = edge.level;
    const educ = edge.educ[lang];

    const RemoveLastBar = () => {
      if (index !== 1) {
        return <Bar />;
      }

      return null;
    };

    return (
      <Grid key={index}>
        <Year>{year}</Year>
        <LocAndLevel>
          <Place>{place}</Place>
          <Bar2 />
          <Level>{level}</Level>
        </LocAndLevel>

        <School>{school}</School>
        <Educ>{educ}</Educ>
        <RemoveLastBar />
      </Grid>
    );
  });

  const title = lang === "en" ? "Education" : "Opleiding";

  return (
    <Wrapper color="white" gridArea="Education">
      <Title>{title}</Title>
      {educationSection}
    </Wrapper>
  );
}
