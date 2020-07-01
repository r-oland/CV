const mediaQuery = (minWidth) => `@media (min-width: ${minWidth}px)`;

const fontSize = (size) =>
  `font-size: ${size}px;
  `;

export const theme = {
  primary: "rgba(253, 198, 26, 1)",
  black: "rgba(26, 26, 26, 1)",
  white: "rgba(255, 255, 255, 1)",
  notWhite: "rgba(250, 250, 250, 1)",

  shadow: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.1)",
    s: "0 1px 3px rgba(0, 0, 0, 0.2)",
    m: "0 4px 6px rgba(0, 0, 0, 0.1)",
    l: "0 10px 20px rgba(0, 0, 0, 0.15), 0 5px 8px rgba(0, 0, 0, 0.03)",
    xl: "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)",
  },
  spacing: [
    "0.25em",
    "0.5em",
    "0.75em",
    "1em",
    "1.25em",
    "1.5em",
    "1.75em",
    "2em",
    "2.5em",
    "3em",
    "4em",
    "5em",
    "6em",
    "8em",
    "10em",
    "12.5em",
    "16em",
    "20em",
    "24em",
    "30em",
    "48em",
  ],
  borderRadius: "5px",
  fontWeight: {
    normal: "400",
    semiBold: "500",
    bold: "600",
    heavy: "700",
  },
  mediaQ: {
    custom: mediaQuery,
    mobile: mediaQuery(400),
    tablet: mediaQuery(768),
    desktopS: mediaQuery(900),
    desktopM: mediaQuery(1200),
    desktopL: mediaQuery(1600),
  },
  fontSize: {
    s: fontSize(15),
    m: fontSize(17),
    l: fontSize(19),
    h4: fontSize(22),
    h3: fontSize(26),
    h2: fontSize(30),
    h1: fontSize(35),
  },
};
