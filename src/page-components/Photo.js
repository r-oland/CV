// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const IMG = styled(Img)`
  height: 100%;
`;

export default function Photo({ photo }) {
  return (
    <Wrapper
      padding="noPadding"
      size={3}
      noFold={true}
      id="photo"
      gridArea="Photo"
    >
      <IMG fluid={photo} alt="photo" />
    </Wrapper>
  );
}
