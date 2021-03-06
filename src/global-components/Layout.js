// Components==============
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
import { Container } from "../style/Mixins";
import { theme } from "../style/themes";
import IEWarning from "./IE/IEWarning";
// =========================

export const LocaleContext = React.createContext();

export default function Layout({ children, pageContext }) {
  const lang = pageContext.language;

  return (
    <ThemeProvider theme={theme}>
      <LocaleContext.Provider value={lang}>
        <IEWarning />
        <Container>{children}</Container>
        <GlobalStyles />
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}
