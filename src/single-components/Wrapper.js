// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  background: ${({ theme, color }) => theme[color]};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.s};
  padding: ${({ theme: { spacing }, noPadding }) =>
    !noPadding && `${spacing[3]} ${spacing[5]}`};
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea};
  min-height: 145px;
  max-width: 344px;
  height: 100%;
  margin: 0 auto 12px;
  overflow: hidden;
`;

export default function WrapperComponent({
  children,
  color,
  noFold,
  gridArea,
  noPadding,
}) {
  return (
    <Wrapper
      color={color}
      noFold={noFold}
      gridArea={gridArea}
      noPadding={noPadding}
    >
      {children}
    </Wrapper>
  );
}
