// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
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

export default function LanguageSwitch({ lang, path }) {
  return (
    <FullWidth>
      <Flex>
        <Link to={lang === "en" ? `${path}` : `/en${path}`}>
          <NL language={lang}>NL</NL>
          <span>/</span>
          <EN language={lang}>EN</EN>
        </Link>
      </Flex>
    </FullWidth>
  );
}
