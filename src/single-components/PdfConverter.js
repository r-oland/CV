// Components==============
import React from "react";
import styled from "styled-components";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
// =========================

const Button = styled(motion.button)`
  background: ${({ theme: { primary } }) => primary};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[2]}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  display: none;

  ${({ theme: { mediaQ } }) => mediaQ.custom(720)} {
    display: block;
    margin-right: ${({ theme: { spacing } }) => spacing[4]};
  }
`;

export default function PdfConverter() {
  const handleClick = () => {
    fetch("/.netlify/functions/test").then((data) => {
      return console.log(data);
    });
  };

  return (
    <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      Download page
    </Button>
  );
}
