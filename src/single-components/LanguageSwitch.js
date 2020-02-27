// Components==============
import { motion } from "framer-motion";
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";
import React from "react";
import styled from "styled-components";
// ========================

const FullWidth = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme: { spacing } }) => spacing.s3};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s4};

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Flex = styled(motion.div)`
  cursor: pointer;
  display: flex;

  span {
    font-size: 18px;
    padding: 2px 3px 0px;
  }
`;

const NL = styled.button`
  right: 0;
  font-size: 18px;

  font-weight: ${({ theme: { fontWeight }, language }) =>
    language === "nl" ? fontWeight.bold : fontWeight.normal};
`;

const EN = styled.button`
  font-size: 18px;

  font-weight: ${({ theme: { fontWeight }, language }) =>
    language === "en" ? fontWeight.bold : fontWeight.normal};
`;

export default function LanguageSwitch() {
  return (
    <FullWidth>
      <IntlContextConsumer>
        {({ language }) => {
          return (
            <Flex
              onClick={() =>
                language === "en" ? changeLocale("nl") : changeLocale("en")
              }
            >
              <NL language={language}>NL</NL>
              <span>/</span>
              <EN onClick={() => changeLocale("en")} language={language}>
                EN
              </EN>
            </Flex>
          );
        }}
      </IntlContextConsumer>
    </FullWidth>
  );
}
