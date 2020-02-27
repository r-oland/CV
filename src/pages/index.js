// Components==============
import { graphql } from "gatsby";
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
  const titles = data.file.childTranslationsJson.titles[0];
  const education = data.file.childTranslationsJson.education;
  const aboutText = data.file.childTranslationsJson.aboutMe;
  const work = data.file.childTranslationsJson.work;
  const language = data.file.childTranslationsJson.language[0];

  return (
    <Layout>
      <Grid>
        <Head title="Roland Branten" />
        <Photo photo={data.picture.childImageSharp.fluid} />
        <Title />
        <About text={aboutText} title={titles.aboutMe} />
        <Work work={work} title={titles.work} />
        <Education title={titles.education} education={education} />
        <Language language={language} title={titles.language} />
        <DevSkills title={titles.devSkills} />
        <DesignSkills title={titles.designSkills} />
        <Contact />
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query Home($language: String) {
    file(name: { eq: $language }, relativeDirectory: { eq: "translations" }) {
      childTranslationsJson {
        aboutMe {
          text
        }
        education {
          education
          level
          place
          school
          year
        }
        titles {
          aboutMe
          designSkills
          devSkills
          education
          language
          work
        }
        work {
          company
          function
          place
          year
        }
        language {
          dutch
          english
        }
      }
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
