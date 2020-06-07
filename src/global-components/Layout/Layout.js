// Components==============
import React from "react";
import { ThemeProvider } from "styled-components";
import LanguageSwitch from "../../single-components/LanguageSwitch";
import GlobalStyles from "../../style/GlobalStyles";
import { Container } from "../../style/Mixins";
import { Variables } from "../../style/themes";
import IEWarning from "./IE/IEWarning";
// =========================

export const LocaleContext = React.createContext();

export default function Layout({ children, pageContext }) {
  const lang = pageContext.language;

  return (
    <ThemeProvider theme={Variables}>
      <LocaleContext.Provider value={lang}>
        <IEWarning />
        <Container style={{ marginBottom: `4em` }}>
          <LanguageSwitch path={pageContext.singlePath} lang={lang} />
          {children}
        </Container>
        <GlobalStyles />
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}
