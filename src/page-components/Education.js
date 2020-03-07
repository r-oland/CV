// Components==============
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
  color: ${({ theme: { white } }) => white};
`;

const Grid = styled.div`
  color: ${({ theme: { white } }) => white};
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr;
  margin-top: ${({ theme: { spacing } }) => spacing.s3};
`;

const Place = styled.p`
  font-size: 14px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  grid-row: 2;
  grid-column: 1;
`;

const Year = styled.p`
  color: ${({ theme: { primary } }) => primary.s4};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: 19px;
  grid-row: 1;
  grid-column: 1;
  justify-self: end;
`;

const School = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
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
  margin-top: ${({ theme: { spacing } }) => spacing.s1};
`;

const LocAndLevel = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 1;
  width: 105px;
  align-items: center;
  justify-content: space-between;
`;

const Bar = styled.div`
  width: 100%;
  height: 5px;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  background: ${({ theme: { primary } }) => primary.s4};
  grid-row: 4;
  margin-top: ${({ theme: { spacing } }) => spacing.s3};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
`;

const Bar2 = styled.div`
  width: 3px;
  height: 80%;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  background: ${({ theme: { primary } }) => primary.s4};
`;

export default function Education({ title, education, lang }) {
  const educationSection = education.educationInfo.map((edge, index) => {
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

  return (
    <Wrapper
      color="rgba(43, 43, 43, 1)"
      size={2}
      foldText={title}
      gridArea="Education"
    >
      <Title>{title}</Title>
      {educationSection}
    </Wrapper>
  );
}
