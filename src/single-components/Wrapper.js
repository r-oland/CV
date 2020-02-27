// Components==============
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// =========================

const Wrap = styled(motion.div)`
  overflow: hidden;
  max-width: 334px;
  position: relative;
  width: 100%;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  background-color: ${({ color }) => color};
  padding: ${({ theme: { spacing }, padding }) =>
    padding === "noPadding" ? `0` : `${spacing.s4} ${spacing.s5}`};
  cursor: ${({ folded }) => (folded ? `initial` : `pointer`)};
  @media screen and (min-width: 720px) {
    grid-area: ${({ gridArea }) => gridArea};
  }

  @media screen and (min-width: 360px) {
    height: ${({ size }) => `calc(145px * ${size})`};
  }

  @media screen and (min-width: 720px) {
    cursor: initial;
  }
`;

const FoldText = styled.h3`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: ${({ folded }) => (folded ? `hidden` : `visible`)};
  color: ${({ color }) => (color === `rgba(43, 43, 43, 1)` ? `white` : ``)};
`;

const Visibility = styled.div`
  height: 100%;
  visibility: ${({ folded }) => (folded ? `visible` : `hidden`)};

  @media screen and (min-width: 720px) {
    visibility: visible;
  }
`;

export default function Wrapper({
  children,
  color,
  padding,
  size,
  foldText,
  noFold,
  id,
  gridArea
}) {
  const variants = () => {
    if (noFold === true) {
      return null;
    }

    return {
      folded: {
        height: 60
      },
      unFolded: {
        height: `calc(145px * ${size})`
      }
    };
  };

  const query =
    typeof window !== "undefined" && window.matchMedia("(min-width: 720px)");

  const [folded, setFolded] = useState(query.matches);

  useEffect(() => {
    window.addEventListener(`resize`, () => {
      setFolded(query.matches);
    });
  }, [folded, query.matches]);

  return (
    <Wrap
      gridArea={gridArea}
      className={id}
      color={color}
      padding={padding}
      size={size}
      folded={folded}
      whileHover={query.matches ? { scale: 1.05, zIndex: 5 } : { scale: 1 }}
      animate={folded ? "unFolded" : "folded"}
      transition={{
        damping: 10,
        stiffness: 100
      }}
      variants={variants()}
      initial={false}
      onClick={() => {
        if (query.matches === false) {
          folded ? setFolded(false) : setFolded(true);
        }
      }}
    >
      <FoldText folded={folded} color={color}>
        {foldText}
      </FoldText>
      <Visibility className={id} folded={folded}>
        {children}
      </Visibility>
    </Wrap>
  );
}
