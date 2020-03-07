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
  grid-template-rows: 1.2fr 2.5fr 5px;
  grid-template-columns: 1fr;
  margin-top: ${({ theme: { spacing } }) => spacing.s5};
`;

const Company = styled.p`
  color: ${({ theme: { gray } }) => gray.s1};
  grid-row: 1;
  grid-column: 1;
`;

const Fun = styled.p`
  font-size: 19px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  grid-row: 2;
  grid-column: 1;
  align-self: center;
  transform: translateY(-8px);
`;

const Place = styled.p`
  font-size: 15px;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  grid-row: 2;
  grid-column: 1;
  justify-self: end;
`;

const Year = styled.p`
  color: ${({ theme: { primary } }) => primary.s4};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: 19px;
  grid-row: 1;
  grid-column: 1;
  justify-self: end;
`;

const Bar = styled.div`
  width: 85%;
  height: 5px;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  background: ${({ theme: { primary } }) => primary.s4};
`;

export default function Work({ title, work, lang }) {
  const workSections = work.jobInfo.map((edge, index) => {
    const company = edge.job;
    const fun = edge.function[lang];
    const place = edge.place;
    const year = edge.year;

    const RemoveLastBar = () => {
      if (index !== 4) {
        return <Bar />;
      }

      return null;
    };

    return (
      <Grid key={index}>
        <Company>{company}</Company>
        <Fun>{fun}</Fun>
        <Place>{place}</Place>
        <Year>{year}</Year>
        <RemoveLastBar />
      </Grid>
    );
  });

  return (
    <Wrapper
      color="rgba(43, 43, 43, 1)"
      size={4}
      foldText={title}
      gridArea="Work"
    >
      <Title>{title}</Title>
      {workSections}
    </Wrapper>
  );
}
