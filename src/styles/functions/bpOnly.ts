import { css } from 'styled-components';
import cssVars, { breakpointsArray } from '../cssVars';

const bpOnly = (Object.keys(cssVars.breakpoints) as (keyof typeof cssVars.breakpoints)[]).reduce(
    (acc, label) => {
        const bpIndex = Object.keys(cssVars.breakpoints).indexOf(label as string);

        // If it is the highest breakpoint, just use regular bp.
        if (bpIndex === Object.keys(cssVars.breakpoints).length - 1) {
            acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
                @media (min-width: ${cssVars.breakpoints[label]}px) {
                    ${css(literals, ...placeholders)}
                }
            `;
        } else {
            const maxWidth = breakpointsArray[bpIndex + 1];

            acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => {
                return css`
                    @media (min-width: ${cssVars.breakpoints[label]}px) and (max-width: ${maxWidth - 1}px) {
                        ${css(literals, ...placeholders)}
                    }
                `;
            };
        }
        return acc;
    },
    {} as Record<keyof typeof cssVars.breakpoints, (l: TemplateStringsArray, ...p: any[]) => any>
);

export default bpOnly;
