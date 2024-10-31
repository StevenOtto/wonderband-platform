import { createGlobalStyle } from "styled-components";
import TypographyStyle from "./TypographyStyle";
import SanitizeStyle from "./SanitizeStyle";
import cssVars from "./cssVars";
import { distance } from "./functions/cssRulesPerBreakpointPresets";
import bpVars from "./bpVars";

const GlobalStyle = createGlobalStyle`
    ${SanitizeStyle}
    ${TypographyStyle}

    img {
        max-width: 100%;
        height: auto;
    }

    html {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${cssVars.colors.blue};
        color: ${cssVars.colors.black};
        width: 100%;
        padding: 0;
        min-height: 100vh;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        margin: 0;
        overscroll-behavior-y: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    main {
        ${distance("padding-top", bpVars.sizes.header_height)};
    }

    button {
        color: inherit;
        border: 0;
        padding: 0;
        border-radius: 0;
    }

    ul {
        padding: 0;
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
    }

    strong {
        font-weight: 500;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default GlobalStyle;
