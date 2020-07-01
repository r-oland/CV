// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 110px;

  img {
    height: 100%;
    max-height: 50px;
    margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  }

  p {
    ${({ theme: { fontSize } }) => fontSize.s}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    text-align: center;
  }
`;

export default function Item({ image, name }) {
  return (
    <Wrapper>
      <img src={image} alt={name} />
      <p>{name}</p>
    </Wrapper>
  );
}
