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
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${({ theme: { mediaQ } }) => mediaQ.custom(330)} {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-row-gap: ${({ theme: { spacing } }) => spacing[2]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
`;

export default function Design({ content }) {
  const lang = useContext(LangContext);

  const title = lang === "en" ? "Design skills" : "Design vaardigheden";

  const designItems = content.map((e, index) => {
    return <Item image={e.icon.asset.url} name={e.name} key={index} />;
  });

  return (
    <Wrapper color="primary" gridArea="Design">
      <Title>{title}</Title>
      <Grid>{designItems}</Grid>
    </Wrapper>
  );
}
