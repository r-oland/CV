// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
// =========================

const Button = styled(motion.button)`
  background: ${({ theme: { primary } }) => primary};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: ${({ theme: { spacing } }) => `${spacing[0]} ${spacing[2]}`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  display: none;
  pointer-events: ${({ loadingState }) =>
    loadingState === "Generating Pdf..." && "none"};

  ${({ theme: { mediaQ } }) => mediaQ.custom(720)} {
    display: block;
    margin-right: ${({ theme: { spacing } }) => spacing[4]};
  }
`;

export default function PdfConverter() {
  const [loadingState, setLoadingState] = useState("Download page");

  const handleClick = () => {
    setLoadingState("Generating Pdf...");
    console.log("click");

    try {
      fetch("/.netlify/functions/convertToPdf").then((data) =>
        data.json().then((r) => {
          setLoadingState("Download page");

          const file = r.Files[0].Url;
          // Create an invisible A element
          const a = document.createElement("a");
          a.style.display = "none";
          document.body.appendChild(a);

          // Set the HREF to a Blob representation of the data to be downloaded
          a.href = file;

          // Use download attribute to set set desired file name
          a.setAttribute("download", "CV-Roland-Branten");

          // Trigger the download by simulating click
          a.click();

          // Cleanup
          window.URL.revokeObjectURL(a.href);
          document.body.removeChild(a);
        })
      );
    } catch {
      setLoadingState("Failed");
    }
  };

  return (
    <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      loadingState={loadingState}
    >
      {loadingState}
    </Button>
  );
}
