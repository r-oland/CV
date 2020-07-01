// Components==============
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { LangContext } from "../pages/index";
// ========================

const FullWidth = styled.div`
  display: flex;
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
  const lang = useContext(LangContext);

  return (
    <FullWidth>
      <Flex>
        <Link to={lang === "en" ? `/` : `/en`}>
          <NL language={lang}>NL</NL>
          <span>/</span>
          <EN language={lang}>EN</EN>
        </Link>
      </Flex>
    </FullWidth>
  );
}
