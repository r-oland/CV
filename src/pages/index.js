// Components==============
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import About from "../page-components/About";
import Contact from "../page-components/Contact";
import DesignSkills from "../page-components/DesingSkills";
import DevSkills from "../page-components/DevSkills";
import Education from "../page-components/Education";
import Language from "../page-components/Language";
import Photo from "../page-components/Photo";
import Title from "../page-components/Title";
import Work from "../page-components/Work";
// =========================

const Grid = styled.div`
  display: grid;
  grid-gap: 12px;
  justify-content: center;

  @media screen and (min-width: 720px) {
    grid-template-areas:
      "Title About"
      "Photo About"
      "Photo About"
      "Photo Work"
      "Education Work"
      "Education Work"
      "Language Work"
      "DesignSkills DevSkills"
      "Contact DevSkills"
      "Contact DevSkills"
      "Contact DevSkills";
  }

  @media screen and (min-width: 1069px) {
    grid-template-areas:
      "Title About Work"
      "Photo About Work"
      "Photo About Work"
      "Photo DevSkills Work"
      "Contact DevSkills DesignSkills"
      "Contact DevSkills Education"
      "Language DevSkills Education";
  }

  @media screen and (min-width: 1430px) {
    grid-template-areas:
      "Title Work DevSkills DesignSkills"
      "Photo Work DevSkills About"
      "Photo Work DevSkills About"
      "Photo Work DevSkills About"
      "Contact Education Language About "
      "Contact Education Language About";
  }
`;

export default function Index({ data }) {
  const intl = useIntl();
  const lang = intl.locale;

  const education = data.sanityEducation;
  const about = data.sanityAbout;
  const work = data.sanityWork;
  const language = data.sanityLanguage;

  return (
    <Layout>
      <Grid>
        <Head title="Roland Branten" />
        <Photo photo={data.picture.childImageSharp.fluid} />
        <Title />
        <About about={about} title={`ABOUT`} lang={lang} />
        {/* <About about={about} title={about.title[lang]} lang={lang} /> */}
        <Work work={work} title={work.title[lang]} lang={lang} />
        <Education
          title={education.title[lang]}
          education={education}
          lang={lang}
        />
        <Language
          language={language}
          title={language.title[lang]}
          lang={lang}
        />
        <DevSkills title={data.sanityDevSkills.title[lang]} lang={lang} />
        <DesignSkills title={data.sanityDesignSkills.title[lang]} lang={lang} />
        <Contact />
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query Home {
    sanityWork {
      title {
        en
        nl
      }
      jobInfo {
        job
        place
        year
        function {
          en
          nl
        }
      }
    }
    sanityEducation {
      title {
        en
        nl
      }
      educationInfo {
        level
        place
        school
        year
        educ {
          en
          nl
        }
      }
    }
    sanityDevSkills {
      title {
        en
        nl
      }
    }
    sanityDesignSkills {
      title {
        en
        nl
      }
    }
    sanityLanguage {
      dutch {
        en
        nl
      }
      english {
        en
        nl
      }
      title {
        en
        nl
      }
    }
    sanityAbout {
      title {
        en
        nl
      }
      _rawAboutInfo
    }
    picture: file(relativePath: { eq: "Roland.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
