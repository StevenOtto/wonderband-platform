import breakpointMinMax from './breakpointMinMax';
import convertArrayToResponsiveObject from '../helpers/convertArrayToResponsiveObject';
import { BreakpointReadable, BreakpointString } from '../types/styling';

/*
 *
 * Function that converts either an array or object (with breakpoints as keys)
 * to a string with css.
 * prop: css property to be set
 * values: array/object containing the css values to be set per bp
 *          - object based on keys {xs: 1, sm: 2 etc.
 *          - array based on index [0] = xs, [1] = sm etc
 *              (will be automatically converted to key-based object).
 * valueFunc: used to transform the values to usable css values
 *          - e.g. simply add 'px' --- (val) => `${val}px`
 *          - e.g. convert to percentage --- (val) => `${100 * val}%`
 *
 */
const cssRulePerBreakpoint = (
    prop: string,
    values: string | number | BreakpointReadable,
    valueFunc = (val: any): string | number => val
): string | null => {
    if (typeof values === 'string' || typeof values === 'number') {
        // If string given, do not use any breakpoints, just return value with prop
        return `${prop}: ${valueFunc(values)}`;
    }
    const responsiveValues = convertArrayToResponsiveObject(values);
    if (!responsiveValues) return null;
    return (Object.keys(responsiveValues) as BreakpointString[]).reduce((result, breakpoint) => {
        if (responsiveValues[breakpoint] || responsiveValues[breakpoint] === 0) {
            return `${result} ${breakpointMinMax({
                css: `${prop}: ${valueFunc(responsiveValues[breakpoint])}`,
                min: breakpoint,
            })}`;
        }
        return result;
    }, '');
};

export default cssRulePerBreakpoint;
