// Components==============
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
`;

const P = styled.p`
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s3};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
`;

export default function About({ text, title }) {
  const Text = text.map(edge => {
    const t = edge.text;

    return <P key={t}>{t}</P>;
  });

  return (
    <Wrapper color="white" size={3} foldText={title} gridArea="About">
      <Title>{title}</Title>
      {Text}
    </Wrapper>
  );
}
