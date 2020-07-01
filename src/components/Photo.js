// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const IMG = styled(Img)`
  height: 100%;
`;

export default function Photo({ content }) {
  return (
    <Wrapper noFold gridArea="Photo" color="primary" noPadding>
      <IMG fluid={content} alt="photo" />
    </Wrapper>
  );
}
