import { BreakpointReadable, BreakpointString } from '../types/styling';
import convertArrayToResponsiveObject from './convertArrayToResponsiveObject';

/*
 *
 * Function that gets the closest value for the breakpoint that is present in the values
 * So e.g. if the breakpoint is 'md' but the values only contains xs, sm and xl. This
 * function will return the md
 *
 */
const valueForBreakpoint = (values: BreakpointReadable, breakpoint: BreakpointString): string | number | undefined => {
    const valuesAsBpObject = convertArrayToResponsiveObject(values);
    if (!valuesAsBpObject) return undefined;
    if (valuesAsBpObject[breakpoint]) return valuesAsBpObject[breakpoint];
    const fullArrayOfValues = Object.keys(BreakpointString).map((bp) => {
        return valuesAsBpObject[bp as BreakpointString];
    });

    const indexOfBreakpoint = Object.keys(BreakpointString).findIndex((bp) => bp === breakpoint);

    let nearestValue = undefined;
    for (let i = indexOfBreakpoint; i >= 0 && !nearestValue; i = i - 1) {
        if (fullArrayOfValues[i]) {
            nearestValue = fullArrayOfValues[i];
        }
    }

    return nearestValue;
};

export default valueForBreakpoint;
