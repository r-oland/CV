// Components==============
import Github from "assets/Github.svg";
import Home from "assets/Home.svg";
import Mail from "assets/Mail.svg";
import Phone from "assets/Phone.svg";
import Site from "assets/Site.svg";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
import { StyledUnderline } from "../style/Mixins";
// =========================

const contactArray = [
  {
    icon: Site,
    value: `https://rolandbranten.nl`,
    link: "yes",
    to: "https://rolandbranten.nl",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  {
    icon: Mail,
    value: `info@rolandbranten.nl`,
    link: "yes",
    to: "mailto:info@rolandbranten.nl",
    target: "",
    rel: ""
  },
  {
    icon: Phone,
    value: `06 227 883 03`,
    link: "no",
    to: "",
    target: "",
    rel: ""
  },
  {
    icon: Home,
    value: `Eindhoven`,
    link: "no",
    to: "",
    target: "",
    rel: ""
  },
  {
    icon: Github,
    value: `r-oland`,
    link: "yes",
    to: "https://github.com/r-oland",
    target: "_blank",
    rel: "noopener noreferrer"
  }
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  margin: 1.5em 0;
  align-items: center;
`;

const Icon = styled.img`
  width: 25px;
`;

const ValueA = styled(StyledUnderline)`
  justify-self: start;
`;

const ValueP = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

export default function Contact() {
  return (
    <Wrapper color="white" size={2} foldText="CONTACT" gridArea="Contact">
      {contactArray.map(edge => {
        const ConditionalValue = () => {
          if (edge.link === "yes") {
            return (
              <ValueA href={edge.to} target={edge.target} rel={edge.rel}>
                {edge.value}
              </ValueA>
            );
          }

          return <ValueP>{edge.value}</ValueP>;
        };

        return (
          <Grid key={edge.value}>
            <Icon src={edge.icon} alt={edge.value} />
            <ConditionalValue />
          </Grid>
        );
      })}
    </Wrapper>
  );
}
