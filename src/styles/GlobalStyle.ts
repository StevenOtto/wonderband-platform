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
        height: 100%;
        margin: 0;
        overflow-x: hidden;
    }

    body {
        background-color: ${cssVars.colors.blue};
        color: ${cssVars.colors.black};
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
        height: 100%;
        overflow-x: hidden;
        margin: 0;
        overscroll-behavior-y: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    main {
        ${distance("padding-top", bpVars.sizes.header_height)};
    }

    #root {
        height: 100%;
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
