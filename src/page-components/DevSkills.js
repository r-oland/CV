// Components==============
import Firebase from "assets/FB.svg";
import Gatsby from "assets/Gatsby.svg";
import Github from "assets/Github.svg";
import GraphQL from "assets/GraphQL.svg";
import Javascript from "assets/Javascript.svg";
import ReactSvg from "assets/React.svg";
import Sanity from "assets/Sanity.svg";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const SkillArray = [
  {
    name: "Vanilla Javascript",
    svg: Javascript
  },
  {
    name: "React",
    svg: ReactSvg
  },
  {
    name: "Gatsby",
    svg: Gatsby
  },
  {
    name: "GraphQL",
    svg: GraphQL
  },
  {
    name: "Headless CMS",
    svg: Sanity
  },
  {
    name: "Firebase",
    svg: Firebase
  },
  {
    name: "Github",
    svg: Github
  }
];

const Title = styled.h3`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  align-items: center;
  margin: 1.7em 0;
`;

const Name = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  font-size: 18px;
`;

const skills = SkillArray.map((edge, index) => {
  return (
    <Grid key={index}>
      <img src={edge.svg} alt={edge.name} />
      <Name>{edge.name}</Name>
    </Grid>
  );
});

export default function DevSkills({ title }) {
  return (
    <Wrapper
      color="rgba(255, 199, 25, 1)"
      size={4}
      foldText={title}
      gridArea="DevSkills"
    >
      <Title>{title}</Title>
      {skills}
    </Wrapper>
  );
}
