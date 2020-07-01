// Components==============
import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../../pages/index";
import Wrapper from "../../single-components/Wrapper";
import Item from "./Item";
// =========================

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[5]};
`;

const Grid = styled.div`
  grid-template-columns: repeat(2, 1fr);

  ${({ theme: { mediaQ } }) => mediaQ.custom(330)} {
    grid-template-columns: repeat(3, 1fr);
  }
  display: grid;
  grid-row-gap: 25px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
`;

export default function Dev({ content }) {
  const lang = useContext(LangContext);

  const title = lang === "en" ? "Dev skills" : "Dev vaardigheden";

  const devItems = content.slice(0, 12).map((e, index) => {
    return <Item image={e.icon.asset.url} name={e.name} key={index} />;
  });

  return (
    <Wrapper color="primary" gridArea="Dev">
      <Title>{title}</Title>
      <Grid>{devItems}</Grid>
    </Wrapper>
  );
}
