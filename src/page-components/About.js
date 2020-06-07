// Components==============
import BlockContent from "@sanity/block-content-to-react";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
`;

const TextWrapper = styled.div`
  p {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s3};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

export default function About({ about, title, lang }) {
  return (
    <Wrapper color="white" size={3} foldText={title} gridArea="About">
      <Title>{title}</Title>
      <TextWrapper>
        <BlockContent
          blocks={about._rawAboutInfo[lang]}
          serializers={serializers}
        />
        ,
      </TextWrapper>
    </Wrapper>
  );
}
