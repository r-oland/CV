// Components==============
import { graphql } from "gatsby";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Language from "../components/Language";
import Photo from "../components/Photo";
import SideProjects from "../components/SideProjects";
import Design from "../components/skills/Design";
import Dev from "../components/skills/Dev";
import Title from "../components/Title";
import Work from "../components/Work";
import Head from "../global-components/Head";
import Layout from "../global-components/Layout";
import Grid from "../single-components/Grid";
import LanguageSwitch from "../single-components/LanguageSwitch";
import { Container } from "../style/Mixins";
// =========================

export const LangContext = React.createContext(null);

export default function Index({ data, pageContext, path }) {
  const lang = pageContext.language;

  return (
    <>
      <Head title="Roland Branten" />
      <LangContext.Provider value={lang}>
        <Layout pageContext={pageContext} path={path}>
          <Container>
            <LanguageSwitch />
            <Grid>
              <Title content={data.sanityRoland.title} />
              <Photo content={data.sanityRoland.image.asset.fluid} />
              <Work content={data.sanityWorkOrder.projects} />
              <Dev content={data.sanityTechOrder.development} />
              <About content={data.sanityRoland._rawAboutShort[lang]} />
              <Design content={data.sanityTechOrder.design} />
              <Education content={data.sanityRoland.education} />
              <SideProjects content={data.sanityWorkOrder.SideProjects} />
              <Contact content={data.sanityRoland.contact} />
              <Language />
            </Grid>
          </Container>
        </Layout>
      </LangContext.Provider>
    </>
  );
}

export const query = graphql`
  query cvQuery {
    sanityWorkOrder {
      SideProjects {
        name
        description {
          en
          nl
        }
        url
      }
      projects {
        name
        period
        description {
          en
          nl
        }
        url
      }
    }
    sanityRoland {
      title
      _rawAboutShort
      education {
        level
        place
        school
        year
        educ {
          en
          nl
        }
      }
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
      contact {
        website
        mail
        phone
        github
        city
      }
    }
    sanityTechOrder {
      design {
        name
        icon {
          asset {
            url
          }
        }
      }
      development {
        name
        icon {
          asset {
            url
          }
        }
      }
    }
  }
`;
