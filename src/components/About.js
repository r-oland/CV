// Components==============
import BlockContent from "@sanity/block-content-to-react";
import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../pages/index";
import Wrapper from "../single-components/Wrapper";
// =========================

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
`;

const TextWrapper = styled.div`
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
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

export default function About({ content }) {
  const lang = useContext(LangContext);

  const title = lang === "en" ? "About me" : "Over mij";

  return (
    <Wrapper color="white" gridArea="About">
      <Title>{title}</Title>
      <TextWrapper>
        <BlockContent blocks={content} serializers={serializers} />
      </TextWrapper>
    </Wrapper>
  );
}
