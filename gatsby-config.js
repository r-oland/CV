require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `CV`,
    description: `CV of Roland Branten`,
    author: `Roland Branten`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CV Roland Branten`,
        short_name: `CV Roland`,
        lang: `en`,
        start_url: `/`,
        background_color: `#FFC719`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `icon/icon.png`,
        localize: [
          {
            start_url: `/nl/`,
            lang: `nl`,
          },
        ],
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "mlhs3v8e",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
};
