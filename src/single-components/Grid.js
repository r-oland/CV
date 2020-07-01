// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[10]};

  @media screen and (min-width: 720px) {
    display: grid;
    grid-gap: 12px;
    justify-items: center;
    justify-content: center;

    grid-template-rows: 50px repeat(12, 150px);
    grid-template-columns: repeat(2, 344px);
    grid-template-areas:
      "Nav Nav"
      "Title Dev"
      "Photo Dev"
      "Photo Dev"
      "Photo Dev"
      "Work About"
      "Work About"
      "Work About"
      "Work Design"
      "Education Design"
      "Education SideProjects"
      "Contact SideProjects"
      "Contact Language";
  }

  @media screen and (min-width: 1069px) {
    grid-template-rows: 50px repeat(8, 150px);
    grid-template-columns: repeat(3, 344px);
    grid-template-areas:
      "Nav Nav Nav"
      "Title Work Dev"
      "Photo Work Dev"
      "Photo Work Dev"
      "Photo Work Dev"
      "About SideProjects Design"
      "About SideProjects Design"
      "About Education Contact"
      "Language Education Contact";
  }

  @media screen and (min-width: 1430px) {
    grid-template-rows: 50px repeat(6, 150px);
    grid-template-columns: repeat(4, 344px);
    grid-template-areas:
      "Nav Nav Nav Nav"
      "Title Work Dev About"
      "Photo Work Dev About"
      "Photo Work Dev About"
      "Photo Work Dev Design"
      "Contact SideProjects Education Design "
      "Contact SideProjects Education Language";
  }
`;

export default function Grid({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
