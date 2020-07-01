// Components==============
import Github from "assets/contactIcons/Github.svg";
import Home from "assets/contactIcons/Home.svg";
import Mail from "assets/contactIcons/Mail.svg";
import Phone from "assets/contactIcons/Phone.svg";
import Site from "assets/contactIcons/Site.svg";
import React from "react";
import styled from "styled-components";
import Wrapper from "../single-components/Wrapper";
import { StyledUnderline } from "../style/Mixins";

// =========================

const Title = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
  align-items: center;

  img {
    width: 30px;
    margin-right: ${({ theme: { spacing } }) => spacing[4]};
  }
`;

export default function Contact({ content }) {
  const contentArr = Object.values(content);
  const icons = [Site, Mail, Phone, Github, Home];

  const contactItems = contentArr.map((e, index) => {
    // ORDER (defined by order of graphql query)
    // 0 website
    // 1 mail
    // 2 phone
    // 3 github
    // 4 city

    return (
      <Flex key={index}>
        <img src={icons[index]} alt={e} />
        {index === 0 ? (
          <StyledUnderline href={e} target="_blank" rel="noopener noreferrer">
            {e}
          </StyledUnderline>
        ) : index === 1 ? (
          <StyledUnderline href={`mailto:${e}`}>{e}</StyledUnderline>
        ) : index === 2 ? (
          <a href={`tel:${e}`}>{e}</a>
        ) : index === 3 ? (
          <StyledUnderline href={e} target="_blank" rel="noopener noreferrer">
            r-oland
          </StyledUnderline>
        ) : index === 4 ? (
          <p>{e}</p>
        ) : (
          <p>{e}</p>
        )}
      </Flex>
    );
  });

  return (
    <Wrapper color="white" gridArea="Contact">
      <Title>Contact</Title>
      {contactItems}
    </Wrapper>
  );
}
