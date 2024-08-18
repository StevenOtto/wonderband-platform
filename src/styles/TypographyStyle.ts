import { css } from "styled-components";
import { typo } from "./functions/typo";

const TypographyStyle = css`
  body {
    line-height: 1.25;
    font-weight: 500;
    font-family: "IBM Plex Mono", monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
    margin: 0;

    @media (max-width: 360px) {
      word-break: break-all;
      word-break: break-word;
      hyphens: auto;
    }
  }

  p {
    ${typo("p")};
    margin-top: 0;
    margin-bottom: 0;
    line-height: 150%;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: inherit;
  }

  p,
  a,
  div,
  input,
  button {
    font-weight: 400;
    font-family: "IBM Plex Mono", monospace;
    letter-spacing: 0.03em;
  }
`;

export default TypographyStyle;
