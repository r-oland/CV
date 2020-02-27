// Components==============
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import { Helmet } from "react-helmet";
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

  const intl = useIntl();

  return (
    <Helmet>
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="robots" content="noindex,nofollow"></meta>
      <meta name="author" content="Roland Branten"></meta>
      <title>{`${siteTitle} | ${title}`}</title>
      <html lang={intl.locale} />
    </Helmet>
  );
}
