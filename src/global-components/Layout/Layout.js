// Components==============
import React from "react";
import { ThemeProvider } from "styled-components";
import LanguageSwitch from "../../single-components/LanguageSwitch";
import GlobalStyles from "../../style/GlobalStyles";
import { Container } from "../../style/Mixins";
import { Variables } from "../../style/themes";
import IEWarning from "./IE/IEWarning";
// =========================

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <Container style={{ marginBottom: `4em` }}>
        <LanguageSwitch />
        {children}
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}
