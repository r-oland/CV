// Components==============
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Head";
import Layout from "../global-components/Layout";
// =========================

const Smiley = styled.p`
  font-size: 45px;
  margin-top: ${({ theme: { spacing } }) => spacing[3]};
`;

const Container404 = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export default function NotFound({ data, pageContext, path }) {
  return (
    <Layout pageContext={pageContext} path={path}>
      <Head title="404 NOT FOUND" />
      <Container404>
        <h2>I could not find what you where looking for...</h2>
        {/* eslint-disable-next-line */}
        <Smiley>😟</Smiley>
      </Container404>
    </Layout>
  );
}
