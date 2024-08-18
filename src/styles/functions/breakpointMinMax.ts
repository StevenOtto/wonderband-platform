import { BreakpointString } from '../types/styling';
import cssVars from '../cssVars';

const breakpointMinMax = ({
    css = null,
    min = null,
    max = null,
}: {
    css: string | null;
    min?: BreakpointString | null;
    max?: BreakpointString | null;
}): string | null => {
    if (min && max) {
        return `@media(min-width: ${cssVars.breakpoints[min]}px) and (max-width:  ${cssVars.breakpoints[max]}px) {${css}}`;
    }

    if (min) {
        if (cssVars.breakpoints[min] > 0) {
            return `@media(min-width: ${cssVars.breakpoints[min]}px) {${css};}`;
        }

        return `${css};`;
    }

    if (max) {
        return `@media(max-width: ${cssVars.breakpoints[max]}px) {${css}}`;
    }

    return null;
};

export default breakpointMinMax;
