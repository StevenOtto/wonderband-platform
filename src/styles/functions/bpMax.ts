import { css } from 'styled-components';
import cssVars from '../cssVars';

const bpMax = (Object.keys(cssVars.breakpoints) as (keyof typeof cssVars.breakpoints)[]).reduce(
    (acc, label) => {
        acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
            @media (max-width: ${cssVars.breakpoints[label] - 1}px) {
                ${css(literals, ...placeholders)}
            }
        `;
        return acc;
    },
    {} as Record<keyof typeof cssVars.breakpoints, (l: TemplateStringsArray, ...p: any[]) => any>
);

export default bpMax;
