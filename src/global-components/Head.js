// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LocaleContext } from "./Layout";
// =========================

export default function Head({ title }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;

  const lang = useContext(LocaleContext);

  return (
    <Helmet>
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="robots" content="noindex,nofollow"></meta>
      <meta name="author" content="Roland Branten"></meta>
      <title>{`${siteTitle} | ${title}`}</title>
      <html lang={lang} />
    </Helmet>
  );
}
